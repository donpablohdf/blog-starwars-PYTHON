import pymysql

############### CONFIGURAR ESTO ###################
# Abre conexion con la base de datos
db = pymysql.connect(
    host='localhost',
    user='4geeks',
    password='4geeks',
    database='startWars',
    charset='utf8mb4',
)
##################################################

# prepare a cursor object using cursor() method
cursor = db.cursor()

# ejecuta el SQL query usando el metodo execute().
cursor.execute("SELECT VERSION()")

# procesa una unica linea usando el metodo fetchone().
data = cursor.fetchone()
print("Database version : {0}".format(data))

# desconecta del servidor
db.close()
