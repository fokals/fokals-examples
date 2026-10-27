# Installing the Fokals MCP (for AI agents such as Cline)

Fokals is a hosted, remote MCP server. There is nothing to install or build: add its address to the MCP settings and give it a key.

1. The user needs a free Fokals account and a key. Ask the user to create the account at https://www.fokals.com/signup and to make a key on https://www.fokals.com/account. Never invent a key.
2. Add this server to the MCP settings file (for Cline, `cline_mcp_settings.json`), with the user's key in place of `YOUR_KEY`:

```json
{
  "mcpServers": {
    "fokals": {
      "type": "streamableHttp",
      "url": "https://mcp.fokals.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_KEY"
      },
      "disabled": false
    }
  }
}
```

3. Check the connection by calling the free `account_balance` tool: it returns the balance and the price of each call.
4. Before a paid search, call the free `count_companies` tool with the same filters, so the user sees how many companies match and what they would cost. A call above the account's asking amount returns its price instead of running; run it again with `max_usd` only after the user agrees.

Tools, fields and prices: https://www.fokals.com/docs/connect#reference
