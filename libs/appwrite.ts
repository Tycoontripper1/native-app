import * as Linking from 'expo-linking'
import { openAuthSessionAsync } from 'expo-web-browser'
import {Account, Avatars, Client, OAuthProvider} from "react-native-appwrite"
export const config = {
    platform: 'com.Bombhack.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT, // Should be the Appwrite API endpoint
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID, // Should be the project ID
}

export const client = new Client()

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.endpoint!)

    export const avatar = new Avatars(client)
    export const account = new Account(client)

    export async function login() {
        try {
            const redirectUrl = Linking.createURL('/')
            const response = await account.createOAuth2Token(
                OAuthProvider.Google,
                redirectUrl
            )
            if(!response) throw new Error("Failed to Login")

            const browserResult = await openAuthSessionAsync(
                response.toString(),
                redirectUrl
            )
            if(browserResult.type !== 'success' ) throw new Error()
                const url = new URL(browserResult.url)
            const secret = url.searchParams.get('secret')?.toString()
            const userId = url.searchParams.get('userId')?.toString()

            if(!secret || !userId) throw new Error("Fialed to Login")

                const session = await account.createSession(userId, secret)

                if(!session) throw new Error('Failed to create a session')
                    return true
         
        } catch (error ) {
            console.error(error)
            return false
        }
    }

    export async function logout() {
        try {
            
         await account.deleteSession('current')
         return true
        } catch (error ) {
            console.error(error)
            return false
        }
    }
    export async function getCurrentUser() {
        try {
            
         const response =await account.get()
         if(response.$id){
            const userAvatar = avatar.getInitials(response.name)

            return {
                ...response,
                avatar: userAvatar.toString()
            }
         }
         return true
        } catch (error ) {
            console.error(error)
            return false
        }
    }

