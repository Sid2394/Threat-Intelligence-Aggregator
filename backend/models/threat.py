from database import db


class Threat(db.Model):

    __tablename__ = "threats"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    cve_id = db.Column(
        db.String(50),
        unique=True,
        nullable=False
    )

    title = db.Column(
        db.String(255),
        nullable=False
    )

    description = db.Column(
        db.Text,
        nullable=False
    )

    severity = db.Column(
        db.String(20),
        default="UNKNOWN"
    )

    cvss_score = db.Column(
        db.Float,
        default=0.0
    )

    published_date = db.Column(
        db.String(100)
    )

    source = db.Column(
        db.String(100),
        default="NVD"
    )

    url = db.Column(
        db.String(500)
    )

    def to_dict(self):

        return {
            "id": self.id,
            "cve_id": self.cve_id,
            "title": self.title,
            "description": self.description,
            "severity": self.severity,
            "cvss_score": self.cvss_score,
            "published_date": self.published_date,
            "source": self.source,
            "url": self.url
        }