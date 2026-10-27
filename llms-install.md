# Installing the Fokals MCP (for AI agents such as Cline)

Fokals is a hosted, remote MCP server. There is nothing to install or build: add its address to the MCP settings, then the user signs in.

1. The user needs a free Fokals account. If they have none, ask them to create one at https://www.fokals.com/signup.
2. Add this server to the MCP settings file (for Cline, `cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "fokals": {
      "type": "streamableHttp",
      "url": "https://mcp.fokals.com/mcp",
      "disabled": false
    }
  }
}
```

3. The server asks for sign-in. In Cline, open MCP Servers, find **fokals** and press **Authenticate**: the user signs in to Fokals in the browser, and the server connects. Never invent credentials.
4. Instead of signing in, a key works too: the user makes one on https://www.fokals.com/account, and the server entry gets `"headers": { "Authorization": "Bearer <the user's key>" }`.
5. Check the connection with the free `account_balance` tool: it returns the balance and the price of each call.
6. Before a paid search, call the free `count_companies` tool with the same filters, so the user sees how many companies match and what they would cost. A call above the account's asking amount returns its price instead of running; run it again with `max_usd` only after the user agrees.

Tools, fields and prices: https://www.fokals.com/docs/connect#reference
