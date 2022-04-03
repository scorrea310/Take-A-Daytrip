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
    DateField
)


class MapsForm(FlaskForm):

    key = StringField(
        "Key",
        validators=[
            DataRequired(),
        ]
    )