from app.models import db, Spot

def seed_spots():
    new_spot1 = Spot(
            type="Apartment",
            name="Cool Apartment on beach boardwalk.",
            address="807 W Paseo Del Mar, San Pedro, CA 90731",
            latitude=33.9368,
            longitude=-118.379,
            pets=True,
            total_occupancy=5,
            total_bedrooms=3,
            total_bathrooms=3,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=2000,
            host_id=2
        )

    new_spot2 = Spot(
            type="Apartment",
            name="apartment in downtown LA.",
            address="1301 W Court St, Los Angeles, CA 90026",
            latitude=34.06440,
            longitude=-118.2567,
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
            address="11461 Sunset Blvd, Los Angeles, CA 90049",
            latitude=34.0771,
            longitude=-118.4494,
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
            address="16640 Diver St, Canyon Country, CA 91387",
            latitude=34.39664,
            longitude=-118.4263,
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
            address="24332 El Toro Rd, Laguna Hills, CA 92637",
            latitude=33.6073,
            longitude=-117.73059,
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
            address="190 Flagler Ln, Redondo Beach, CA 90277",
            latitude=33.85815,
            longitude=-118.3783,
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
            address="2400-2498 The Strand, Hermosa Beach, CA 90254",
            latitude=33.87097,
            longitude=-118.4051,
            pets=False,
            total_occupancy=8,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=20,
            host_id=3
        )

    new_spot8 = Spot(
            type="Outdoor",
            name="Private Mountain Horseback Ride",
            address="18901 Kilfinan St, Northridge, CA 91326",
            latitude=34.2978,
            longitude=-118.5459,
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
            address="415 W Loma Alta Dr, Altadena, CA 91001",
            latitude=34.20288,
            longitude=-118.1520,
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
            address="36975 Ridge Rte Rd, Castaic, CA 91384",
            latitude=34.5860,
            longitude=-118.6793,
            pets=True,
            total_occupancy=10,
            total_bedrooms=10,
            total_bathrooms=6,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=True,
            has_tv=True,
            has_ac=True,
            price_per_day=500,
            host_id=3
        )

    new_spot11 = Spot(
            type="House",
            name="house on the water!",
            address="Catalina Isthmus, Two Harbors, CA 90704",
            latitude=33.44146,
            longitude=-118.4985,
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
            address="NAS Point Mugu, CA 93042",
            latitude=33.25006,
            longitude=-119.5222,
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
            address="5000 Old Pacific Highway, Pendleton, CA 92058",
            latitude=33.3693,
            longitude=-117.55483,
            pets=False,
            total_occupancy=6,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=50,
            host_id=2
        )

    new_spot14 = Spot(
            type="Unique Experience",
            name="dolphin and whale watching",
            address="San Clemente Island, CA",
            latitude=32.86093,
            longitude=-118.46207,
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
            address="11088 Willow Ln, Adelanto, CA 92301",
            latitude=34.51634,
            longitude=-117.42183,
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
            name="fly a plane over the coast!",
            address="35676 Keane Ct, Wildomar, CA 92595",
            latitude=33.60235,
            longitude=-117.24572,
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

    new_spot17 = Spot(
            type="Unique Experience",
            name="Indoor Rock climbing",
            address="8401 Mt Baldy Rd, Mt Baldy, CA 91759",
            latitude=34.27175,
            longitude=-117.6218,
            pets=False,
            total_occupancy=8,
            total_bedrooms=0,
            total_bathrooms=1,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=500.00,
            host_id=2
        )

    new_spot18 = Spot(
            type="House",
            name="House in PV",
            address="Rose Valley Rd, Ojai, CA 93023",
            latitude=34.54969,
            longitude=-119.1838,
            pets=False,
            total_occupancy=3,
            total_bedrooms=4,
            total_bathrooms=3,
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            has_wifi=False,
            has_tv=False,
            has_ac=False,
            price_per_day=500.00,
            host_id=2
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
    db.session.add(new_spot17)
    db.session.add(new_spot18)


    db.session.commit()
    
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spots():
    db.session.execute("TRUNCATE spots RESTART IDENTITY CASCADE;")
    db.session.commit()