# coding: utf-8
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()
metadata = Base.metadata


class Favorite(Base):
    __tablename__ = 'favorites'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, nullable=False)
    people = Column(String(255), nullable=False)
    planets = Column(String(255), nullable=False)
    starships = Column(String(255), nullable=False)
    vehicles = Column(String(255), nullable=False)
    species = Column(String(255), nullable=False)
    films = Column(String(255), nullable=False)


class Film(Base):
    __tablename__ = 'films'

    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    producer = Column(String(255), nullable=False)
    title = Column(String(255), nullable=False)
    episode_id = Column(String(255), nullable=False)
    director = Column(String(255), nullable=False)
    opening_crawl = Column(Text)
    characters = Column(Text)
    planets = Column(Text)
    starships = Column(Text)
    vehicles = Column(Text)
    species = Column(Text)


class FilmsDetail(Base):
    __tablename__ = 'films_detail'

    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    producer = Column(String(255), nullable=False)
    title = Column(String(255), nullable=False)
    episode_id = Column(String(255), nullable=False)
    director = Column(String(255), nullable=False)
    opening_crawl = Column(Text)
    characters = Column(Text)
    planets = Column(Text)
    starships = Column(Text)
    vehicles = Column(Text)
    species = Column(Text)


class Person(Base):
    __tablename__ = 'people'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    url = Column(String(255))


class PeopleDetail(Base):
    __tablename__ = 'people_detail'

    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    height = Column(String(255))
    mass = Column(String(255))
    hair_color = Column(String(255), nullable=False)
    skin_color = Column(String(255), nullable=False)
    eye_color = Column(String(255), nullable=False)
    birth_year = Column(String(255), nullable=False)
    gender = Column(String(255), nullable=False)
    name = Column(String(255), nullable=False)
    homeworld = Column(String(255))
    url = Column(String(255))


class Planet(Base):
    __tablename__ = 'planets'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    url = Column(String(255))


class PlanetsDetail(Base):
    __tablename__ = 'planets_detail'

    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    diameter = Column(String(255))
    rotation_period = Column(String(255))
    orbital_period = Column(String(255))
    gravity = Column(String(255), nullable=False)
    population = Column(String(255))
    climate = Column(String(255), nullable=False)
    terrain = Column(String(255), nullable=False)
    surface_water = Column(String(255))
    name = Column(String(255), nullable=False)
    url = Column(String(255))


class Section(Base):
    __tablename__ = 'sections'

    id = Column(Integer, primary_key=True)
    section = Column(String(255), nullable=False)


class Species(Base):
    __tablename__ = 'species'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    url = Column(String(255))


class SpeciesDetail(Base):
    __tablename__ = 'species_detail'

    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    classification = Column(String(255), nullable=False)
    designation = Column(String(255), nullable=False)
    average_height = Column(String(255))
    average_lifespan = Column(String(255))
    hair_colors = Column(String(255), nullable=False)
    skin_colors = Column(String(255), nullable=False)
    eye_colors = Column(String(255), nullable=False)
    language = Column(String(255), nullable=False)
    name = Column(String(255), nullable=False)
    homeworld = Column(String(255), index=True)
    people = Column(String(255))
    url = Column(String(255))


class Starship(Base):
    __tablename__ = 'starships'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    url = Column(String(255))


class StarshipsDetail(Base):
    __tablename__ = 'starships_detail'

    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    model = Column(String(255), nullable=False)
    starship_class = Column(String(255), nullable=False)
    manufacturer = Column(String(255), nullable=False)
    cost_in_credits = Column(String(255))
    length = Column(String(255))
    crew = Column(String(255), nullable=False)
    passengers = Column(String(255))
    max_atmosphering_speed = Column(String(255))
    hyperdrive_rating = Column(String(255), nullable=False)
    MGLT = Column(String(255))
    cargo_capacity = Column(String(255))
    consumables = Column(String(255), nullable=False)
    pilots = Column(String(255))
    name = Column(String(255), nullable=False)
    url = Column(String(255))


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    user = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)
    firstname = Column(String(255), nullable=False)
    lastname = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)


class VechiclesDetail(Base):
    __tablename__ = 'vechicles_detail'

    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    model = Column(String(255), nullable=False)
    vehicle_class = Column(String(255), nullable=False)
    manufacturer = Column(String(255), nullable=False)
    cost_in_credits = Column(String(255))
    length = Column(String(255))
    crew = Column(String(255), nullable=False)
    passengers = Column(String(255))
    max_atmosphering_speed = Column(String(255))
    cargo_capacity = Column(String(255))
    consumables = Column(String(255), nullable=False)
    name = Column(String(255), nullable=False)
    films = Column(String(255))
    pilots = Column(String(255))
    url = Column(String(255))


class Vehicle(Base):
    __tablename__ = 'vehicles'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    url = Column(String(255))