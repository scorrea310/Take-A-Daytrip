from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, NumberRange
from wtforms.fields import ( StringField )


class LobAddressVerificationForm(FlaskForm):
    key = StringField(
        "Key",
        validators=[
            DataRequired(),
        ]
    )