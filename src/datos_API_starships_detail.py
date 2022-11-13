import time
import requests
import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
metadata = MetaData(bind=None)

tb = Table(
    'starships',
    metadata,
    autoload=True,
    autoload_with=engine
)

tb_in = Table(
    'starships_detail',
    metadata,
    autoload=True,
    autoload_with=engine
)

stmt = select([
    tb.columns.id
]).where((tb.columns.id>=65) &  (tb.columns.id<=75))

connection = engine.connect()
results = connection.execute(stmt).fetchall()

for result_a in results:
    res = requests.get('https://www.swapi.tech/api/starships/'+str(result_a[0]))

    with open('JSON/api/starships'+str(result_a[0])+'.json', 'w') as file:
        json.dump(json.loads(res.text), file, indent=4)

    with open('JSON/api/starships'+str(result_a[0])+'.json') as file_in:
        data = json.load(file_in)
        stmt_in = (
            insert(tb_in).
            values(
                id=int(data['result']['uid']),
                description=data['result']['description'],
                model=data['result']['properties']['model'],
                starship_class=data['result']['properties']['starship_class'],
                manufacturer=data['result']['properties']['manufacturer'],
                cost_in_credits=data['result']['properties']['cost_in_credits'],
                length=data['result']['properties']['length'],
                crew=data['result']['properties']['crew'],
                passengers=data['result']['properties']['passengers'],
                max_atmosphering_speed=data['result']['properties']['max_atmosphering_speed'],
                hyperdrive_rating=data['result']['properties']['hyperdrive_rating'],
                MGLT=data['result']['properties']['MGLT'],
                cargo_capacity=data['result']['properties']['cargo_capacity'],
                consumables=data['result']['properties']['consumables'],
                pilots=",".join(data['result']['properties']['pilots']),
                name=data['result']['properties']['name'],
                url=data['result']['properties']['url']

            )
        )
        connection.execute(stmt_in)
connection.close()
