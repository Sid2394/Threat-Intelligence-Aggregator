import requests
from config import Config
from database import db
from models.threat import Threat

NVD_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0"


def fetch_and_store_cves(results_per_page=20):

    headers = {
        "apiKey": Config.NVD_API_KEY,
        "User-Agent": "Threat-Intelligence-Aggregator"
    }

    params = {
        "resultsPerPage": results_per_page
    }

    response = requests.get(
        NVD_URL,
        headers=headers,
        params=params,
        timeout=60
    )

    response.raise_for_status()

    data = response.json()

    vulnerabilities = data.get("vulnerabilities", [])

    new_records = 0

    for item in vulnerabilities:

        cve = item["cve"]

        cve_id = cve.get("id")

        if Threat.query.filter_by(cve_id=cve_id).first():
            continue

        description = ""

        descriptions = cve.get("descriptions", [])

        if descriptions:
            description = descriptions[0]["value"]

        severity = "UNKNOWN"

        score = 0

        metrics = cve.get("metrics", {})

        if metrics.get("cvssMetricV31"):

            metric = metrics["cvssMetricV31"][0]["cvssData"]

            severity = metric.get("baseSeverity", "UNKNOWN")

            score = metric.get("baseScore", 0)

        elif metrics.get("cvssMetricV30"):

            metric = metrics["cvssMetricV30"][0]["cvssData"]

            severity = metric.get("baseSeverity", "UNKNOWN")

            score = metric.get("baseScore", 0)

        elif metrics.get("cvssMetricV2"):

            metric = metrics["cvssMetricV2"][0]

            severity = metric.get("baseSeverity", "UNKNOWN")

            score = metric.get("cvssData", {}).get("baseScore", 0)

        published = cve.get("published", "")

        threat = Threat(
            cve_id=cve_id,
            title=cve_id,
            description=description,
            severity=severity,
            cvss_score=score,
            published_date=published,
            source="NVD",
            url=f"https://nvd.nist.gov/vuln/detail/{cve_id}"
        )

        db.session.add(threat)

        new_records += 1

    db.session.commit()

    return {
        "new_records": new_records,
        "total_received": len(vulnerabilities)
    }