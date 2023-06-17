from app.models import db, Review


def seed_reviews():
    review_1 = Review(
        spot_id=1,
        rating=4,
        description="The place was amazing and it was exactly as described. Would highly recommend.",
        user_id=4,
    )

    review_2 = Review(
        spot_id=1,
        rating=5,
        description="Had a great time at this place. It was in a really nice location and the host was really nice. I would stay here again for sure.",
        user_id=5,
    )

    review_3 = Review(
        spot_id=1,
        rating=1,
        description="The owner was rude and the place smelled really bad. The place also did not look liek the pictures. I would not recommend going to this place.",
        user_id=6,
    )

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute("TRUNCATE reviews RESTART IDENTITY CASCADE;")
    db.session.commit()
