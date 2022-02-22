from flask import Blueprint, jsonify, request
from app.models import db, Reservation
import click
from app.forms import ReservationForm


reservation_routes = Blueprint("reservation", __name__)


@reservation_routes.route("/<int:id>", methods=["POST"])
def add_reservation(id):
    """
    Creates a new Reservation
    the id above is the user id to create reservation for.
    """ 
    form = ReservationForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        click.echo(click.style("it worked!!!!!!", bg='red', fg='white'))

        new_reservation = Reservation(
            spot_id=form.data["spot_id"],
            user_id=id,
            number_of_guests=form.data["number_of_guests"],
            reservation=form.data["reservation"],
            price=form.data["price"],
        )

        db.session.add(new_reservation)
        db.session.commit()

        return new_reservation.to_dict()
        
    
    click.echo(click.style(str(form.errors), bg='red', fg='white'))
    return {"errors": form.errors}, 400