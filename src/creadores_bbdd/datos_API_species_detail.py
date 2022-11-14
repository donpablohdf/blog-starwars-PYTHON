import time
import requests
import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
metadata = MetaData(bind=None)

tb = Table(
    'species',
    metadata,
    autoload=True,
    autoload_with=engine
)

tb_in = Table(
    'species_detail',
    metadata,
    autoload=True,
    autoload_with=engine
)

stmt = select([
    tb.columns.id
]).where((tb.columns.id>=1) &  (tb.columns.id<=37))

connection = engine.connect()
results = connection.execute(stmt).fetchall()

for result_a in results:
    res = requests.get('https://www.swapi.tech/api/species/'+str(result_a[0]))

    with open('JSON/api/species'+str(result_a[0])+'.json', 'w') as file:
        json.dump(json.loads(res.text), file, indent=4)

    with open('JSON/api/species'+str(result_a[0])+'.json') as file_in:
        data = json.load(file_in)
        stmt_in = (
            insert(tb_in).
            values(
                id=int(data['result']['uid']),
                description=data['result']['description'],
                classification=data['result']['properties']['classification'],
                designation=data['result']['properties']['designation'],
                average_height=data['result']['properties']['average_height'],
                average_lifespan=data['result']['properties']['average_lifespan'],
                hair_colors=data['result']['properties']['hair_colors'],
                skin_colors=data['result']['properties']['skin_colors'],
                eye_colors=data['result']['properties']['eye_colors'],
                language=data['result']['properties']['language'],
                name=data['result']['properties']['name'],
                homeworld=data['result']['properties']['homeworld'],
                people=",".join(data['result']['properties']['people']),
                url=data['result']['properties']['url']

            )
        )
        connection.execute(stmt_in)
connection.close()
