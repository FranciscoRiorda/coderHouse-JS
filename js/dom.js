let carrito = [];
let totalCarrito = 0;
let cantProdEnCarrito = 0;

const pintarProducto = (listaProductosConFiltro) => {
  const contenedor = document.getElementById("card");

  contenedor.innerHTML = "";

  listaProductosConFiltro.forEach((producto) => {
    const { id, categoria, modelo, precio, img } = producto;

    const div = document.createElement("div");
    div.classList.add(
      "col-sm-6",
      "col-md-4",
      "col-lg-3",
      "p-b-35",
      "isotope-item"
    );
    div.innerHTML = `<div class="block2">
                            <div class="block2-pic hov-img0">
                                <img src="${img}" alt="IMG-PRODUCT">
    
                                <a style="cursor:pointer; user-select: none;" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                    Agregar al carrito
                                </a>
                            </div>
    
                            <div class="block2-txt flex-w flex-t p-t-14">
                                <div class="block2-txt-child1 flex-col-l ">
                                    <a  class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6" value="${id}">
                                    Categoría: ${categoria} - ${modelo}
                                    </a>
    
                                    <span class="stext-105 cl3">
                                        $${precio}
                                    </span>
                                    </div>
    
                                <div class="block2-txt-child2 flex-r p-t-3">
                                    <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                        <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
                                        <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
                                    </a>
                                </div>
                            </div>
                        </div>`;

    contenedor.appendChild(div);

    div.querySelector(".block2-btn").addEventListener("click", () => {
      agregarAlCarrito(id);
    });
  });
};

const renderizarCarrito = () => {
  let carritoHtml = document.querySelector(".modalCarrito");

  carritoHtml.innerHTML = "";

  carrito.forEach((producto, index) => {
    const { id, modelo, precio, img, cantidad } = producto;

    const li = document.createElement("li");
    li.classList.add("header-cart-item", "flex-w", "flex-t", "m-b-12");
    li.innerHTML = `
                    <div class="header-cart-item-img">
                        <img src="${img}" alt="IMG">
                    </div>
                    <div class="header-cart-item-txt p-t-8 ">
                        <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                            ${modelo}
                        </a>
                        <span class="header-cart-item-info">
                            ${cantidad} x $${precio} c/u
                        </span>
                        <div class="btn-toolbar btn-group-sm" role="toolbar" aria-label="Toolbar with button groups">
                            <button type="button" class="btn btn-outline-secondary eliminarProducto"> - </button>
                            <button type="button" class="btn btn-outline-secondary agregarProducto"> + </button>
                        </div>
                    </div>
                    `;

    carritoHtml.appendChild(li);

    li.querySelector(".eliminarProducto").addEventListener("click", () => {
      eliminarDelCarrito(index, id);
      precioTotalDeCompra();
      cantidadProductos();
    });

    li.querySelector(".agregarProducto").addEventListener("click", () => {
      agregarAlCarrito(id);
      precioTotalDeCompra();
      cantidadProductos();
    });
  });
};


const cantidadProductos = () => {
  let notificacion = document.getElementById("notificacion");

  notificacion.innerHTML = `
    <div class="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify='${cantProdEnCarrito}'>
        <i class="zmdi zmdi-shopping-cart"></i>
    </div>
`;
};

const precioTotalDeCompra = () => {
  totalCarrito = carrito.reduce(
    (acc, producto) => acc + producto.cantidad * producto.precio,
    0
  );

  let totalCarritoHtml = document.querySelector(".header-cart-total");

  totalCarritoHtml.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `
                <p>Total: $${totalCarrito}</p>
            `;

  totalCarritoHtml.appendChild(div);

};





