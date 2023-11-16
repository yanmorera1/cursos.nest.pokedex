<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar ```pnpm install```
3. Tener Nest CLI instalado o instalar con ```npm i -g @nestjs/cli```
4. Levantar la bd ```docker-compose up -d```
5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__
6. Llenar las variables de entorno definidas en el __.env__
7. Ejecutar la aplicacion con el comando ```pnpm start:dev```
8. Usar la semilla para reconstruir la base de datos haciendo una petición al endpoint: ```GET: http://localhost:3000/api/v2/seed```


## Stack usado

* MongoDB
* Nest