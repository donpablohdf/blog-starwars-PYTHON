import time
import requests
import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
metadata = MetaData(bind=None)

tb = Table(
    'films',
    metadata,
    autoload=True,
    autoload_with=engine
)

tb_in = Table(
    'films_detail',
    metadata,
    autoload=True,
    autoload_with=engine
)

stmt = select([
    tb.columns.id
])

connection = engine.connect()
results = connection.execute(stmt).fetchall()

for result_a in results:
    res = requests.get('https://www.swapi.tech/api/films/'+str(result_a[0]))
    #print(json.loads(res.text))
    with open('JSON/api/films'+str(result_a[0])+'.json', 'w') as file:
        json.dump(json.loads(res.text), file, indent=4)
    time.sleep(3)
    with open('JSON/api/films'+str(result_a[0])+'.json') as file_in:
        data = json.load(file_in)
        stmt_in = (
            insert(tb_in).
            values(
                id=int(data['result']['uid']),
                description=data['result']['description'],
                producer=data['result']['properties']['producer'],
                title=data['result']['properties']['title'],
                episode_id=data['result']['properties']['episode_id'],
                director=data['result']['properties']['director'],
                opening_crawl=data['result']['properties']['opening_crawl'],
                characters=",".join(data['result']['properties']['characters']),
                planets=",".join(data['result']['properties']['planets']),
                starships=",".join(data['result']['properties']['starships']),
                vehicles=",".join(data['result']['properties']['vehicles']),
                species=",".join(data['result']['properties']['species'])
            )
        )
        connection.execute(stmt_in)
connection.close()