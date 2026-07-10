from flask import Flask, jsonify
from flask_cors import CORS

from routes.ip import ip_bp

from config import Config
from database import db

from routes.cve import cve_bp
from routes.dashboard import dashboard_bp


from config import Config

print("NVD Key:", Config.NVD_API_KEY)
print("AbuseIPDB Key:", Config.ABUSEIPDB_API_KEY)


app = Flask(__name__)

app.config.from_object(Config)

CORS(app)

db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(cve_bp)
app.register_blueprint(dashboard_bp)
app.register_blueprint(ip_bp)

@app.route("/")
def home():

    return jsonify({
        "message": "Threat Intelligence Aggregator API",
        "status": "running"
    })


@app.route("/health")
def health():

    return jsonify({
        "status": "healthy"
    })

from config import Config

print("NVD Key:", Config.NVD_API_KEY)
print("AbuseIPDB Key:", Config.ABUSEIPDB_API_KEY)

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)