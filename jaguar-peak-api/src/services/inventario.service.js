const inventarioRepository = require('../repositories/inventario.repository');

// Convierte una fila de Inventario (con Local y Producto incluidos) en el
// equivalente al InventarioDTO de Jaguar Peak, agregando el campo "alerta".
const mapearDTO = (inventario) => {
    const json = inventario.toJSON();
    return {
        id: json.id,
        local_id: json.local_id,
        nombreLocal: json.Local ? json.Local.nombre : null,
        producto_id: json.producto_id,
        nombreProducto: json.Producto ? json.Producto.nombre : null,
        marca: json.Producto ? json.Producto.marca : null,
        categoria: json.Producto ? json.Producto.categoria : null,
        stock: json.stock,
        stockMinimo: json.stockMinimo,
        alerta: json.stock <= json.stockMinimo ? 'STOCK BAJO' : 'OK'
    };
};

const crearInventario = async (data) => {
    return await inventarioRepository.crear(data);
};

const listarInventarios = async () => {
    const inventarios = await inventarioRepository.listar();
    return inventarios.map(mapearDTO);
};

const buscarInventario = async (id) => {
    const inventario = await inventarioRepository.buscarPorId(id);
    return inventario ? mapearDTO(inventario) : null;
};

const actualizarInventario = async (id, data) => {
    return await inventarioRepository.actualizar(id, data);
};

const eliminarInventario = async (id) => {
    return await inventarioRepository.eliminar(id);
};

module.exports = { crearInventario, listarInventarios, buscarInventario, actualizarInventario, eliminarInventario };
