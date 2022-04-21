import pytest
from app import app 

def test_get_reservations_for_user():
    response = app.test_client().get('/api/reservations/1')
    assert response.status_code == 201
