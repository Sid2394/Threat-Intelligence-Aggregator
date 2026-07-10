import requests
from config import Config

URL = "https://api.abuseipdb.com/api/v2/check"

def check_ip(ip):

    headers = {
        "Accept": "application/json",
        "Key": Config.ABUSEIPDB_API_KEY
    }

    params = {
        "ipAddress": ip,
        "maxAgeInDays": 90
    }

    response = requests.get(
        URL,
        headers=headers,
        params=params,
        timeout=30
    )

    print("Status:", response.status_code)
    print("Response:", response.text)

    response.raise_for_status()

    return response.json()["data"]