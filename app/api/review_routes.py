from flask import Blueprint, jsonify, request
from flask_login import current_user

review_routes = Blueprint("reviews", __name__)


@review_routes.route("", methods=["POST"])
def add_review():
    # url: '/reviews' takes in spot.id via request body
    # gets user id from current_user
    # validates that user has been to spot (do in forms?)
    # adds review
    return


@review_routes.route("/")
def get_reviews():
    return
