from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length



class UpdateUserName(FlaskForm):

     username = StringField(
        "Username",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=40,
                message="Username must be between %(min)s and %(max)s characters long.",
            ),
        ]
    )
