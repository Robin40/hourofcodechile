import os
from flask import Flask
app = Flask(__name__)

#Retorna el contenido de un archivo
def contenido_de_archivo(ruta):
	with open(ruta, 'r') as archivo:
		contenido = archivo.read()
	return contenido

#Index de la pagina
import index_v1
@app.route("/")
def index():
    return contenido_de_archivo("demos/fixed/index2.html")

#Esto ejecuta la aplicacion
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True) #quitar debug al final
