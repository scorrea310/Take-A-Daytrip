from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, NumberRange
from wtforms.fields import (
    StringField,
    SelectField,
    TextAreaField,
    IntegerField,
    DecimalField,
    BooleanField
)


class SpotListingForm(FlaskForm):
    address = StringField(
        "Address",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=1000,
                message="Title must be between %(min)s and %(max)s characters long.",
            ),
        ]
    )

    petsAllowed = BooleanField(
        "Pets Allowed",
        validators=[
            DataRequired(),
        ]
    )

    totalOccupancy = IntegerField(
        "Total Occupancy",
        default=0
    )

    totalBedrooms =  IntegerField(
        "Total Bedrooms",
        default=0
    )

    totalBathrooms = IntegerField(
        "Total Bathrooms",
        validators=[NumberRange(
                min=0,
                message="Bathrooms cannot be a negative value",
            )],
        default=0
    ) 

    description = TextAreaField(
        "Description",
        validators=[
            DataRequired(),
            Length(
                min=0,
                max=4000,
                message="Description cannot be longer than %(max)s characters.",
            ),
        ],
    )

    hasWifi = BooleanField(
        "Has Wifi",
        validators=[
            DataRequired(),
        ]
    )

    hasTv = BooleanField(
        "Has TV",
        validators=[
            DataRequired(),
        ]
    )

    hasAc = BooleanField(
        "Has AC",
        validators=[
            DataRequired(),
        ]
    )

    price = DecimalField(
        "Price",
        places=2,
        validators=[
            DataRequired(),
            NumberRange(
                min=0.00,
                max=9999.99,
                message="Price must be between $%(min)s0 and $%(max)s.",
            ),
        ],
    )

    type = StringField(
        "Type",
        validators=[
            DataRequired(),
        ]
    )

    userId = IntegerField(
        "User Id",
        validators=[
            DataRequired(),
        ]
    )





