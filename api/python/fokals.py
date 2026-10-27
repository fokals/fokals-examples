"""The Fokals API from Python 3 with the requests package. Run:

    pip install requests
    FOKALS_API_KEY=your_key python fokals.py
"""
import json
import os

import requests

KEY = os.environ.get("FOKALS_API_KEY")
if not KEY:
    raise SystemExit("Set FOKALS_API_KEY to a key from https://www.fokals.com/account")


def fokals(tool, body=None):
    res = requests.post(
        f"https://api.fokals.com/v1/{tool}",
        headers={"Authorization": f"Bearer {KEY}"},
        json=body or {},
        timeout=60,
    )
    res.raise_for_status()
    return res.json()


# How many match, and what they would cost (free).
print(fokals("count_companies", {"buying_topic": "Marketing automation", "country": "DE"}))

# One company in depth.
profile = fokals("company_profile", {"company": "acme.com", "sections": ["technology", "hiring"]})
print(json.dumps(profile, indent=2))
