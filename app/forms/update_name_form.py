from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class UpdateNameForm(FlaskForm):
    name = StringField(
        "Name",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=255,
                message="Name must be between %(min)s and %(max)s characters long.",
            ),
        ],
    )
