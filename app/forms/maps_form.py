from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, NumberRange
from wtforms.fields import ( StringField )


class MapsForm(FlaskForm):

    key = StringField(
        "Key",
        validators=[
            DataRequired(),
        ]
    )