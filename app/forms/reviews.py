from flask_wtf import FlaskForm
from flask_login import current_user
from app.models import Spot
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


# create Review
# validate that spot with spot_id exists.
# need user_id, description, rating, spot_id


def does_spot_exist(form, field):
    spot = Spot.query.get(field.spot_id)
    if spot is None:
        raise ValidationError("This Spot does not Exist")


class ReviewsForm(FlaskForm):
    user_id = IntegerField(
        "User ID",
        validators=[DataRequired()],
    )

    description = TextAreaField(
        "Description",
        validators=[
            DataRequired(),
            Length(
                min=50,
                max=1000,
                message="Review must be between %(min)s and %(max)s characters long.",
            ),
        ],
    )

    rating = IntegerField(
        "Rating",
        validators=[
            DataRequired(),
            NumberRange(
                min=1,
                max=5,
                message="Rating must be a minimum of 1 or any number between up to 5, including 5. ",
            ),
        ],
    )

    spot_id = IntegerField(
        "Spot ID",
        validators=[DataRequired(), does_spot_exist],
    )
