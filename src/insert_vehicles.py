import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
metadata = MetaData(bind=None)

tb = Table(
    'vehicles',
    metadata,
    autoload=True,
    autoload_with=engine
)

connection = engine.connect()

with open('JSON/api/vehicles.json') as file:
    data = json.load(file)

    for result in data['results']:
        stmt = (
            insert(tb).
            values(
                id=result['uid'],
                name=result['name'],
                url=result['url']

            )
        )
        connection.execute(stmt)
