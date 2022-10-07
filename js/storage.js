const setCarritoStorage = (carrito) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const getCarritoStorage = () => {
  const carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  return carritoStorage;
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = getCarritoStorage();
    renderizarCarrito(carrito);
    renderizarFinDeCompra(carrito);
    precioTotalDeCompra();
    precioFinDeCompra();
  }
});


const setCantidadProductos = (cantProdEnCarrito) => {
  localStorage.setItem("cantidadProductos", JSON.stringify(cantProdEnCarrito));
};

const getCantidadProductos = () => {
  const cantidadProductos = JSON.parse(
    localStorage.getItem("cantidadProductos")
  );
  return cantidadProductos;
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cantidadProductos")) {
    cantProdEnCarrito = getCantidadProductos();
    cantidadProductos();
  }
});


