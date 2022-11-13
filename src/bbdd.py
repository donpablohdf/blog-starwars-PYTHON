import mysql.connector
from mysql.connector import Error

try:
    conexion = mysql.connector.connect(
        host= 'localhost',
        port = 3306,
        user= '4geeks',
        password='4geeks',
        db='startWars',
        auth_plugin='mysql_native_password'

    )
    if conexion.is_connected():
        print('Exito')
except Error as ex:
    print('Error conxión', ex)