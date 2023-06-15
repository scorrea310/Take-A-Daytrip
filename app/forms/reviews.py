from flask_wtf import FlaskForm
from flask_login import current_user
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
# validate that spot with id exists.


class ReviewsForm(FlaskForm):
    user_id = IntegerField(
        "User ID",
        validators=[DataRequired()],
    )
