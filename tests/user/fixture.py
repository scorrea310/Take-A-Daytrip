import pytest
from app import User
from flask_login import login_user
import click
# import User model here
@pytest.fixture()
def logged_in_user(client):
    with client.application.test_request_context():
        user = User.query.get(1)
        login_user(user, True, None, True, True)
    yield client





    
