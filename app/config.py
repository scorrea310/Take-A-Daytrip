import os
import click
import json

db_secret = os.environ.get("DATABASE_URL")


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
    # (only 'postgresql') but heroku's postgres add-on automatically sets the
    # url in the hidden config vars to start with postgres.
    # so the connection uri must be updated here
    SQLALCHEMY_ECHO = True
    GOOGLE_API_KEY = os.environ.get("MAPS_API_KEY")
    LOB_ADDRESS_VERIFICATION_API_KEY = os.environ.get(
        "LOB_ADDRESS_VERIFICATION_API_KEY"
    )
    if os.environ.get("FLASK_ENV") == "production":
        parsed_secret = json.loads(db_secret)
        db_connection_string = (
            f"{parsed_secret['engine']}://"
            f"{parsed_secret['username']}:{parsed_secret['password']}@"
            f"{parsed_secret['host']}:{parsed_secret['port']}/"
            f"{parsed_secret['dbname']}"
        )
        SQLALCHEMY_DATABASE_URI = db_connection_string.replace(
            "postgres://", "postgresql://"
        )
    else:
        SQLALCHEMY_DATABASE_URI = db_secret
