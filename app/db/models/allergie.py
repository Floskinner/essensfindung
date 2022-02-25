"""Allergie structure for the DB"""
from sqlalchemy import Column
from sqlalchemy import String

from db.base import Base


class Allergie(Base):
    """
    Model for SQLAlchemy for the allergie Table in the DB

    Attributes:
        name (str): Primary Key
        beschreibung (str): Optional
    """

    __tablename__ = "allergie"

    name = Column(String, primary_key=True)
    beschreibung = Column(String)
