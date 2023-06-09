import json
import click

from fixture import logged_in_user
from app import User
     
def test_get_user_without_login(client):
    response = client.get('/api/users/1')
    error = json.loads(response.data)['error']
    assert error == 'Unauthorized to make this request.'

def test_get_user_with_login(client_logged_in):
     user = User.query.get(1)
     response = client_logged_in.get('/api/users/1')
     print( json.loads(response.data))
     assert json.loads(response.data) == user.to_dict()

