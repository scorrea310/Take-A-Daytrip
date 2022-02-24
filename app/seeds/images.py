from app.models import db, Image

def seed_images():
    image1 = Image(spot_id=1, image_url="https://take-a-daytrip.s3.amazonaws.com/apartment2.jpeg")
    image2= Image(spot_id=1, image_url="https://take-a-daytrip.s3.amazonaws.com/apartment3.jpeg")
    image3 = Image(spot_id=2, image_url="https://take-a-daytrip.s3.amazonaws.com/apartmentLA.jpeg")
    image4 = Image(spot_id=2, image_url="https://take-a-daytrip.s3.amazonaws.com/apartmentLA2.jpeg")
    image5 = Image(spot_id=3, image_url="https://take-a-daytrip.s3.amazonaws.com/apartmentHill.jpeg")
    image6 = Image(spot_id=3, image_url="https://take-a-daytrip.s3.amazonaws.com/apartmentHill2.jpeg")
    image7 = Image(spot_id=4, image_url="https://take-a-daytrip.s3.amazonaws.com/apartmentMeadows1.jpeg")
    image8 = Image(spot_id=4, image_url="https://take-a-daytrip.s3.amazonaws.com/apartmentMeadows2.jpeg")
    image9 = Image(spot_id=5, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorPaddle.jpeg")
    image10 = Image(spot_id=5, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorPaddle2.jpeg")
    image11 = Image(spot_id=6, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorPicnic.jpeg")
    image12 = Image(spot_id=6, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorPicnic2.jpeg")
    image13 = Image(spot_id=7, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorVolley.jpeg")
    image14 = Image(spot_id=7, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorVolley2.jpeg")
    image15 = Image(spot_id=8, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorHorse.jpeg")
    image16 = Image(spot_id=8, image_url="https://take-a-daytrip.s3.amazonaws.com/outdoorHorse2.jpeg")
    image17 = Image(spot_id=9, image_url="https://take-a-daytrip.s3.amazonaws.com/houseLA.jpeg")
    image18 = Image(spot_id=9, image_url="https://take-a-daytrip.s3.amazonaws.com/houseLA2.jpeg")
    image19 = Image(spot_id=10, image_url="https://take-a-daytrip.s3.amazonaws.com/houseWoods.jpeg")
    image20 = Image(spot_id=10, image_url="https://take-a-daytrip.s3.amazonaws.com/houseSpotPage.jpeg")
    image21 = Image(spot_id=11, image_url="https://take-a-daytrip.s3.amazonaws.com/houseWater.jpeg")
    image22 = Image(spot_id=11, image_url="https://take-a-daytrip.s3.amazonaws.com/houseWater2.jpeg")
    image23 = Image(spot_id=12, image_url="https://take-a-daytrip.s3.amazonaws.com/housevolcano.jpeg")
    image24 = Image(spot_id=12, image_url="https://take-a-daytrip.s3.amazonaws.com/houseVolcano2.jpeg")
    image25 = Image(spot_id=13, image_url="https://take-a-daytrip.s3.amazonaws.com/seacave.jpeg")
    image26 = Image(spot_id=13, image_url="https://take-a-daytrip.s3.amazonaws.com/seaCaveUnique.jpeg")
    image27 = Image(spot_id=14, image_url="https://take-a-daytrip.s3.amazonaws.com/uniqueDolphins.jpeg")
    image28 = Image(spot_id=14, image_url="https://take-a-daytrip.s3.amazonaws.com/uniqueWhale.jpeg")
    image29 = Image(spot_id=15, image_url="https://take-a-daytrip.s3.amazonaws.com/uniqueCooking.jpeg")
    image30 = Image(spot_id=15, image_url="https://take-a-daytrip.s3.amazonaws.com/uniqueCooking2.jpeg")
    image31 = Image(spot_id=16, image_url="https://take-a-daytrip.s3.amazonaws.com/uniquePlane.jpeg")
    image32 = Image(spot_id=16, image_url="https://take-a-daytrip.s3.amazonaws.com/uniquePlane2.jpeg")

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)

    db.session.commit()


def undo_images():
    db.session.execute("TRUNCATE images RESTART IDENTITY CASCADE;")
    db.session.commit()