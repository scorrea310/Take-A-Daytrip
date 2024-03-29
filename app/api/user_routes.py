from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
import click
from app.s3_helpers import upload_file_to_s3, allowed_file, get_unique_filename
from app.forms import UpdateNameForm, UpdateUserName, UpdateUserEmail

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/images', methods=["PATCH"])
def update_user_image(id):
    
    image_urls = []

    click.echo(click.style(str("hello"), bg='red', fg='white'))


    if "images" not in request.files:
        click.echo(click.style(str("Image required."), bg='red', fg='white'))
        return {"errors": "Image required."}, 400

    click.echo(click.style(str("2"), bg='red', fg='white'))

    images = request.files.getlist("images")

    for image in images:
        if not allowed_file(image.filename):
            return {"errors": "File type not permitted."}

        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            click.echo(click.style(str(upload), bg='red', fg='white'))
            return upload, 400

        image_url = upload["url"]

        user = User.query.get(id)

        user.profile_image = image_url

        db.session.add(user)
        db.session.commit()

        image_urls.append(image_url)

    click.echo(click.style(str("2"), bg='red', fg='white'))

    return {"image_urls": image_urls}


@user_routes.route('/<int:id>/name', methods=["PATCH"])
def update_name_of_user(id):
    
    form = UpdateNameForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        click.echo(click.style("it worked!!!!!!", bg='red', fg='white'))

        user = User.query.get(id)

        user.name = form.data["name"]

        db.session.add(user)
        db.session.commit()


    user = User.query.get(id)

    return user.to_dict()



@user_routes.route('/<int:id>/username', methods=["PATCH"])
def update_username(id):
    
    form = UpdateUserName()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        click.echo(click.style("it worked!!!!!!", bg='red', fg='white'))

        user = User.query.get(id)

        user.username= form.data["username"]

        db.session.add(user)
        db.session.commit()


    user = User.query.get(id)

    return user.to_dict()


@user_routes.route('/<int:id>/email', methods=["PATCH"])
def update_user_email(id):
    
    form = UpdateUserEmail()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        click.echo(click.style("it worked!!!!!!", bg='red', fg='white'))

        user = User.query.get(id)

        user.email= form.data["email"]

        db.session.add(user)
        db.session.commit()


        user = User.query.get(id)

        return user.to_dict()

    click.echo(click.style(str(validation_errors_to_error_messages(form.errors)), bg='red', fg='white'))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401