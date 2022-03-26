from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


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


@user_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_user_image(id):

    image_urls = []

    if "image" not in request.files:
        return {"errors": "Image required."}, 400

    image = request.files.getlist("image")

    if not allowed_file(image[0].filename):
            return {"errors": "File type not permitted."}

    image[0].filename = get_unique_filename(image[0].filename)
    upload = upload_file_to_s3(image[0])

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

    return user.to_dict()