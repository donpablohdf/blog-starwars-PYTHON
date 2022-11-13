import json
from sqlalchemy import create_engine, select, insert, MetaData, Table, and_

engine = create_engine(
    "mysql+pymysql://4geeks:4geeks@localhost/startWars?charset=utf8mb4")
metadata = MetaData(bind=None)
sections = Table(
    'sections',
    metadata,
    autoload=True,
    autoload_with=engine
)
films_tb = Table(
    'films_detail',
    metadata,
    autoload=True,
    autoload_with=engine
)

# stmt = select([
#     sections.columns.id,
#     sections.columns.section
# ])
connection = engine.connect()
# results = connection.execute(stmt).fetchall()

# for result in results:
#     print(result)

with open('JSON/api/films1.json') as file:
    data = json.load(file)

    for result in data['result']:
        stmt = (
            insert(films_tb).
            values(
                id=result['uid'], 
                description=result['description'],
                producer= result['properties']['producer'],
                title=result['properties']['title'],
                episode_id=result['properties']['title'],
                director=result['properties']['director'],
                opening_crawl=result['properties']['opening_crawl'],
                characters=",".join(result['properties']['characters']),
                planets=",".join(result['properties']['planets']),
                starships=",".join(result['properties']['starships']),
                vehicles=",".join(result['properties']['vehicles']),
                species=",".join(result['properties']['species'])
            )
        )
        connection.execute(stmt)