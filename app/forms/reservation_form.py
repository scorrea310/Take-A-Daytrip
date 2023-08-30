from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, NumberRange
from wtforms.fields import (
    StringField,
    SelectField,
    TextAreaField,
    IntegerField,
    DecimalField,
    BooleanField,
    DateTimeField,
    DateField,
)


class ReservationForm(FlaskForm):
    spot_id = IntegerField(
        "Spot ID",
        validators=[DataRequired()],
    )

    number_of_guests = IntegerField("Number of Guests", default=0)

    check_in = DateField(
        "Reservation Date Time",
        validators=[DataRequired()],
    )

    check_out = DateField(
        "Reservation Date Time",
        validators=[DataRequired()],
    )

    price = DecimalField(
        "Price",
        places=2,
        validators=[
            NumberRange(
                min=0,
                max=9999.99,
                message="Price must be between $%(min)s0 and $%(max)s.",
            ),
        ],
    )

    user_id = IntegerField(
        "User Id",
    )
