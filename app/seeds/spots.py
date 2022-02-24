from app.models import db, Spot

def seed_spots():
    new_spot1 = Spot(
            type="Apartment",
            name="Cool Apartment on beach boeardwalk.",
            address="525 Hayward Ave.",
            pets=True,
            total_occupancy=5,
            total_bedrooms=3,
            total_bathrooms=3,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=2000,
            host_id=1
        )

    new_spot2 = Spot(
            type="Apartment",
            name="apartment in downtown LA.",
            address="525 Hayward Ave.",
            pets=True,
            total_occupancy=5,
            total_bedrooms=3,
            total_bathrooms=3,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=900,
            host_id=2
        )

    new_spot3 = Spot(
            type="Apartment",
            name="cool apartment on the hill",
            address="525 Hayward Ave.",
            pets=True,
            total_occupancy=8,
            total_bedrooms=3,
            total_bathrooms=3,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=200,
            host_id=3
        )

    new_spot4 = Spot(
            type="Apartment",
            name="apartment near shiny meadows",
            address="525 Hayward Ave.",
            pets=True,
            total_occupancy=6,
            total_bedrooms=3,
            total_bathrooms=3,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=40,
            host_id=2
        )

    new_spot5 = Spot(
            type="Outdoor",
            name="paddle boarding in Laguna!",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=6,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=30,
            host_id=3
        )

    new_spot6 = Spot(
            type="Outdoor",
            name="beach picnic in redondo",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=4,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=10,
            host_id=2
        )

    new_spot7 = Spot(
            type="Outdoor",
            name="volleyball lessons in Hermosa",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=8,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=20,
            host_id=1
        )

    new_spot8 = Spot(
            type="Outdoor",
            name="Private Mountain Horseback Ride",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=5,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=1000,
            host_id=3
        )

    new_spot9 = Spot(
            type="House",
            name="House with view of LA",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=10,
            total_bedrooms=10,
            total_bathrooms=6,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=4000,
            host_id=2
        )

    new_spot10 = Spot(
            type="House",
            name="house in the woods!",
            address="525 Hayward Ave.",
            pets=True,
            total_occupancy=10,
            total_bedrooms=10,
            total_bathrooms=6,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=500,
            host_id=1
        )

    new_spot11 = Spot(
            type="House",
            name="house on the water!",
            address="525 Hayward Ave.",
            pets=True,
            total_occupancy=6,
            total_bedrooms=10,
            total_bathrooms=6,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=1000,
            host_id=3
        )

    new_spot12 = Spot(
            type="House",
            name="volcano house",
            address="525 Hayward Ave.",
            pets=True,
            total_occupancy=4,
            total_bedrooms=10,
            total_bathrooms=6,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=400,
            host_id=2
        )

    new_spot13 = Spot(
            type="Unique Experience",
            name="sea cave tour!",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=6,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=50,
            host_id=1
        )

    new_spot14 = Spot(
            type="Unique Experience",
            name="dolphin and whale watching",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=6,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=100,
            host_id=3
        )

    new_spot15 = Spot(
            type="Unique Experience",
            name="Date Night cooking class",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=4,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=False,
            has_ac=True,
            price_per_day=100,
            host_id=2
        )

    new_spot16 = Spot(
            type="Unique Experience",
            name="fly a plan over the coast!",
            address="525 Hayward Ave.",
            pets=False,
            total_occupancy=3,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=500.00,
            host_id=1
        )

    db.session.add(new_spot1)
    db.session.add(new_spot2)
    db.session.add(new_spot3)
    db.session.add(new_spot4)
    db.session.add(new_spot5)
    db.session.add(new_spot6)
    db.session.add(new_spot7)
    db.session.add(new_spot8)
    db.session.add(new_spot9)
    db.session.add(new_spot10)
    db.session.add(new_spot11)
    db.session.add(new_spot12)
    db.session.add(new_spot13)
    db.session.add(new_spot14)
    db.session.add(new_spot15)
    db.session.add(new_spot16)


    db.session.commit()
    
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spots():
    db.session.execute("TRUNCATE spots RESTART IDENTITY CASCADE;")
    db.session.commit()