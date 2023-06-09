from flask import Blueprint, jsonify, request
from app.config import Config
from app.forms import LobAddressVerificationForm

lob_address_routes = Blueprint("lob_api_key", __name__)

@lob_address_routes.route("", methods=["POST"])
def get_lob_api_key():

    form = LobAddressVerificationForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        return {"key": Config.LOB_ADDRESS_VERIFICATION_API_KEY}