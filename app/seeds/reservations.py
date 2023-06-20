from app.models import db, Reservation


def seed_reservations():
    past_trip1 = Reservation(
        spot_id=1,
        user_id=1,
        check_in="2023-06-10 00:00:00",
        check_out="2023-06-14 00:00:00",
        number_of_guests=1,
        price=2000,
    )

    past_trip2 = Reservation(
        spot_id=2,
        user_id=1,
        check_in="2023-05-10 00:00:00",
        check_out="2023-05-17 00:00:00",
        number_of_guests=1,
        price=900,
    )

    past_trip3 = Reservation(
        spot_id=3,
        user_id=1,
        check_in="2023-04-10 00:00:00",
        check_out="2023-04-20 00:00:00",
        number_of_guests=1,
        price=200,
    )

    past_trip4 = Reservation(
        spot_id=4,
        user_id=1,
        check_in="2023-01-10 00:00:00",
        check_out="2023-01-17 00:00:00",
        number_of_guests=1,
        price=40,
    )

    past_trip5 = Reservation(
        spot_id=5,
        user_id=1,
        check_in="2023-02-10 00:00:00",
        check_out="2023-02-20 00:00:00",
        number_of_guests=1,
        price=30,
    )

    db.session.add(past_trip1)
    db.session.add(past_trip2)
    db.session.add(past_trip3)
    db.session.add(past_trip4)
    db.session.add(past_trip5)

    db.session.commit()


def undo_reservations():
    db.session.execute("TRUNCATE reservations RESTART IDENTITY CASCADE;")
    db.session.commit()
