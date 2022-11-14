import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
connection = engine.connect()
metadata = MetaData(bind=None)

tb = Table(
    'sections',
    metadata,
    autoload=True,
    autoload_with=engine
)



with open('JSON/api/films.json') as file:
    data = json.load(file)

    for result in data['result']:
        stmt = (
            insert(tb).
            values(
                id=result['uid'], 
                description=result['description'],
                producer= result['properties']['producer'],
                title=result['properties']['title'],
                episode_id=result['properties']['title'],
                director=result['properties']['director'],
                opening_crawl=result['properties']['opening_crawl'],
                characters=",".join(result['properties']['characters']), # paso de array a string separado por comas 
                planets=",".join(result['properties']['planets']), # paso de array a string separado por comas 
                starships=",".join(result['properties']['starships']), # paso de array a string separado por comas 
                vehicles=",".join(result['properties']['vehicles']), # paso de array a string separado por comas 
                species=",".join(result['properties']['species']) # paso de array a string separado por comas 
            )
        )
        connection.execute(stmt)