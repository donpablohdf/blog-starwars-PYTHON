from time import sleep
import requests
import json
import logging
from concurrent.futures import Future
from sqlalchemy import create_engine, select, insert, MetaData, Table

logging.basicConfig(level=logging.DEBUG, format='%(message)s')

def tirarDelHilo (bbdd_conex, bbdd_table, obj_key_1, obj_key_2, obj_key_3, json_source, json_path_file):
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

    # BBDD -----------------------------------------------------------
    server = create_engine(bbdd_conex) # bbdd_conex = 'mysql+pymysql://4geeks:4geeks@localhost/WarsStart?charset=utf8mb4'
    server_connection = server.connect() # iniciamos conexion a la bbdd
    #compruebo si existe bbdd_table en la BBDD
    # list_tables = server_connection.table_names()
    # print(list_tables)
    # crear la tabla si no existe

    #si existe conectarse
 
    
    
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
        print("error en el INSERT")
        return False
    else:
        metadata = MetaData(bind=None)
        table_conected = Table(bbdd_table, metadata,autoload=True,autoload_with=server)
        for data_insert in data_to_insert_1:
            stmt_in = (insert(table_conected).
                values(
                    section= data_insert
                    
                )
            )
            print(stmt_in, data_insert)
            server_connection.execute(stmt_in)
        server_connection.close()
        
        return True # cerramos conexion a la bbdd
    return True #si la promesa de futuro se cumple, seguiremos caminando juntos

tirarDelHilo ( 'mysql+pymysql://4geeks:4geeks@localhost/WarsStart?charset=utf8mb4', 'sections', 'result', '', '', 'https://www.swapi.tech/api/', '')