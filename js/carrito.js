const agregarAlCarrito = (id) => {
  
    let producto = listaProductos.find((producto) => producto.id === id);
  
    let productoEnCarrito = carrito.find((producto) => producto.id === id);

    let {modelo} = producto;  

    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      producto.cantidad = 1;
      carrito.push(producto);
    }

    Toastify({
      text: `${modelo} Agregado al carrito`,
      className: "info",
      position: "left",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();

    cantProdEnCarrito++;
    precioTotalDeCompra();
    renderizarCarrito();
    cantidadProductos();
    setCarritoStorage(carrito);
    setCantidadProductos(cantProdEnCarrito);
  };
  
  const eliminarDelCarrito = (index) => {

    let producto = carrito.find((producto) => producto)

    let {modelo} = producto;  

    console.log(producto)

    carrito[index].cantidad !== 0 && Toastify({
      text: `Se eliminó una unidad de ${modelo}`,
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
        text: `${modelo} se eliminó del carrito`,
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

  
