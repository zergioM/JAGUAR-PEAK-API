#  Jaguar Peak — API REST de Gestión Retail

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-black)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.x-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

API REST desarrollada con **Node.js**, **Express** y **Sequelize** para la gestión integral de un negocio retail: locales, productos, clientes, trabajadores e inventario.

---

##  Contenido

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Arquitectura](#-arquitectura)
- [Instalación](#-instalación)
- [Variables de entorno](#-variables-de-entorno)
- [Ejecución](#-ejecución)
- [Módulos del sistema](#-módulos-del-sistema)
- [Autenticación](#-autenticación)
- [Respuestas estándar](#-respuestas-estándar)
- [Pruebas con Postman](#-pruebas-con-postman)
- [Autor](#-autor)

---

##  Características

- Gestión completa de locales, productos, clientes, trabajadores e inventario
- Autenticación mediante JSON Web Tokens (JWT)
- Arquitectura organizada por capas (rutas, controladores, servicios, modelos)
- Colección completa de endpoints documentada y probada en Postman
- ORM Sequelize para el manejo de la base de datos MySQL

---

##  Tecnologías

- Node.js
- Express
- Sequelize ORM
- MySQL
- JSON Web Token (JWT)
- dotenv
- Postman (pruebas de API)

---

##  Arquitectura

```
src/
│
├── config/          # Configuración de base de datos
├── controllers/      # Lógica de entrada de cada endpoint
├── middlewares/       # Autenticación, manejo de errores, validaciones
├── models/           # Definición de entidades Sequelize
├── routes/           # Definición de rutas por módulo
├── services/         # Lógica de negocio
├── seeders/          # Datos iniciales / de prueba
└── server.js         # Punto de entrada de la aplicación
```

Flujo de una petición:

```
Cliente → Routes → Middlewares → Controllers → Services → Models (Sequelize) → MySQL
```

---

##  Instalación

Clonar el repositorio:

```bash
git clone https://github.com/zergioM/JAGUAR-PEAK-API
```

Entrar al proyecto:

```bash
cd jaguar-peak
```

Instalar dependencias:

```bash
npm install
```

---

##  Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente formato:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=jaguar_peak
DB_USER=root
DB_PASSWORD=

JWT_SECRET=TuClaveSuperSegura
JWT_EXPIRES_IN=1h
```

> ⚠️ Los nombres de las variables deben coincidir exactamente con los usados en los *seeders* y en la configuración de la base de datos.

---

##  Ejecución

Modo desarrollo (con recarga automática):

```bash
nodemon src/server.js
```

Modo producción:

```bash
npm start
```

---

##  Módulos del sistema

| Módulo | Descripción |
|---|---|
| **Locales** | Gestión de sedes o puntos de venta del negocio |
| **Productos** | CRUD de productos disponibles para la venta |
| **Clientes** | Registro y gestión de clientes |
| **Trabajadores** | Gestión del personal asociado a cada local |
| **Inventario** | Control de existencias por local y producto |

---

##  Autenticación

El sistema utiliza JWT para proteger las rutas privadas. El token se envía en el header:

```
x-token: <tu_token_jwt>
```

Los tokens tienen una expiración corta configurada por seguridad, por lo que el cliente debe volver a autenticarse una vez expiran.

---

##  Respuestas estándar

Éxito:

```json
{
    "ok": true,
    "message": "Operación realizada correctamente",
    "data": {}
}
```

Error:

```json
{
    "ok": false,
    "error": "Mensaje de error"
}
```

---

##  Pruebas con Postman

El proyecto cuenta con una colección completa de Postman que cubre el CRUD de todos los módulos (locales, productos, clientes, trabajadores, inventario), incluyendo los flujos de autenticación.

---

## 👤 Autor

Proyecto desarrollado con fines educativos como parte de la formación en Análisis y Desarrollo de Software.

---

## 📄 Licencia

MIT License
