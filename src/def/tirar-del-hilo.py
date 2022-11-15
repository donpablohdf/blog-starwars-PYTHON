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
    'obj_key_2':None,
    'obj_key_3':None,
    'API_url':'https://www.swapi.tech/api/',
    'json_path_file':None,
    'create_columns':["Column('id', Integer, primary_key = True)", "Column('section', String(255))"]
}

"""#---O J O--- url para empezar a tirar del hilo CONFIG['API_url'] = 'https://www.swapi.tech/api/'"""

# 'create_columns':'Column("id", Integer, primary_key = True), Column("section", String(255))'

# 'create_columns':[
#     'Column("id", Integer, primary_key = True)', 
#     'Column("section", String(255))'
# ]

#'create_columns': {'id':'Column("id", Integer, primary_key = True)', 'section':'Column("section", String(255))'}

"""  NO BORRAR 
    def promesa_cumplida (prometo_al_futuro):
        #cuando se cumple la promesa
        return prometo_al_futuro.result() 
    """

def tirarDelHilo ():
# API----------------------------------------------------------------------
    # recuperamos GET de la API
    if CONFIG['API_url'] is not None:
        json_API_data = requests.get(CONFIG['API_url'])
        prometo_al_futuro = Future()
        """ NO BORRAR 
        prometo_al_futuro.add_done_callback(promesa_cumplida)
        """
        prometo_al_futuro.set_result(json_API_data.text)
    else:
        raise Exception ("No se puede continuar sin un CONFIG['API_url'] válido")
        return False

    # CONFIG['json_path_file'] = 'JSON/api/sections.json' lo usamos para crear el archivo json  
    if CONFIG['json_path_file'] is not None:
        with open(CONFIG['json_path_file'], 'w') as file_to_write:
            json.dump(json.loads(json_API_data.text), file_to_write, indent=4)

# BBDD ---------------------------------------------------------------------------BBDD
    
    engine = create_engine(CONFIG['bbdd_conex'])
    # iniciamos conexion a la bbdd
    server_connection = engine.connect()
    metadata = MetaData(bind=None)

    #compruebo si existe CONFIG['bbdd_table'] en la BBDD
    if not sqlalchemy.inspect(engine).has_table(CONFIG['bbdd_table']):  # si la tabla NO exite la creo
                
        def cons_columns():
            for add_column in CONFIG['create_columns']:
                return eval(add_column)

        Table(

            CONFIG['bbdd_table'], metadata,

            #lineas que funcionan descomentadas

            # FUNCIONA """"
            # eval(CONFIG['create_columns'][0]),
            # eval(CONFIG['create_columns'][1]),
            # .....
            # eval(CONFIG['create_columns'][n])
            # si # CONFIG['create_columns'] = ["Column('id', Integer, primary_key = True)", "Column('section', String(255))"]

            # FUNCIONA"""
            # la genérica
            Column('id', Integer, primary_key = True), 
            Column('section', String(255)),

            #SOLO METE LA PRIMERA
            #cons_columns()
            #junto con 
            # def cons_columns():
                # for add_column in CONFIG['create_columns']:
                # return eval(add_column)
            # si CONFIG['create_columns'] = ["Column('id', Integer, primary_key = True)", "Column('section', String(255))"]

            # NO FUNCIONA
            # eval(CONFIG['create_columns']) 
            # si CONFIG['create_columns']= 'Column("id", Integer, primary_key = True), Column("section", String(255))'
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
        
        table_conected= Table(CONFIG['bbdd_table'], metadata,autoload=True,autoload_with=engine)
        for data_insert in data_to_insert_1: 
            stmt_in = (insert(table_conected).
                values(
                    #también necesitamos que esto sea dínamico según CONFIG['create_columns']
                    section= data_insert
                )
            )
            # print(stmt_in, data_insert)
            server_connection.execute(stmt_in)

        server_connection.close() # cerramos conexion a la bbdd
        #si la promesa de futuro se cumple, seguiremos caminando juntos
        return True 
    except:
        print("error en el resultado de la API")
        return False
        
# llamada a la funcion
tirarDelHilo ()