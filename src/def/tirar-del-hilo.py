from time import sleep
import requests
import json
from ast import literal_eval
from concurrent.futures import Future
import sqlalchemy
from sqlalchemy import *
from sqlalchemy.orm import *


def tirarDelHilo (bbdd_conex, bbdd_table, obj_key_1, obj_key_2, obj_key_3, json_source, json_path_file, create_table):
    # API----------------------------------------------------------------------
    # recuperamos GET de la API. ---O J O--- url para empezar a tirar del hilo json_source = 'https://www.swapi.tech/api/'
    json_API_data = requests.get(json_source)

    def promesa_cumplida (prometo_al_futuro):
        return prometo_al_futuro.result()

    # si hay json_path_file lo usamos para crear el archivo json  
    # # Ex: json_path_file = 'JSON/api/products.json'
    if json_path_file!='':
        with open(json_path_file, 'w') as file_to_write:
            json.dump(json.loads(json_API_data.text), file_to_write, indent=4)

    prometo_al_futuro = Future()
    prometo_al_futuro.add_done_callback(promesa_cumplida)
    prometo_al_futuro.set_result(json_API_data.text)

# BBDD -------------------------------------------------------
    # bbdd_conex = 'mysql+pymysql://4geeks:4geeks@localhost/WarsStart?charset=utf8mb4'
    engine = create_engine(bbdd_conex)
    # iniciamos conexion a la bbdd
    server_connection = engine.connect()
    metadata = MetaData(bind=None)
    #compruebo si existe bbdd_table en la BBDD
    if not sqlalchemy.inspect(engine).has_table(bbdd_table):  # si la tabla NO exite la creo
        # create_table = ["Column('id', Integer, primary_key = True)", "Column('section', String(255))"]
        def datos():
            for datos in create_table:
                return eval(datos)

        tabla_crear = Table(
            bbdd_table, metadata,
            datos()
            # FUNCIONAN
            # 1. -
            # eval(create_table[0]),
            # eval(create_table[1]),
            # .....
            # eval(create_table[n])
            #
            # 2.-
            # Column('id', Integer, primary_key = True), 
            # Column('section', String(255))
        )
        # Implement the creation
        metadata.create_all(engine)

    try:
        data_from_API=prometo_al_futuro.result()
        data_to_insert= json.loads(data_from_API)
        if obj_key_1!='':
            data_to_insert_1=data_to_insert[obj_key_1]
        if obj_key_2!='':
            data_to_insert_2=data_to_insert[obj_key_1][obj_key_2]
        if obj_key_3!='':
            data_to_insert_3=data_to_insert[obj_key_1][obj_key_2][obj_key_3]
        
    except:
        print("error en el resultado de la API")
        return False
    else:
        metadata = MetaData(bind=None)
        table_conected = Table(bbdd_table, metadata,autoload=True,autoload_with=engine)

        #insertamos los datos en la tabla creada
        for data_insert in data_to_insert_1: 
            stmt_in = (insert(table_conected).
                values(
                    section= data_insert
                    
                )
            )
            # print(stmt_in, data_insert)
            server_connection.execute(stmt_in)

        server_connection.close() # cerramos conexion a la bbdd
        #si la promesa de futuro se cumple, seguiremos caminando juntos
        return True 

tirarDelHilo ( 'mysql+pymysql://4geeks:4geeks@localhost/WarsStart?charset=utf8mb4', 'sections', 'result', '', '', 'https://www.swapi.tech/api/', '', ["Column('id', Integer, primary_key = True)", "Column('section', String(255))"])

#{'id':'Column("id", Integer, primary_key = True)', 'section':'Column("section", String(255))'}