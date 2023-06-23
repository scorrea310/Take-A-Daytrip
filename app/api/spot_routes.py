from flask import Blueprint, jsonify, request
from app.models import db, Spot, Image
from app.forms import SpotListingForm
import click
from app.s3_helpers import upload_file_to_s3, allowed_file, get_unique_filename

spot_routes = Blueprint("spot", __name__)


@spot_routes.route("", methods=["POST"])
def add_spot():
    """
    Creates a new Spot
    """
    form = SpotListingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        click.echo(click.style("steveveve", bg="red", fg="white"))
        new_spot = Spot(
            type=form.data["type"],
            name=form.data["name"],
            address=form.data["address"],
            longitude=form.data["longitude"],
            latitude=form.data["latitude"],
            pets=form.data["petsAllowed"],
            total_occupancy=form.data["totalOccupancy"],
            total_bedrooms=form.data["totalBedrooms"],
            total_bathrooms=form.data["totalBathrooms"],
            description=form.data["description"],
            has_wifi=form.data["hasWifi"],
            has_tv=form.data["hasTv"],
            has_ac=form.data["hasAc"],
            price_per_day=form.data["price"],
            host_id=form.data["userId"],
        )

        db.session.add(new_spot)
        db.session.commit()

        return new_spot.to_dict()

    click.echo(click.style(str(form.errors), bg="red", fg="white"))
    return {"errors": form.errors}, 400


@spot_routes.route("/<int:id>/spot_images", methods=["POST"])
def upload_spot_images(id):
    """
    Creates a new spot image.
    """
    image_urls = []

    if "images" not in request.files:
        return {"errors": "Image required."}, 400

    images = request.files.getlist("images")

    if len(images) > 4:
        return {"errors": "Upload cannot exceed five images per listing."}, 400

    for image in images:
        if not allowed_file(image.filename):
            return {"errors": "File type not permitted."}

        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            click.echo(click.style(str(upload), bg="red", fg="white"))
            return upload, 400

        image_url = upload["url"]
        new_image = Image(spot_id=id, image_url=image_url)

        db.session.add(new_image)
        db.session.commit()

        image_urls.append(image_url)

    return {"image_urls": image_urls}


@spot_routes.route("/")
def get_spots():
    """
    GETS all spots
    """
    all_spots = Spot.query.all()
    return_spots = {}
    for spot in all_spots:
        return_spots[spot.id] = spot.to_dict()

    return {"spots": return_spots}


@spot_routes.route("/<int:id>", methods=["PATCH"])
def update_spot(id):
    form = SpotListingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        old_spot = Spot.query.get(id)

        old_spot.type = form.data["type"]
        old_spot.name = form.data["name"]
        old_spot.address = form.data["address"]
        old_spot.pets = form.data["petsAllowed"]
        old_spot.total_occupancy = form.data["totalOccupancy"]
        old_spot.total_bedrooms = form.data["totalBedrooms"]
        old_spot.total_bathrooms = form.data["totalBathrooms"]
        old_spot.description = form.data["description"]
        old_spot.has_wifi = form.data["hasWifi"]
        old_spot.has_tv = form.data["hasTv"]
        old_spot.has_ac = form.data["hasAc"]
        old_spot.price_per_day = form.data["price"]

        db.session.commit()

        return old_spot.to_dict()

    return {"errors": form.errors}, 400


@spot_routes.route("/<int:id>/delete", methods=["DELETE"])
def delete_cart_item(id):
    spot_to_delete = Spot.query.get(id)
    db.session.delete(spot_to_delete)
    db.session.commit()

    return {"message": "deleted"}


@spot_routes.route("/users_listings/<int:id>")
def get_a_users_listings(id):
    """
    GETS listings belonging to a user
    """

    users_listings = Spot.query.filter(Spot.host_id == id)

    listings_under_user = {}

    for listing in users_listings:
        listings_under_user[listing.id] = listing.to_dict()

    return {"my_listings": listings_under_user}
