# SQL-Injection

Proyecto de ejemplificación del SQL Injection

## Installation

create a database called `sys_secure`. After you created, run the following script

```SQL
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`) VALUES
(1, 'Andres', 'Higueros', 'higueros71@gmail.com', 'andres15599'),
(2, 'Javier', 'Alvarez', 'alvarez171074@unis.edu.gt', 'JJalvarez12345');
```

## Run project

To run this project, first install all dependencies run `npm install`. After install all dependencies run the following command `npm run watch:dev`. This command run the project in development mode.

## Scripts

```bash
    "start": "npm run prod",
    "build": "npm-run-all clean transpile",
    "server": "node ./server/bin/www.js",
    "dev": "SET NODE_ENV=dev npm-run-all build server",
    "prod": "SET NODE_ENV=prod npm-run-all build server",
    "transpile": "babel ./server --out-dir dist",
    "clean": "rimraf dist",
    "watch:dev": "nodemon",
    "test": "jest --coverage=true"
```
