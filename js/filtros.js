// CLASE ACTIVE
const removerActive = () => {
  filtroRango0.classList.remove("filter-link-active");
  filtroRango1.classList.remove("filter-link-active");
  filtroRango2.classList.remove("filter-link-active");
  filtroRango3.classList.remove("filter-link-active");
  filtroMayorPrecio.classList.remove("filter-link-active");
  filtroMenorPrecio.classList.remove("filter-link-active");
};

// FILTRO MENOR A MAYOR
const filtroMenorPrecio = document.getElementById("menorPrecio");
filtroMenorPrecio.addEventListener("click", async () => {

  const listaProductos = await listaProductoController(); 
  const listaProductosConFiltro = listaProductos.sort((a, b) => a.precio - b.precio);

  removerActive();
  filtroMenorPrecio.classList.add("filter-link-active");

  pintarProducto(listaProductosConFiltro);
});

// FILTRO MAYOR A MENOR
const filtroMayorPrecio = document.getElementById("mayorPrecio");
filtroMayorPrecio.addEventListener("click", async () => {

  const listaProductos = await listaProductoController();
  const listaProductosConFiltro = listaProductos.sort((a, b) => b.precio - a.precio);

  removerActive();
  filtroMayorPrecio.classList.add("filter-link-active");

  pintarProducto(listaProductosConFiltro);
});

// FILTRO TODOS LOS PRODUCTOS
const filtroRango0 = document.getElementById("filtroRango0");
filtroRango0.addEventListener("click", async () => {

  const listaProductos = await listaProductoController();
  const listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio >= 0
  );

  removerActive();
  filtroRango0.classList.add("filter-link-active");

  pintarProducto(listaProductosConFiltro);
});

// FILTRO RANGO 0 >= 10000
const filtroRango1 = document.getElementById("filtroRango1");
filtroRango1.addEventListener("click", async () => {

  const listaProductos = await listaProductoController();
  const listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio > 0 && producto.precio <= 10000
  );

  removerActive();
  filtroRango1.classList.add("filter-link-active");

  pintarProducto(listaProductosConFiltro);
});


// FILTRO RANGO 10000 >= 20000
const filtroRango2 = document.getElementById("filtroRango2");
filtroRango2.addEventListener("click", async () => {
  
  const listaProductos = await listaProductoController();
  const listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio > 10000 && producto.precio <= 20000
  );

  removerActive();
  filtroRango2.classList.add("filter-link-active");

  pintarProducto(listaProductosConFiltro);
});


// FILTRO RANGO > 20000
const filtroRango3 = document.getElementById("filtroRango3");
filtroRango3.addEventListener("click", async () => {

  const listaProductos = await listaProductoController();
  const listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.precio > 20000
  );

  removerActive();
  filtroRango3.classList.add("filter-link-active");

  pintarProducto(listaProductosConFiltro);
});

// FILTRO TODOS LOS PRODUCTOS
const filtroTodosLosProductos = document.getElementById("filtroTodosLosProductos");
filtroTodosLosProductos.addEventListener("click", async () => {

  const listaProductos = await listaProductoController();
  const listaProductosConFiltro = listaProductos;

  pintarProducto(listaProductosConFiltro);
});

// FILTRO CATEGORIA SOL
const filtroCategoriaSol = document.getElementById("filtroSol");
filtroCategoriaSol.addEventListener("click", async () => {

  const listaProductos = await listaProductoController();
  const listaProductosConFiltro = listaProductos.filter(
    (producto) => producto.categoria === "SOL"
  );

  pintarProducto(listaProductosConFiltro);
});

// FILTRO CATEGORIA RECETADOS
const filtroCategoriaRecetados = document.getElementById('filtroRecetado');
filtroCategoriaRecetados.addEventListener('click', async () => {

    const listaProductos = await listaProductoController();
    const listaProductosConFiltro = listaProductos.filter(producto => producto.categoria === 'RECETADOS');

    pintarProducto(listaProductosConFiltro);
})

// FILTRO CATEGORIA DEPORTIVOS
const filtroCategoriaDeportivo = document.getElementById('filtroDeportivo');
filtroCategoriaDeportivo.addEventListener('click', async () => {

    const listaProductos = await listaProductoController();
    const listaProductosConFiltro = listaProductos.filter(producto => producto.categoria === 'DEPORTIVOS');

    pintarProducto(listaProductosConFiltro);
})

// FILTRO BUSCAR
const buscarPorNombre = document.getElementById('buscarPorNombre');
buscarPorNombre.addEventListener('input', async (e) => {
    let nombre = e.target.value;
    nombre = nombre.toUpperCase();

    const listaProductos = await listaProductoController();
    const listaProductosConFiltro = listaProductos.filter(producto => producto?.modelo.includes(nombre));
    pintarProducto(listaProductosConFiltro);
})