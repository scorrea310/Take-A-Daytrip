from flask import Blueprint, jsonify, request
from app.models import db, Review
import click

review_routes = Blueprint("reviews", __name__)

@review_routes.route("", methods=["POST"])
