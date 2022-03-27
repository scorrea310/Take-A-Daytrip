from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


class UpdateUserEmail(FlaskForm):

    email = StringField(
        "Email",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=255,
                message="Email must be between %(min)s and %(max)s characters long.",
            ),
            user_exists,
            Email()
        ]
    )