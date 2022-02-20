from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, NumberRange
from wtforms.fields import (
    StringField,
    SelectField,
    TextAreaField,
    IntegerField,
    DecimalField,
    BooleanField,
    RadioField
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

    name = StringField(
        "Name",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=5000,
                message="Name must be between %(min)s and %(max)s characters long.",
            ),
        ]
    )

    petsAllowed = BooleanField(
        "Pets Allowed",
        false_values=(False, 'false', 0, '0'),
    )

    totalOccupancy = IntegerField(
        "Total Occupancy",
        validators=[NumberRange(
                min=0,
                message="Occupancy cannot be a negative value",
            )],
        default=0
    )

    totalBedrooms =  IntegerField(
        "Total Bedrooms",
        validators=[NumberRange(
                min=0,
                message="Bedrooms cannot be a negative value",
            )],
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
        false_values=(False, 'false', 0, '0'),
        
    )

    hasTv = BooleanField(
        "Has TV",
        false_values=(False, 'false', 0, '0'),
        
    )

    hasAc = BooleanField(
        "Has AC",
        false_values=(False, 'false', 0, '0'),
        
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





