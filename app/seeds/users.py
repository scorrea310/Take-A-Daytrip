from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name="Demo",
        username="demo123",
        email="demo@aa.io",
        password="password",
        isHost=False,
    )
    marnie = User(
        name="Marnie",
        username="marnie123",
        email="marnie@aa.io",
        password="password",
        isHost=False,
    )
    bobbie = User(
        name="Bobbie",
        username="bobbie123",
        email="bobbie@aa.io",
        password="password",
        isHost=False,
    )

    david = User(
        name="David",
        username="David123",
        email="david@david.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_2.png",
    )

    steve = User(
        name="Steve",
        username="scorrea310",
        email="steve@steve.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_8.jpeg",
    )

    bobby = User(
        name="Bobby",
        username="Bobby310",
        email="bobby@bobby.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_9.jpeg",
    )

    karen = User(
        name="Karen",
        username="Karen310",
        email="karen@karen.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_2.png",
    )

    josh = User(
        name="Josh",
        username="Josh310",
        email="josh@josh.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_3.png",
    )

    evan = User(
        name="Evan",
        username="Evan310",
        email="evan@evan.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_4.jpeg",
    )

    sarah = User(
        name="Sarah",
        username="Sarah310",
        email="sarah@sarah.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_7.jpeg",
    )

    veronica = User(
        name="Veronica",
        username="Veronica310",
        email="veronica@veronica.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_5.jpeg",
    )

    isabella = User(
        name="Isabella",
        username="Isabella310",
        email="isabella@isabella.io",
        password="password",
        isHost=False,
        profile_image="https://take-a-daytrip.s3.amazonaws.com/user_pic_6.png",
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(david)
    db.session.add(steve)
    db.session.add(bobby)
    db.session.add(karen)
    db.session.add(josh)
    db.session.add(evan)
    db.session.add(sarah)
    db.session.add(veronica)
    db.session.add(isabella)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
