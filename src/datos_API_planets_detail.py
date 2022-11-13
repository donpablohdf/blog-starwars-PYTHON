import time
import requests
import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
metadata = MetaData(bind=None)

tb = Table(
    'planets',
    metadata,
    autoload=True,
    autoload_with=engine
)

tb_in = Table(
    'planets_detail',
    metadata,
    autoload=True,
    autoload_with=engine
)

stmt = select([
    tb.columns.id
]).where((tb.columns.id>=52) &  (tb.columns.id<=60))

connection = engine.connect()
results = connection.execute(stmt).fetchall()

for result_a in results:
    res = requests.get('https://www.swapi.tech/api/planets/'+str(result_a[0]))

    with open('JSON/api/planets'+str(result_a[0])+'.json', 'w') as file:
        json.dump(json.loads(res.text), file, indent=4)

    with open('JSON/api/planets'+str(result_a[0])+'.json') as file_in:
        data = json.load(file_in)
        stmt_in = (
            insert(tb_in).
            values(
                id=int(data['result']['uid']),
                description=data['result']['description'],
                diameter=data['result']['properties']['diameter'],
                rotation_period=data['result']['properties']['rotation_period'],
                orbital_period=data['result']['properties']['orbital_period'],
                gravity=data['result']['properties']['gravity'],
                population=data['result']['properties']['population'],
                climate=data['result']['properties']['climate'],
                terrain=data['result']['properties']['terrain'],
                surface_water=data['result']['properties']['surface_water'],
                name=data['result']['properties']['name'],
                url=data['result']['properties']['url']

            )
        )
        connection.execute(stmt_in)
connection.close()
