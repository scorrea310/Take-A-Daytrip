from flask import Blueprint, jsonify, request
from app.models import db, Spot
from app.forms import SpotListingForm
import click

spot_routes = Blueprint("spot", __name__)


@spot_routes.route("", methods=["POST"])
def add_spot():
    """
    Creates a new Spot
    """ 
    form = SpotListingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    

    if form.validate_on_submit():
        click.echo(click.style("steveveve", bg='red', fg='white'))
        new_spot = Spot(
            type=form.data["type"],
            address=form.data["address"],
            pets=form.data["petsAllowed"],
            total_occupancy=form.data["totalOccupancy"],
            total_bedrooms=form.data["totalBedrooms"],
            total_bathrooms=form.data["totalBathrooms"],
            description=form.data["description"],
            has_wifi=form.data["hasWifi"],
            has_tv=form.data["hasTv"],
            has_ac=form.data["hasAc"],
            price_per_hour=form.data["price"],
            host_id=form.data["userId"]
        )
    
        db.session.add(new_spot)
        db.session.commit()

        return new_spot.to_dict()
        
    
    click.echo(click.style(str(form.errors), bg='red', fg='white'))
    return {"errors": form.errors}, 400


