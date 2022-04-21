import pytest
from app import app 

def test_get_reservations_for_user_status_code():
    """
    This function tests the status code for the get
    users reservations api route.
    """ 
    response = app.test_client().get('/api/reservations/1')
    assert response.status_code == 201

def test_get_reservation_for_user_response():
    """
    This function tests the response data for the get
    reservation for user api route.
    """ 
    pass

def test_post_new_reservation():
    """
    This tests the post reservation ap route.
    """ 
    pass

def test_patch_reservation():
    """
    this tests editing an existing reservation.
    """ 
    pass








