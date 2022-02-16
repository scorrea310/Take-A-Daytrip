from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name="Demo", username="demo123", email='demo@aa.io', password='password', isHost=False)
    marnie = User(
        name="Marnie", username='marnie123', email='marnie@aa.io', password='password', isHost=False)
    bobbie = User(
        name="Bobbie", username='bobbie123', email='bobbie@aa.io', password='password',isHost=False )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
