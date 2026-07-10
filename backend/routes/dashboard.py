from flask import Blueprint, jsonify
from models.threat import Threat

dashboard_bp = Blueprint("dashboard", __name__)


@dashboard_bp.route("/api/dashboard")
def dashboard():

    return jsonify({

        "total": Threat.query.count(),

        "critical":
        Threat.query.filter_by(
            severity="CRITICAL"
        ).count(),

        "high":
        Threat.query.filter_by(
            severity="HIGH"
        ).count(),

        "medium":
        Threat.query.filter_by(
            severity="MEDIUM"
        ).count(),

        "low":
        Threat.query.filter_by(
            severity="LOW"
        ).count()
    })