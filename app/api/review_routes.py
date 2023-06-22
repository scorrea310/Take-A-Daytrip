from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.forms import ReviewsForm
from app.models import db, Review

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


# Move this logic to get spots api route. Also, when spot is deleted,
# Make sure to delete it's reviews
# When Spot is deleted make sure to delete its Reservations
@review_routes.route("/<int:spot_id>")
def get_reviews(spot_id):
    reviews = Review.query.filter(Review.spot_id == spot_id)

    return {"reviews": [review.to_dict() for review in reviews]}


@review_routes.route("/user/<int:user_id>")
def get_user_review(user_id):
    my_reviews = {}
    reviews = Review.query.filter(Review.user_id == user_id)

    for review in reviews:
        my_reviews[review.spot_id] = review.to_dict()

    return {"my_reviews": my_reviews}


@review_routes.route("/<int:review_id>", methods=["PATCH"])
def edit_review(review_id):
    form = ReviewsForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        old_review = Review.query.get(review_id)
        old_review.rating = form.data["rating"]
        old_review.description = form.data["description"]

        db.session.commit()

        return old_review.to_dict()

    return {"errors": form.errors}, 400


@review_routes.route("/<int:review_id>", methods=["DELETE"])
def delete_cart_item(review_id):
    review_to_delete = Review.query.get(review_id)
    db.session.delete(review_to_delete)
    db.session.commit()

    return {"success": "deleted"}
