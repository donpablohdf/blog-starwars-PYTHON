import time
import requests
import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
metadata = MetaData(bind=None)

tb = Table(
    'people',
    metadata,
    autoload=True,
    autoload_with=engine
)

tb_in = Table(
    'people_detail',
    metadata,
    autoload=True,
    autoload_with=engine
)



stmt = select([
    tb.columns.id
]).where((tb.columns.id>=1) &  (tb.columns.id<=82))

connection = engine.connect()
results = connection.execute(stmt).fetchall()
#print(results)

for result_a in results:
    res = requests.get('https://www.swapi.tech/api/people/'+str(result_a[0]))

    with open('JSON/api/people'+str(result_a[0])+'.json', 'w') as file:
        json.dump(json.loads(res.text), file, indent=4)
    time.sleep(2)
    with open('JSON/api/people'+str(result_a[0])+'.json') as file_in:
        data = json.load(file_in)
        stmt_in = (
            insert(tb_in).
            values(
                id=int(data['result']['uid']),
                description=data['result']['description'],
                height=data['result']['properties']['height'],
                mass=data['result']['properties']['mass'],
                hair_color=data['result']['properties']['hair_color'],
                skin_color=data['result']['properties']['skin_color'],
                eye_color=data['result']['properties']['eye_color'],
                birth_year=data['result']['properties']['birth_year'],
                gender=data['result']['properties']['gender'],
                name=data['result']['properties']['name'],
                homeworld=data['result']['properties']['homeworld'],
                url=data['result']['properties']['url']

            )
        )
        connection.execute(stmt_in)
connection.close()
