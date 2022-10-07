// Agregar productos en html dinamicamente

let carrito = [];
let totalCarrito = 0;
let cantProdEnCarrito = 0;

const pintarProducto = () => {
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
    // href="product-detail.html"

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
      precioFinDeCompra();
      cantidadProductos();
      renderizarFinDeCompra();
    });

    li.querySelector(".agregarProducto").addEventListener("click", () => {
      agregarAlCarrito(id);
      precioTotalDeCompra();
      precioFinDeCompra();
      cantidadProductos();
      renderizarFinDeCompra();
    });
  });
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

const precioFinDeCompra = () => {

  let totalCarritoHtml = document.querySelector(".subtotal");

  totalCarritoHtml.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `
                <span class="mtext-110 cl2"> $${totalCarrito}</span>
            `;

  totalCarritoHtml.appendChild(div);

};

const cantidadProductos = () => {
  let notificacion = document.getElementById("notificacion");

  notificacion.innerHTML = `
    <div class="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify='${cantProdEnCarrito}'>
        <i class="zmdi zmdi-shopping-cart"></i>
    </div>
`;
};

const renderizarFinDeCompra = () => {
  
  let finDeCompra = document.querySelector(".wrap-table-shopping-cart");
  
  finDeCompra.innerHTML = "";

  carrito.forEach((producto, index) => {

    const {id, categoria, modelo, precio, img, cantidad} = producto;
    let precioPorModelo = cantidad * precio;
    
    const table = document.createElement("table");
    table.classList.add('table-shopping-cart')
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
      eliminarDelCarrito(index, id);
      precioTotalDeCompra();
      precioFinDeCompra();
      cantidadProductos();
      renderizarFinDeCompra();
    });

    table.querySelector(".zmdi-plus2").addEventListener("click", () => {
      agregarAlCarrito(id);
      precioTotalDeCompra();
      precioFinDeCompra();
      cantidadProductos();
      renderizarFinDeCompra();
    });

  });
};

pintarProducto();

