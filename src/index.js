// RENDERIZACIÓN DE PRODUCTOS SIN FILTROS
document.addEventListener('DOMContentLoaded', async () => {
    const listaProductosConFiltro = await listaProductoController();
 
   pintarProducto(listaProductosConFiltro);
   precioTotalDeCompra();
 })