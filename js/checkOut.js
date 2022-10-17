
document.addEventListener("DOMContentLoaded", async () => {
  if (localStorage.getItem("carrito")) {
    carrito = getCarritoStorage();
    renderizarFinDeCompra(carrito);
    precioFinDeCompra();
  }
});

const precioFinDeCompra = async () => {
  let totalCarritoHtml = document.querySelector(".subtotal");

  totalCarritoHtml.innerHTML = "";

  const div = await document.createElement("div");
  div.innerHTML = `
                  <span class="mtext-110 cl2"> $${totalCarrito}</span><br><br>
              `;

  totalCarritoHtml.appendChild(div);
};

const renderizarFinDeCompra = () => {
  let finDeCompra = document.querySelector(".wrap-table-shopping-cart");

  finDeCompra.innerHTML = "";

  carrito.forEach((producto, index) => {
    const { id, modelo, precio, img, cantidad } = producto;
    let precioPorModelo = cantidad * precio;

    const table = document.createElement("table");
    table.classList.add("table-shopping-cart");
    table.innerHTML = `
                  <tr class="table_head">
                                      <th class="column-1">Producto</th>
                                      <th class="column-2"></th>
                                      <th class="column-3">Precio</th>
                                      <th class="column-4">Cantidad</th>
                                      <th class="column-5">Total</th>
                                  </tr>
  
                                  <tr class="table_row">
                                      <td class="column-11">
                                          <div class="how-itemcart1">
                                              <img src="${img}" alt="IMG">
                                          </div>
                                      </td>
                                      <td class="column-2">Modelo: ${modelo}</td>
                                      <td class="column-3">$${precio}</td>
                                      <td class="column-4">
                                          <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                              <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m zmdi-minus2">
                                                  <i class="fs-16 zmdi zmdi-minus"></i>
                                              </div>
  
                                              <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="${cantidad}">
  
                                              <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m zmdi-plus2">
                                                  <i class="fs-16 zmdi zmdi-plus"></i>
                                              </div>
                                          </div>
                                      </td>
                                      <td class="column-5">$${precioPorModelo}</td>
                                  </tr>
      `;

    finDeCompra.appendChild(table);

    table.querySelector(".zmdi-minus2").addEventListener("click", () => {
      eliminarDelCarrito2(index, id);
    });

    table.querySelector(".zmdi-plus2").addEventListener("click", () => {
      agregarAlCarrito2(id);
    });
  });
};

const agregarAlCarrito2 = async (id) => {
  const prod = await listaProductoController();
  const producto = prod.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);

  const agregarProducto = {
    ...producto,
    cantidad: 1,
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
    },
  }).showToast();

  cantProdEnCarrito++;

  renderizarFinDeCompra();
  renderizarCarrito();
  cantidadProductos();
  precioTotalDeCompra();
  precioFinDeCompra();
  setCarritoStorage(carrito);
  setCantidadProductos(cantProdEnCarrito);
};

const eliminarDelCarrito2 = (index, id) => {
  let producto = carrito.find((producto) => producto.id === id);

  carrito[index].cantidad > 1 &&
    Toastify({
      text: `Se eliminó una unidad de ${producto.modelo}. Quedan ${
        producto.cantidad - 1
      }`,
      className: "info",
      position: "left",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right,  #E74C3C, #000000)",
      },
    }).showToast();

  carrito[index].cantidad--;

  if (carrito[index].cantidad === 0) {
    Toastify({
      text: `Ya no quedan productos ${producto.modelo} en el carrito`,
      className: "info",
      position: "left",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right,  #E74C3C, #000000)",
      },
    }).showToast();

    carrito.splice(index, 1);
    totalCarrito = 0;
  }
  cantProdEnCarrito--;

  renderizarFinDeCompra();
  renderizarCarrito();
  cantidadProductos();
  precioTotalDeCompra();
  precioFinDeCompra();
  setCarritoStorage(carrito);
  setCantidadProductos(cantProdEnCarrito);
};

// Vaciar storage.
const procesarCompra = document.getElementById("procesarPago");
procesarCompra.addEventListener("click", async () => {

  if(totalCarrito !== 0){
  Swal.fire({
    title: "¿Finalizar Compra?",
    icon: "info",
    text: `¿Estás seguro/a de procesar el pago? Total: $${totalCarrito}`,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, procesar pago",
    cancelButtonText: "No, volver atrás",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Compra finalizada con éxito!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        vaciarStorage();
        recargarPag();
      })
    }
  });
} else {
  Swal.fire({
    title: "No hay productos en el carrito",
    icon: "warning"
  })
}
});

const vaciarStorage = () => {
  localStorage.clear();
};

const recargarPag = () => {
  window.location.href = "./index.html";
};
