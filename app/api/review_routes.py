from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.forms import ReviewsForm
from app.models import Review

review_routes = Blueprint("reviews", __name__)


@review_routes.route("", methods=["POST"])
def add_review():
    """
    Creates a new Review.
    """
    form = ReviewsForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_review = Review(
            spot_id=form.data["spotId"],
            rating=form.data["rating"],
            description=form.data["description"],
            user_id=form.data["userId"],
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict()

    return {"errors": form.errors}, 400


@review_routes.route("/<int:spot_id>")
def get_reviews(spot_id):
    reviews = Review.query.filter(Review.spot_id == spot_id)
    return {"reviews": [review.to_dict() for review in reviews]}
