from time import sleep
import requests
import json
from concurrent.futures import Future
import sqlalchemy
from sqlalchemy import *
from sqlalchemy.orm import *

CONFIG={ 
    'bbdd_conex': 'mysql+pymysql://4geeks:4geeks@localhost/WarsStart?charset=utf8mb4',
    'bbdd_table':'sections',
    'obj_key_1':'result',
    'obj_key_2':'',
    'obj_key_3':'',
    'API_url':'https://www.swapi.tech/api/',
    'json_path_file':'',
    'create_columns':["Column('id', Integer, primary_key = True)", "Column('section', String(255))"]
}
# 'create_columns':'Column("id", Integer, primary_key = True), Column("section", String(255))'

# 'create_columns':[
#     'Column("id", Integer, primary_key = True)', 
#     'Column("section", String(255))'
# ]

#'create_columns': {'id':'Column("id", Integer, primary_key = True)', 'section':'Column("section", String(255))'}

def tirarDelHilo ():
    # API----------------------------------------------------------------------
    # recuperamos GET de la API. ---O J O--- url para empezar a tirar del hilo CONFIG['API_url'] = 'https://www.swapi.tech/api/'
    json_API_data = requests.get(CONFIG['API_url'])

    #  NO BORRAR def promesa_cumplida (prometo_al_futuro):
    #     return prometo_al_futuro.result()

    # si hay CONFIG['json_path_file'] lo usamos para crear el archivo json  
    # # Ex: CONFIG['json_path_file'] = 'JSON/api/sections.json'
    if CONFIG['json_path_file']!='':
        with open(CONFIG['json_path_file'], 'w') as file_to_write:
            json.dump(json.loads(json_API_data.text), file_to_write, indent=4)

    prometo_al_futuro = Future()
    # NO BORRAR prometo_al_futuro.add_done_callback(promesa_cumplida)
    prometo_al_futuro.set_result(json_API_data.text)

# BBDD ---------------------------------------------------------------------------BBDD
    
    engine = create_engine(CONFIG['bbdd_conex'])
    # iniciamos conexion a la bbdd
    server_connection = engine.connect()
    metadata = MetaData(bind=None)

    #compruebo si existe CONFIG['bbdd_table'] en la BBDD
    if not sqlalchemy.inspect(engine).has_table(CONFIG['bbdd_table']):  # si la tabla NO exite la creo
                
        def datos():
            data=''
            for columnas in CONFIG['create_columns']:
                data += columnas+', '
                return eval(columnas)
            return eval(data)


        Table(
            CONFIG['bbdd_table'], metadata,
            datos()

            # NO FUNCIONA
            # eval(CONFIG['create_columns']) 
            # si CONFIG['create_columns']= 'Column("id", Integer, primary_key = True), Column("section", String(255))'

            #NO FUNCIONA
            #junto con def datos() 
            # si CONFIG['create_columns'] = ["Column('id', Integer, primary_key = True)", "Column('section', String(255))"]

            # FUNCIONA
            
            # eval(CONFIG['create_columns'][0]),
            # eval(CONFIG['create_columns'][1]),
            # .....
            # eval(CONFIG['create_columns'][n])
            # si # CONFIG['create_columns'] = ["Column('id', Integer, primary_key = True)", "Column('section', String(255))"]
            

            # FUNCIONA
            # 2.- GENÉRICA
            # Column('id', Integer, primary_key = True), 
            # Column('section', String(255)),

        )
        # Implement the creation
        metadata.create_all(engine)

    try:
        data_from_API=prometo_al_futuro.result()
        data_to_insert= json.loads(data_from_API)
        if CONFIG['obj_key_1']!='':
            data_to_insert_1=data_to_insert[CONFIG['obj_key_1']]
        if CONFIG['obj_key_2']!='':
            data_to_insert_2=data_to_insert[CONFIG['obj_key_1']][CONFIG['obj_key_2']]
        if CONFIG['obj_key_3']!='':
            data_to_insert_3=data_to_insert[CONFIG['obj_key_1']][CONFIG['obj_key_2']][CONFIG['obj_key_3']]
        #insertamos los datos en la tabla creada
        
        #table_conected = Table(CONFIG['bbdd_table'], metadata,autoload=True,autoload_with=engine)
        # for data_insert in data_to_insert_1: 
        #     stmt_in = (insert(table_conected).
        #         values(
        #             section= data_insert
        #         )
        #     )
        #     # print(stmt_in, data_insert)
        #     server_connection.execute(stmt_in)

        server_connection.close() # cerramos conexion a la bbdd
        #si la promesa de futuro se cumple, seguiremos caminando juntos
        return True 
    except:
        print("error en el resultado de la API")
        return False
        
# llamada a la funcion
tirarDelHilo ()