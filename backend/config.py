import os
from dotenv import load_dotenv

load_dotenv()

class Config:

    SECRET_KEY = os.getenv("SECRET_KEY")

    BASE_DIR = os.path.abspath(os.path.dirname(__file__))

    SQLALCHEMY_DATABASE_URI = (
        "sqlite:///" +
        os.path.join(BASE_DIR, "threats.db")
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    NVD_API_KEY = os.getenv("NVD_API_KEY")

    ABUSEIPDB_API_KEY = os.getenv("ABUSEIPDB_API_KEY")

    OTX_API_KEY = os.getenv("OTX_API_KEY")

    PHISHTANK_API_KEY = os.getenv("PHISHTANK_API_KEY")