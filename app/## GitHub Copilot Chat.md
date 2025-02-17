## GitHub Copilot Chat

- Extension Version: 0.24.0 (prod)
- VS Code: vscode/1.97.1
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.6 (111 ms)
- DNS ipv6 Lookup: Error (76 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (0 ms)
- Electron fetch (configured): HTTP 200 (1964 ms)
- Node.js https: HTTP 200 (600 ms)
- Node.js fetch: HTTP 200 (485 ms)
- Helix fetch: HTTP 200 (624 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.21 (135 ms)
- DNS ipv6 Lookup: Error (147 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (4 ms)
- Electron fetch (configured): HTTP 200 (2533 ms)
- Node.js https: 