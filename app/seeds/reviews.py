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

    review_4 = Review(
        spot_id=1,
        rating=4,
        description="My friend and I stayed here over the weekend and we loved it. The place was nice and really clean. The hosts were respectful and they responded to messages fast.",
        user_id=7,
    )

    review_5 = Review(
        spot_id=1,
        rating=5,
        description="This place was realy nice. I liked the surrounding area and there was a lot of fun things to do locally! I will come here bext year for sure.",
        user_id=8,
    )

    review_6 = Review(
        spot_id=1,
        rating=5,
        description="My partner and I stayed here for a week and we could not get enough if it. The view is amazing and we enjoyed the sunny weather. There are a lot of things to do in the area so make sure you explore!",
        user_id=9,
    )

    review_7 = Review(
        spot_id=2,
        rating=4,
        description="The place was amazing and it was exactly as described. Would highly recommend.",
        user_id=4,
    )

    review_8 = Review(
        spot_id=2,
        rating=5,
        description="Had a great time at this place. It was in a really nice location and the host was really nice. I would stay here again for sure.",
        user_id=5,
    )

    review_9 = Review(
        spot_id=2,
        rating=1,
        description="The owner was rude and the place smelled really bad. The place also did not look liek the pictures. I would not recommend going to this place.",
        user_id=6,
    )

    review_10 = Review(
        spot_id=2,
        rating=4,
        description="My friend and I stayed here over the weekend and we loved it. The place was nice and really clean. The hosts were respectful and they responded to messages fast.",
        user_id=7,
    )

    review_11 = Review(
        spot_id=2,
        rating=5,
        description="This place was realy nice. I liked the surrounding area and there was a lot of fun things to do locally! I will come here bext year for sure.",
        user_id=8,
    )

    review_12 = Review(
        spot_id=2,
        rating=5,
        description="My partner and I stayed here for a week and we could not get enough if it. The view is amazing and we enjoyed the sunny weather. There are a lot of things to do in the area so make sure you explore!",
        user_id=9,
    )

    review_13 = Review(
        spot_id=3,
        rating=4,
        description="The place was amazing and it was exactly as described. Would highly recommend.",
        user_id=4,
    )

    review_14 = Review(
        spot_id=3,
        rating=5,
        description="Had a great time at this place. It was in a really nice location and the host was really nice. I would stay here again for sure.",
        user_id=5,
    )

    review_15 = Review(
        spot_id=3,
        rating=1,
        description="The owner was rude and the place smelled really bad. The place also did not look liek the pictures. I would not recommend going to this place.",
        user_id=6,
    )

    review_16 = Review(
        spot_id=3,
        rating=4,
        description="My friend and I stayed here over the weekend and we loved it. The place was nice and really clean. The hosts were respectful and they responded to messages fast.",
        user_id=7,
    )

    review_17 = Review(
        spot_id=3,
        rating=5,
        description="This place was realy nice. I liked the surrounding area and there was a lot of fun things to do locally! I will come here bext year for sure.",
        user_id=8,
    )

    review_18 = Review(
        spot_id=3,
        rating=5,
        description="My partner and I stayed here for a week and we could not get enough if it. The view is amazing and we enjoyed the sunny weather. There are a lot of things to do in the area so make sure you explore!",
        user_id=9,
    )

    review_19 = Review(
        spot_id=4,
        rating=4,
        description="The place was amazing and it was exactly as described. Would highly recommend.",
        user_id=4,
    )

    review_20 = Review(
        spot_id=4,
        rating=5,
        description="Had a great time at this place. It was in a really nice location and the host was really nice. I would stay here again for sure.",
        user_id=5,
    )

    review_21 = Review(
        spot_id=4,
        rating=1,
        description="The owner was rude and the place smelled really bad. The place also did not look liek the pictures. I would not recommend going to this place.",
        user_id=6,
    )

    review_22 = Review(
        spot_id=4,
        rating=4,
        description="My friend and I stayed here over the weekend and we loved it. The place was nice and really clean. The hosts were respectful and they responded to messages fast.",
        user_id=7,
    )

    review_23 = Review(
        spot_id=4,
        rating=5,
        description="This place was realy nice. I liked the surrounding area and there was a lot of fun things to do locally! I will come here bext year for sure.",
        user_id=8,
    )

    review_24 = Review(
        spot_id=4,
        rating=5,
        description="My partner and I stayed here for a week and we could not get enough if it. The view is amazing and we enjoyed the sunny weather. There are a lot of things to do in the area so make sure you explore!",
        user_id=9,
    )

    review_25 = Review(
        spot_id=5,
        rating=4,
        description="The place was amazing and it was exactly as described. Would highly recommend. Paddle boarding here was an Amazing Experience",
        user_id=4,
    )

    review_26 = Review(
        spot_id=5,
        rating=5,
        description="Had a great time at this place. It was in a really nice location and the instructors were really nice. I paddle board here again for sure ",
        user_id=5,
    )

    review_27 = Review(
        spot_id=5,
        rating=1,
        description="The owner was rude and the place smelled really bad. The place also was not suitable for beginners. I would not recommend going to this place to paddle board.",
        user_id=6,
    )

    review_28 = Review(
        spot_id=5,
        rating=4,
        description="My friend and I paddle boarded here over the weekend and we loved it. The place was nice and the beach was beautiful. The hosts were respectful and they responded to messages fast.",
        user_id=7,
    )

    review_29 = Review(
        spot_id=5,
        rating=5,
        description="This place was realy nice. I liked the surrounding area and there was a lot of fun things to do locally! I will come here bext year for sure.",
        user_id=8,
    )

    review_30 = Review(
        spot_id=5,
        rating=5,
        description="My partner and I paddle boarded here for a week and we could not get enough if it. The view is amazing and we enjoyed the sunny weather. There are a lot of things to do in the area so make sure you explore!",
        user_id=9,
    )

    review_31 = Review(
        spot_id=6,
        rating=4,
        description="The place was amazing and it was exactly as described. Would highly recommend. The beach picnic here was an amazing experience",
        user_id=4,
    )

    review_32 = Review(
        spot_id=6,
        rating=5,
        description="Had a great time at this place. It was in a really nice location and the hosts were really nice. I have a beach picnic here again for sure ",
        user_id=5,
    )

    review_33 = Review(
        spot_id=6,
        rating=1,
        description="The owner was rude and the place smelled really bad. The place also was not suitable for a beach picnic. I would not recommend going to this place to have a beach picnic.",
        user_id=6,
    )

    review_34 = Review(
        spot_id=6,
        rating=4,
        description="My friend and I had a picnic here over the weekend and we loved it. The place was nice and the beach was beautiful. The hosts were respectful and they responded to messages fast.",
        user_id=7,
    )

    review_35 = Review(
        spot_id=6,
        rating=5,
        description="This place was realy nice. I liked the surrounding area and there was a lot of fun things to do locally! I will come here bext year for sure.",
        user_id=8,
    )

    review_36 = Review(
        spot_id=6,
        rating=5,
        description="My partner and I had a picnic here for a week and we could not get enough if it. The view is amazing and we enjoyed the sunny weather. There are a lot of things to do in the area so make sure you explore!",
        user_id=9,
    )

    review_37 = Review(
        spot_id=1,
        rating=5,
        description="I really enjoyed staying in this lovely apartment. I had a great time and loved the scenery in the area. Lots of things to do around here! I will come again next year with my friend.",
        user_id=1,
    )

    review_38 = Review(
        spot_id=2,
        rating=4,
        description="Stayed here with my girl Leann while on a road trip. We were really exhausted but the hosts were really nice and were fast to respond to messages. I would stay here again for sure.",
        user_id=1,
    )

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.add(review_5)
    db.session.add(review_6)
    db.session.add(review_7)
    db.session.add(review_8)
    db.session.add(review_9)
    db.session.add(review_10)
    db.session.add(review_11)
    db.session.add(review_12)
    db.session.add(review_13)
    db.session.add(review_14)
    db.session.add(review_15)
    db.session.add(review_16)
    db.session.add(review_17)
    db.session.add(review_18)
    db.session.add(review_19)
    db.session.add(review_20)
    db.session.add(review_21)
    db.session.add(review_22)
    db.session.add(review_23)
    db.session.add(review_24)
    db.session.add(review_25)
    db.session.add(review_26)
    db.session.add(review_27)
    db.session.add(review_28)
    db.session.add(review_29)
    db.session.add(review_30)
    db.session.add(review_31)
    db.session.add(review_32)
    db.session.add(review_33)
    db.session.add(review_34)
    db.session.add(review_35)
    db.session.add(review_36)
    db.session.add(review_37)
    db.session.add(review_38)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute("TRUNCATE reviews RESTART IDENTITY CASCADE;")
    db.session.commit()
