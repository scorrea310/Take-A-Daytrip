from flask import Blueprint, jsonify, request
from app.config import Config
import click

maps = Blueprint("maps", __name__)

@maps.route("", methods=["POST"])
def get_maps_key():
    return {"key": Config.GOOGLE_API_KEY}