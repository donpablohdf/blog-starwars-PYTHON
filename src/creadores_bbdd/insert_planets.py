import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine('mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4')
connection = engine.connect()

metadata = MetaData(bind=None)

tb = Table(
    'planets',
    metadata,
    autoload=True,
    autoload_with=engine
)



with open('JSON/api/planets.json') as file:
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
