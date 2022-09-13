const listaProductos = [
    {
        categoria: 'RECETADOS',
        modelo: 'GOTTE',
        precio: 11000
    },
    {
        categoria: 'RECETADOS',
        modelo: 'VIENT',
        precio: 15000
    },
    {
        categoria: 'RECETADOS',
        modelo: 'THER',
        precio: 18500
    },
    {
        categoria: 'SOL',
        modelo: 'CALLED',
        precio: 18000
    },
    {
        categoria: 'SOL',
        modelo: 'CREDIX',
        precio: 20000
    },
    {
        categoria: 'SOL',
        modelo: 'SPELL',
        precio: 25000
    },
    {
        categoria: 'DEPORTIVOS',
        modelo: 'SOTION',
        precio: 24000
    },
    {
        categoria: 'DEPORTIVOS',
        modelo: 'ESLAV',
        precio: 30000
    },
    {
        categoria: 'DEPORTIVOS',
        modelo: 'YAU',
        precio: 21000
    },
];
let carrito = [];

let nombre = '';
let continuarCompra = false;
let continuarCompra2 = false;
let modeloRecetado = '';
let modeloSol = '';
let modeloDeportivo = '';
let cantidad = 0;
let modeloSeleccionado = {};
let listaDeCompra = '';


let cantidadUnidades = () => {
    do{
        cantidad = Number(prompt(`Indique la cantidad de unidades que deseas comprar del producto seleccionado`));
    }while(isNaN(cantidad) || cantidad == '')
}

let agregarAlCarrito = () => {
    do{
        for(const car of modeloSeleccionado){
            carrito.push(...modeloSeleccionado);
            cantidad--;
        }
    }while(cantidad !== 0)
}

let listaDeCarrito = () => {
    listaDeCompra = carrito.map((el) => `* Modelo: ${el.modelo} - Precio: $${el.precio}`).join('\n');
 }

do{
    nombre = prompt(`Bienvendio/a a la tienda oficial de anteojos Rusty. Indique su nombre en el campo de abajo para iniciar su compra`);
}while(!isNaN(nombre) || nombre.length == 0 )

continuarCompra = false;

const filtroRecetados = listaProductos.filter(producto => producto.categoria.includes('RECETADOS'));
const filtroSol = listaProductos.filter(producto => producto.categoria.includes('SOL'));
const filtroDeportivos = listaProductos.filter(producto => producto.categoria.includes('DEPORTIVOS'));
do{
    categoria = prompt(`Hola ${nombre}, Bienvenido/a. Ingrese el nombre de la categoria de anteojos que desea comprar: \n - Recetados \n - Sol \n - Deportivos`).toUpperCase();
        
        switch(categoria){
            case 'RECETADOS':
            let listaRecetados = filtroRecetados.map((producto) => `${producto.modelo} - $${producto.precio}`).join(' \n');
            modeloRecetado = prompt(`Ingrese el nombre del modelo recetado que desea comprar: \n ${listaRecetados}`).toUpperCase();
            continuarCompra2 = true;
            break;
        case 'SOL':
            let listaSol = filtroSol.map((producto) => `${producto.modelo} - $${producto.precio}`).join('\n');
            modeloSol = prompt(`Ingrese el nombre del modelo de Sol que deseas comprar: \n ${listaSol}`).toUpperCase();
            continuarCompra2 = true;
            break;
        case 'DEPORTIVOS':
            let listaDeportivos = filtroDeportivos.map((producto) => `${producto.modelo} - $${producto.precio}`).join('\n');
            modeloDeportivo = prompt(`Ingrese el nombre del modelo deportivo que deseas comprar: \n ${listaDeportivos}`).toUpperCase();
            continuarCompra2 = true;
            break;
        default:
            continuarCompra = alert(`La categoría ${categoria} no existe.`)
            break;
    }

    while(continuarCompra2){
        
        switch(modeloRecetado || modeloSol || modeloDeportivo){
                case 'GOTTE':
                    let modeloGotte = filtroRecetados.filter(elemento => elemento.modelo == 'GOTTE');
                    modeloSeleccionado = modeloGotte;
                    console.log(modeloSeleccionado)
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'VIENT':
                    let modeloVient = filtroRecetados.filter(elemento => elemento.modelo == 'VIENT');
                    modeloSeleccionado = modeloVient;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'THER':
                    let modeloTher = filtroRecetados.filter(elemento => elemento.modelo == 'THER');
                    modeloSeleccionado = modeloTher;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'CALLED':
                    let modeloCalled = filtroSol.filter(elemento => elemento.modelo == 'CALLED');
                    modeloSeleccionado = modeloCalled;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'CREDIX':
                    let modeloCredix = filtroSol.filter(elemento => elemento.modelo == 'CREDIX');
                    modeloSeleccionado = modeloCredix;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'SPELL':
                    let modeloSpell = filtroSol.filter(elemento => elemento.modelo == 'SPELL');
                    modeloSeleccionado = modeloSpell;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'SOTION':
                    let modeloSotion = filtroDeportivos.filter(elemento => elemento.modelo == 'SOTION');
                    modeloSeleccionado = modeloSotion;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'ESLAV':
                    let modeloEslav = filtroDeportivos.filter(elemento => elemento.modelo == 'ESLAV');
                    modeloSeleccionado = modeloEslav;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                case 'YAU':
                    let modeloYau = filtroDeportivos.filter(elemento => elemento.modelo == 'YAU');
                    modeloSeleccionado = modeloYau;
                    cantidadUnidades();
                    agregarAlCarrito();
                    continuarCompra2 = false;
                    break;
                default:
                    continuarCompra = alert(`El modelo ingresado no existe.`);
                    continuarCompra2 = false;
                    break;
                }
            }  

            modeloRecetado = '';
            modeloSol = '';
            modeloDeportivo = '';
            
            continuarCompra = confirm(`¿Deseas seguir comprando?`)

            console.log(`carrito `,carrito)

}while(!isNaN(categoria) || categoria.length == 0 || continuarCompra)

let cantidadProductos = carrito.length;
let montoTotal = carrito.reduce((acc, producto) => acc + producto.precio, 0);

listaDeCarrito();

    alert(`Detalle de su compra: \n - Cantidad total unidades compradas: ${cantidadProductos} \n \n - Lista de productos comprados: \n ${listaDeCompra} \n \n - Monto total a abonar: $${montoTotal}`);





