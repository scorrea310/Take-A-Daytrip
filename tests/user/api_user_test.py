import json
import click
from fixture import logged_in_user
from app import User

def login_helper(client):
     client.post('/api/users/1', { email: 'demo@aa.io', password: 'password' })
     
def test_get_user_without_login(client):
    response = client.get('/api/users/1')
    error = json.loads(response.data)['error']
    click.echo(click.style("it worked!!!!!!", bg='red', fg='white'))
    assert error == 'Unauthorized to make this request.'

def test_get_user_with_login(client_log_in_required):
     user = User.query.get(1)
     with client_log_in_required.test_client(user=user) as test_client_log:
          response = test_client_log.get('/api/users/1')
          print( json.loads(response.data))
          assert json.loads(response.data) == user.to_dict()
