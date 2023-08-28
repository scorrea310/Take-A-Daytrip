from .db import db


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    image_url = db.Column(db.String(1000), nullable=False)

    spot = db.relationship("Spot", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "spot_id": str(self.spot_id),
            "image_url": self.image_url,
        }
