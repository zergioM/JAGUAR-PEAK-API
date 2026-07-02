# Jaguar Peak API (Node.js + Express + Sequelize)

Reimplementación del sistema Jaguar Peak 
## Módulos
- **Auth**: registro y login (JWT)
- **Locales**
- **Clientes**
- **Productos**
- **Trabajadores** (pertenece a un Local)
- **Inventarios** (relación Local ↔ Producto, con stock y alerta de stock bajo)

## Requisitos
- Node.js
- XAMPP `localhost:3306`

## Instalación

1. Instala las dependencias:
   ```
   npm install
   ```

2. Crea la base de datos en phpMyAdmin (o desde la consola de MySQL):
   ```sql
   CREATE DATABASE db_jaguarpeak_node;
   ```

3. Copia `.env.example` a `.env` y ajusta los valores si es necesario
   (por defecto usa `root` sin contraseña, como en tu XAMPP):
   ```
   cp .env.example .env
   ```

4. Levanta el servidor en modo desarrollo:
   ```
   npm run dev
   ```

   Al arrancar, Sequelize creará automáticamente las tablas
   (`sync()`) y el seeder creará un usuario administrador con las
   credenciales definidas en `SUPERADMIN_CORREO` / `SUPERADMIN_PASSWORD`
   del `.env`.

5. Verifica que el servidor responde:
   ```
   GET http://localhost:3000/
   ```

## Autenticación

1. Login como admin:
   ```
   POST /api/auth/login
   Body: { "correo": "admin@jaguarpeak.com", "password": "Admin123*" }
   ```
   Responde con un `token` que debes enviar en las siguientes peticiones:
   ```
   Authorization: Bearer <token>
   ```

2. Registrar un nuevo usuario (empleado por defecto):
   ```
   POST /api/auth/registrar
   Body: { "nombre": "...", "correo": "...", "password": "..." }
   ```

## Endpoints por módulo

Todos siguen el mismo patrón (reemplaza `<recurso>` por
`locales`, `clientes`, `productos`, `trabajadores`, `inventarios`):

| Método | Ruta                  | Rol requerido      |
|--------|-----------------------|---------------------|
| POST   | /api/<recurso>         | admin               |
| GET    | /api/<recurso>         | cualquier usuario logueado |
| GET    | /api/<recurso>/:id     | cualquier usuario logueado |
| PUT    | /api/<recurso>/:id     | admin               |
| DELETE | /api/<recurso>/:id     | admin               |

### Ejemplo: crear un Local
```
POST /api/locales
Body: {
  "nombre": "Sede Centro",
  "direccion": "Calle 10 # 5-20",
  "ciudad": "Medellín",
  "telefono": "3001234567"
}
```

### Ejemplo: crear un Trabajador (requiere local_id existente)
```
POST /api/trabajadores
Body: {
  "documento": "123456789",
  "nombres": "Juan",
  "apellidos": "Pérez",
  "cargo": "Vendedor",
  "local_id": 1
}
```

### Ejemplo: crear un registro de Inventario
```
POST /api/inventarios
Body: {
  "local_id": 1,
  "producto_id": 1,
  "stock": 5,
  "stockMinimo": 10
}
```
La respuesta de `GET /api/inventarios` incluye `nombreLocal`,
`nombreProducto`, `marca`, `categoria` y `alerta` (`"STOCK BAJO"` si
`stock <= stockMinimo`), equivalente al `InventarioDTO` de la versión
Java del proyecto.

## Estructura del proyecto
```
src/
├─ app.js              # configuración de Express (sin listen)
├─ server.js            # punto de arranque (único listen, tras conectar la BD)
├─ config/database.js
├─ models/               # Sequelize: define tablas y relaciones
├─ repositories/         # única capa que toca los modelos
├─ services/              # lógica de negocio
├─ controllers/           # maneja req/res
├─ routes/
├─ validators/            # express-validator
├─ middlewares/           # auth, roles, validación de campos
├─ utils/                 # response, bcrypt, jwt
└─ seeders/               # superadmin.seed.js
```

## Diferencias respecto a tu API de referencia (corregidas aquí)
- `app.js` ya **no** llama a `app.listen()`; solo `server.js` lo hace,
  evitando el doble arranque del servidor.
- Los `service` llaman correctamente al método `actualizar` del
  repository (no a `listar`).
- Los `controller` no importan funciones de otros controllers; cada uno
  define sus propias funciones `crear/listar/buscar/actualizar/eliminar`.
