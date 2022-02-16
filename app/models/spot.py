from .db import db


class Spot(db.Model):
    __tablename__ = "spots"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(1000), nullable=False)
    pets = db.Column(db.Boolean, nullable=False)
    total_occupancy = db.Column(db.Integer, nullable=False)
    total_bedrooms = db.Column(db.Integer, nullable=False)
    total_bathrooms = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    has_wifi = db.Column(db.Boolean, nullable=False)
    has_tv = db.Column(db.Boolean, nullable=False)
    has_heat = db.Column(db.Boolean, nullable=False)
    has_ac= db.Column(db.Boolean, nullable=False)
    price_per_day = db.Column(db.Float(precision=6, decimal_return_scale=2), nullable=False)
    latitude = db.Column(db.String(255), nullable=False)
    longitude = db.Column(db.String(255), nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    user = db.relationship("User", back_populates="spots")
    images = db.relationship("Image", back_populates="spot", cascade="all, delete-orphan")
    reservations = db.relationship("Reservation", back_populates="spot", cascade="all, delete-orphan")
    reviews = db.relationship("Review", back_populates="spot", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            "type": self.type
        }