import os
import json

from flask import Flask, render_template, request, session, redirect, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.lob_address import lob_address_routes
from .api.auth_routes import auth_routes
from .api.spot_routes import spot_routes
from .api.reservation_routes import reservation_routes
from .api.maps import maps
from .api.review_routes import review_routes
from .seeds import seed_commands

from .config import Config


# Create the application factory function
def create_app(flask_config=Config):
    app = Flask(__name__)

    # Setup login manager
    login = LoginManager(app)
    login.login_view = "auth.unauthorized"

    @login.user_loader
    def load_user(id):
        return User.query.get(int(id))

    @login.unauthorized_handler
    def unauthorized():
        return {"error": "Unauthorized to make this request."}, 401

    # Tell flask about our seed commands
    app.cli.add_command(seed_commands)

    app.config.from_object(flask_config)
    app.register_blueprint(user_routes, url_prefix="/api/users")
    app.register_blueprint(auth_routes, url_prefix="/api/auth")
    app.register_blueprint(spot_routes, url_prefix="/api/spots")
    app.register_blueprint(reservation_routes, url_prefix="/api/reservations")
    app.register_blueprint(maps, url_prefix="/api/maps")
    app.register_blueprint(lob_address_routes, url_prefix="/api/lob_api_key")
    app.register_blueprint(review_routes, url_prefix="/api/reviews")
    db.init_app(app)
    Migrate(app, db)

    # Application Security
    CORS(app)

    # Since we are deploying with Docker and Flask,
    # we won't be using a buildpack when we deploy to Heroku.
    # Therefore, we need to make sure that in production any
    # request made over http is redirected to https.
    # Well.........
    @app.before_request
    def https_redirect():
        if os.environ.get("FLASK_ENV") == "production":
            if request.headers.get("X-Forwarded-Proto") == "http":
                url = request.url.replace("http://", "https://", 1)
                code = 301
                return redirect(url, code=code)

    @app.after_request
    def inject_csrf_token(response):
        response.set_cookie(
            "csrf_token",
            generate_csrf(),
            secure=True if os.environ.get("FLASK_ENV") == "production" else False,
            samesite="Strict" if os.environ.get("FLASK_ENV") == "production" else None,
            httponly=True,
        )
        return response

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def react_root(path):
        if path == "favicon.ico":
            return app.send_static_file("favicon.ico")
        return app.send_static_file("index.html")

    @app.route("/health")
    def health_check():
        return {"status": "ok"}, 200

    return app


app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
