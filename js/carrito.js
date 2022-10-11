  const agregarAlCarrito = async (id) => {

    const prod = await listaProductoController();
    const producto = prod.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);

    const agregarProducto = {
      ...producto,
      cantidad: 1 
    };

    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      producto.cantidad = 1;
      carrito.push(agregarProducto);
    }
    Toastify({
      text: `${agregarProducto.modelo} Agregado al carrito`,
      className: "info",
      position: "left",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();

    cantProdEnCarrito++;

    renderizarCarrito();
    cantidadProductos();
    precioTotalDeCompra();
    setCarritoStorage(carrito);
    setCantidadProductos(cantProdEnCarrito);
    
  };
  
  const eliminarDelCarrito = (index, id) => {

    let producto = carrito.find((producto) => producto.id === id)

    carrito[index].cantidad > 1 && Toastify({
      text: `Se eliminó una unidad de ${producto.modelo}. Quedan ${producto.cantidad - 1}`,
      className: "info",
      position: "left",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();

    carrito[index].cantidad--;
  
    if (carrito[index].cantidad === 0) {

      Toastify({
        text: `Ya no quedan productos ${producto.modelo} en el carrito`,
        className: "info",
        position: "left",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

      carrito.splice(index, 1);
      totalCarrito = 0;
    }
    cantProdEnCarrito--;
  
    renderizarCarrito();
    setCarritoStorage(carrito);
    setCantidadProductos(cantProdEnCarrito);
    
  };


