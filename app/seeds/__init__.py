from flask.cli import AppGroup
from .users import seed_users, undo_users
from .spots import seed_spots, undo_spots
from .images import seed_images, undo_images
from .reviews import seed_reviews, undo_reviews
from .reservations import seed_reservations, undo_reservations

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    seed_users()
    seed_spots()
    seed_images()
    seed_reviews()
    seed_reservations()


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_users()
    undo_spots()
    undo_images()
    undo_reviews()
    undo_reservations()
