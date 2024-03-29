from flask import Blueprint, jsonify, request
from app.config import Config
from app.forms import MapsForm
from flask_login import current_user

maps = Blueprint("maps", __name__)


@maps.route("", methods=["POST"])
def get_maps_key():
    form = MapsForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        return {"key": Config.GOOGLE_API_KEY}
