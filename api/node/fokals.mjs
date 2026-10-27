// The Fokals API from Node 18 or later (built-in fetch). Run:
//   FOKALS_API_KEY=your_key node fokals.mjs
const KEY = process.env.FOKALS_API_KEY;
if (!KEY) throw new Error('Set FOKALS_API_KEY to a key from https://www.fokals.com/account');

async function fokals(tool, body = {}) {
  const res = await fetch(`https://api.fokals.com/v1/${tool}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${tool}: ${res.status} ${await res.text()}`);
  return res.json();
}

// How many match, and what they would cost (free).
const filters = { technology: 'Shopify', hiring: true, country: 'US' };
console.log(await fokals('count_companies', filters));

// Your own list, enriched.
const enriched = await fokals('enrich_companies', { companies: ['acme.com', 'globex.com'] });
console.log(JSON.stringify(enriched, null, 2));
