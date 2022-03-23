from .db import db

class Reservation(db.Model):
    __tablename__ = "reservations"

    id = db.Column(db.Integer, primary_key=True)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    check_in = db.Column(db.DateTime, nullable=False)
    check_out = db.Column(db.DateTime, nullable=False)
    number_of_guests = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Numeric(9, 2), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    user = db.relationship("User", back_populates="reservations")
    spot = db.relationship("Spot", back_populates="reservations") 

    def to_dict(self):
        return {
            'id': self.id,
            "spot_id": str(self.spot_id),
            "user_id": str(self.user_id),
            "check_in": str(self.check_in),
            "check_out": str(self.check_out),
            "number_of_guests": str(self.number_of_guests),
            "price": str(self.price),
            "spot_name": self.spot.name,
            "spot_address": self.spot.address,
            "spot_description": self.spot.description,
            "spot_images": [image.image_url for image in self.spot.images],
            "total_occupants_allowed": str(self.spot.total_occupancy)
        }