# The Fokals API with curl

Every tool of the MCP is an endpoint at `https://api.fokals.com/v1/<tool>`: a `POST` with a JSON body, your key as a bearer token. Make a key on your [account page](https://www.fokals.com/account).

```bash
export FOKALS_API_KEY=your_key
fokals() {
  local body="$2"
  [ -z "$body" ] && body='{}'
  curl -s "https://api.fokals.com/v1/$1" \
    -H "Authorization: Bearer $FOKALS_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$body"
}
```

## Balance and prices (free)

```bash
curl -s https://api.fokals.com/v1/account -H "Authorization: Bearer $FOKALS_API_KEY"
```

## Count first (free), then find

```bash
fokals count_companies '{"buying_topic": "Marketing automation", "country": "DE"}'
fokals find_companies  '{"buying_topic": "Marketing automation", "country": "DE"}'
```

## Enrich your own list

```bash
fokals enrich_companies '{"companies": ["acme.com", "globex.com", "Initech"]}'
```

## One company in depth

```bash
fokals company_profile '{"company": "acme.com", "sections": ["technology", "hiring", "buying_topics"]}'
```

## Open roles

```bash
fokals search_job_postings '{"title": "data engineer", "technology": "Snowflake", "country": "GB", "work_mode": "remote"}'
```

## The values a filter takes (free)

```bash
fokals list_filters '{"kind": "buying_topics"}'
```

## When a call costs more than you set

A call above the asking amount answers with its price and does nothing. Send it again with `max_usd` once you agree:

```bash
fokals find_companies '{"technology": "Shopify", "hiring": true, "max_usd": 2}'
```

The reference for every tool and field: [fokals.com/docs/connect#reference](https://www.fokals.com/docs/connect#reference).
