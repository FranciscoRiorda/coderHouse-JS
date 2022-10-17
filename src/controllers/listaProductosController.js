const listaProductoController = async () => {
    try {
        const response = await fetch('src/data/listaProductos.json');
        const data = await response.json();

        return data;

    } catch (error) {
        console.log('Hubo un error' + error);
    }
}
