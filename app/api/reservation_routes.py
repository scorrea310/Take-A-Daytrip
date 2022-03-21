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
            check_in=form.data["check_in"],
            check_out=form.data["check_out"],
            price=form.data["price"],
        )

        db.session.add(new_reservation)
        db.session.commit()

        return new_reservation.to_dict()
        
    
    click.echo(click.style(str(form.errors), bg='red', fg='white'))
    return {"errors": form.errors}, 400


@reservation_routes.route("/<int:id>")
def get_reservations_for_user(id):

    users_reservations = Reservation.query.filter(Reservation.user_id == id)

    all_of_users_reservations = {}

    for reservation in users_reservations:
        all_of_users_reservations[reservation.id] = reservation.to_dict()

    # click.echo(click.style(str(all_of_users_reservations), bg='red', fg='white'))

    return {"reservations": all_of_users_reservations}



@reservation_routes.route("/<int:id>", methods=["PATCH"])
def update_reservation(id):
    """
    UPDATES a Reservation
    the id above is the reservation id to create reservation for.
    """ 
    form = ReservationForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        old_reservation = Reservation.query.get(id)

        old_reservation.spot_id = form.data["spot_id"],
        old_reservation.user_id = form.data["user_id"],
        old_reservation.number_of_guests =form.data["number_of_guests"],
        old_reservation.reservation =form.data["reservation"],
        old_reservation.price=form.data["price"],

        db.session.commit()

        return old_reservation.to_dict()

    click.echo(click.style(str(form.errors), bg='red', fg='white'))
    return {"errors": form.errors}, 400



@reservation_routes.route("/<int:id>", methods=["DELETE"])
def delete_reservation(id):
    """
    DELETE a Reservation
    the id above is the reservation id to DELETE
    """ 

    old_reservation = Reservation.query.get(id)

    db.session.delete(old_reservation)
    db.session.commit()

    return {"message": "deleted"}