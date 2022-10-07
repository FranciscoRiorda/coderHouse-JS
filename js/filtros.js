let listaProductosConFiltro = [];

const sinFiltro = () => {
  listaProductosConFiltro = listaProductos;
};

const removerActive = () => {
  filtroRango0.classList.remove("filter-link-active");
  filtroRango1.classList.remove("filter-link-active");
  filtroRango2.classList.remove("filter-link-active");
  filtroRango3.classList.remove("filter-link-active");
  filtroMayorPrecio.classList.remove("filter-link-active");
  filtroMenorPrecio.classList.remove("filter-link-active");
};

const filtroMenorPrecio = document.getElementById("menorPrecio");
filtroMenorPrecio.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos.sort((a, b) => a.precio - b.precio);

  removerActive();
  filtroMenorPrecio.classList.add("filter-link-active");

  pintarProducto();
});

const filtroMayorPrecio = document.getElementById("mayorPrecio");
filtroMayorPrecio.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos.sort((a, b) => b.precio - a.precio);

  removerActive();
  filtroMayorPrecio.classList.add("filter-link-active");

  pintarProducto();
});

const filtroRango0 = document.getElementById("filtroRango0");
filtroRango0.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio >= 0
  );

  removerActive();
  filtroRango0.classList.add("filter-link-active");

  pintarProducto();
});

const filtroRango1 = document.getElementById("filtroRango1");
filtroRango1.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio > 0 && producto.precio <= 10000
  );

  removerActive();
  filtroRango1.classList.add("filter-link-active");

  pintarProducto();
});

const filtroRango2 = document.getElementById("filtroRango2");
filtroRango2.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio > 10000 && producto.precio <= 20000
  );

  removerActive();
  filtroRango2.classList.add("filter-link-active");

  pintarProducto();
});

const filtroRango3 = document.getElementById("filtroRango3");
filtroRango3.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio > 20000
  );

  removerActive();
  filtroRango3.classList.add("filter-link-active");

  pintarProducto();
});

const filtroTodosLosProductos = document.getElementById("filtroTodosLosProductos");
filtroTodosLosProductos.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos;

  pintarProducto();
});

const filtroCategoriaSol = document.getElementById("filtroSol");
filtroCategoriaSol.addEventListener("click", () => {
  listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.categoria === "SOL"
  );

  pintarProducto();
});

const filtroCategoriaRecetados = document.getElementById('filtroRecetado');
filtroCategoriaRecetados.addEventListener('click', () => {
    listaProductosConFiltro = listaProductos.filter(producto => producto.categoria === 'RECETADOS');

    pintarProducto();
})

const filtroCategoriaDeportivo = document.getElementById('filtroDeportivo');
filtroCategoriaDeportivo.addEventListener('click', () => {
    listaProductosConFiltro = listaProductos.filter(producto => producto.categoria === 'DEPORTIVOS');

    pintarProducto();
})

const buscarPorNombre = document.getElementById('buscarPorNombre');
buscarPorNombre.addEventListener('input', (e) => {
    let nombre = e.target.value;
    nombre = nombre.toUpperCase();
    listaProductosConFiltro = listaProductos.filter(producto => producto?.modelo.includes(nombre));

    pintarProducto();
    console.log(listaProductosConFiltro)
})

sinFiltro();
