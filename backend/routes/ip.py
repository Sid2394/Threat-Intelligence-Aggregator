from flask import Blueprint, jsonify
from services.abuseipdb import check_ip

ip_bp = Blueprint("ip", __name__)


@ip_bp.route("/api/ip/<string:ip>")
def lookup(ip):

    try:

        result = check_ip(ip)

        return jsonify({
    "status": "success",
    "data": {
        "ip": result["ipAddress"],
        "is_public": result["isPublic"],
        "country": result["countryCode"],
        "isp": result["isp"],
        "domain": result["domain"],
        "hostnames": result["hostnames"],
        "usage_type": result["usageType"],
        "abuse_score": result["abuseConfidenceScore"],
        "reports": result["totalReports"],
        "distinct_users": result["numDistinctUsers"],
        "last_reported": result["lastReportedAt"],
        "is_whitelisted": result["isWhitelisted"],
        "is_tor": result["isTor"]
    }
})

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500