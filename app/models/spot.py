from .db import db


class Spot(db.Model):
    __tablename__ = "spots"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(500), nullable=False)
    address = db.Column(db.String(1000), nullable=False)
    longitude = db.Column(db.Numeric(10, 7), nullable=False)
    latitude = db.Column(db.Numeric(10, 7), nullable=False)
    pets = db.Column(db.Boolean, nullable=False)
    total_occupancy = db.Column(db.Integer, nullable=False)
    total_bedrooms = db.Column(db.Integer, nullable=False)
    total_bathrooms = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    has_wifi = db.Column(db.Boolean, nullable=False)
    has_tv = db.Column(db.Boolean, nullable=False)
    has_ac = db.Column(db.Boolean, nullable=False)
    price_per_day = db.Column(db.Numeric(9, 2), nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    user = db.relationship("User", back_populates="spots")
    images = db.relationship(
        "Image", back_populates="spot", cascade="all, delete-orphan"
    )
    reservations = db.relationship(
        "Reservation", back_populates="spot", cascade="all, delete-orphan"
    )
    reviews = db.relationship(
        "Review", back_populates="spot", cascade="all, delete-orphan"
    )

    def get_reviews(self):
        spots_review = {}
        reviews = self.reviews

        for review in reviews:
            spots_review[review.id] = review.to_dict()

        return spots_review

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "name": self.name,
            "user_id": str(self.user.id),
            "pets_allowed": str(self.pets),
            "total_occupancy": str(self.total_occupancy),
            "total_bedrooms": str(self.total_bedrooms),
            "total_bathrooms": str(self.total_bathrooms),
            "description": str(self.description),
            "has_wifi": str(self.has_wifi),
            "has_tv": str(self.has_tv),
            "has_ac": str(self.has_ac),
            "price_per_day": str(self.price_per_day),
            "host_id": str(self.host_id),
            "images": [image.image_url for image in self.images],
            "host_name": self.user.name,
            "address": self.address,
            "longitude": float(self.longitude),
            "latitude": float(self.latitude),
            "reviews": self.get_reviews(),
        }
