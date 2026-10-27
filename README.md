# Fokals examples

Live company data in your AI assistant and your code: the technologies a company runs, the roles it is hiring for, the buying topics it shows signs of, its announcements and the changes on its website.

This repository has ready-to-use setups for the **Fokals MCP** (Claude, ChatGPT, Claude Code, Cursor, VS Code) and short examples of the **Fokals API** in curl, Node and Python, plus a Postman collection.

- Website: [fokals.com](https://www.fokals.com)
- Setup guide and full reference: [fokals.com/docs/connect](https://www.fokals.com/docs/connect)
- Pricing: [fokals.com/pricing](https://www.fokals.com/pricing)
- Monthly reports: [fokals.com/reports](https://www.fokals.com/reports)

## Get started

1. Create a free account at [fokals.com/signup](https://www.fokals.com/signup). Your account opens with credit, so your first companies are free. No card, no subscription.
2. Add the MCP to your assistant (below), or make a key on your account page for the API.
3. Ask: "Enrich these ten companies", or "Find B2B software companies that started hiring this month".

Every answer says what it cost. A request above a set amount shows its price first and waits for your yes.

## The MCP

MCP address:

```
https://mcp.fokals.com/mcp
```

| Where | How |
| --- | --- |
| Claude and ChatGPT | In the assistant's settings, add a custom connector with the address above, then sign in to Fokals when asked. |
| Claude Code | `claude mcp add --transport http fokals https://mcp.fokals.com/mcp --header "Authorization: Bearer $FOKALS_API_KEY"` |
| Cursor | Copy [mcp/cursor.json](mcp/cursor.json) into `.cursor/mcp.json`. |
| VS Code | Copy [mcp/vscode.json](mcp/vscode.json) into `.vscode/mcp.json`. |
| Cline | Add [mcp/cline.json](mcp/cline.json) to `cline_mcp_settings.json` (or ask Cline to install it from [llms-install.md](llms-install.md)), then press **Authenticate** on fokals under MCP Servers and sign in. |

Things to ask once it is connected are in [prompts.md](prompts.md).

## The API

The same tools as plain HTTP endpoints at `https://api.fokals.com/v1`, on the same account, balance and prices. One request a tool, with your key as a bearer token.

```bash
export FOKALS_API_KEY=your_key_from_the_account_page

# Your balance and what each call costs (free)
curl -s https://api.fokals.com/v1/account -H "Authorization: Bearer $FOKALS_API_KEY"

# Count the matches before you spend anything (free)
curl -s https://api.fokals.com/v1/count_companies \
  -H "Authorization: Bearer $FOKALS_API_KEY" -H "Content-Type: application/json" \
  -d '{"technology": "Shopify", "hiring": true, "country": "US"}'

# Then get them
curl -s https://api.fokals.com/v1/find_companies \
  -H "Authorization: Bearer $FOKALS_API_KEY" -H "Content-Type: application/json" \
  -d '{"technology": "Shopify", "hiring": true, "country": "US"}'
```

More in [api/curl.md](api/curl.md), [api/node/fokals.mjs](api/node/fokals.mjs) and [api/python/fokals.py](api/python/fokals.py). The OpenAPI file is at [api.fokals.com/v1/openapi.json](https://api.fokals.com/v1/openapi.json), and [postman/](postman/) has a collection to import.

## What you can ask for

| Tool | What it does |
| --- | --- |
| `count_companies` | How many companies match, and what they would cost. Free. |
| `find_companies` | Companies by a technology they run, a buying topic, hiring now, a recent announcement, industry, country or size. |
| `enrich_companies` | Your own list, by website or name, with industry, technologies, hiring and buying signals. |
| `company_profile` | One company in depth: technologies and since when, open roles, buying topics, announcements, website changes. |
| `company_changes` | What changed lately at the companies you name. |
| `search_job_postings` | Open roles by title, function, seniority, country, work mode, technology or pay. |
| `similar_companies` | Lookalikes or competitors of a company. |
| `company_connections` | Customers, partners, integrations and investors a company names. |
| `identify_company` | Which company a name or address means. Free. |
| `market_breakdown` | A market split by industry, country, size or technology. |
| `list_filters` | The values each filter takes. Free. |
| `watch_companies` | An email when something changes at the companies you name. |

The full list, with every field, is in the [reference](https://www.fokals.com/docs/connect#reference).

## Licence

The code in this repository is MIT licensed. Fokals data is covered by the [Fokals Terms of Service](https://www.fokals.com/terms).
