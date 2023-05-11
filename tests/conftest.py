import pytest

from app import create_app, db
from app.seeds import seed_users, seed_spots, seed_images
from .config import TestConfig

@pytest.fixture(scope="session", autouse=True)
def app():
    app = create_app(TestConfig)
    
    with app.app_context():
        db.drop_all()
        db.create_all()
        seed_users()
        seed_spots()
        seed_images()
    
    yield app

@pytest.fixture()
def client(app):
    return app.test_client()






