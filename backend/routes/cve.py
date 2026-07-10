from flask import Blueprint, jsonify

from services.nvd_service import fetch_and_store_cves
from models.threat import Threat

cve_bp = Blueprint("cve", __name__)


@cve_bp.route("/api/cves/update")
def update():

    result = fetch_and_store_cves()

    return jsonify(result)


@cve_bp.route("/api/cves")
def all_cves():

    threats = Threat.query.order_by(
        Threat.id.desc()
    ).all()

    return jsonify([
        t.to_dict()
        for t in threats
    ])


@cve_bp.route("/api/cves/search/<string:cve_id>")
def search(cve_id):

    threat = Threat.query.filter_by(
        cve_id=cve_id
    ).first()

    if threat:

        return jsonify(threat.to_dict())

    return jsonify({
        "message": "CVE not found"
    }), 404


@cve_bp.route("/api/cves/severity/<string:severity>")
def severity(severity):

    threats = Threat.query.filter_by(
        severity=severity.upper()
    ).all()

    return jsonify([
        t.to_dict()
        for t in threats
    ])


@cve_bp.route("/api/cves/page/<int:page>")
def page(page):

    pagination = Threat.query.paginate(
        page=page,
        per_page=10,
        error_out=False
    )

    return jsonify({
        "page": page,
        "total_pages": pagination.pages,
        "total_records": pagination.total,
        "data": [
            t.to_dict()
            for t in pagination.items
        ]
    })