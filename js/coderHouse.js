
// let carrito = [];

// let nombreDeCliente = '';
// let continuarCompra = false;
// let seleccionDeModelo = false;
// let modeloRecetadoSeleccionado = '';
// let modeloSolSeleccionado = '';
// let modeloDeportivoSeleccionado = '';
// let cantidadUnidadesCompradas = 0;
// let modeloSeleccionado = {};
// let listaFinalDeCompra = '';


// let cantidadUnidadesPorProducto = () => {
//     do{
//         cantidadUnidadesCompradas = Number(prompt(`Indique la cantidad de unidades que deseas comprar del producto seleccionado`));
//     }while(isNaN(cantidadUnidadesCompradas) || cantidadUnidadesCompradas == '')
// }

// let agregarAlCarrito = () => {
//     do{
//         carrito.push(...modeloSeleccionado);
//         cantidadUnidadesCompradas--;
//     }while(cantidadUnidadesCompradas !== 0)
// }

// let listaDeCarrito = () => {
//     listaFinalDeCompra = carrito.map((el) => `* Modelo: ${el.modelo} - Precio: $${el.precio}`).join('\n');
// }


// do{
//     nombreDeCliente = prompt(`Bienvendio/a a la tienda oficial de anteojos Rusty. Indique su nombre en el campo de abajo para iniciar su compra`);
// }while(!isNaN(nombreDeCliente) || nombreDeCliente.length == 0 )


// continuarCompra = false;

// const filtroRecetados = listaProductos.filter(producto => producto.categoria.includes('RECETADOS'));
// const filtroSol = listaProductos.filter(producto => producto.categoria.includes('SOL'));
// const filtroDeportivos = listaProductos.filter(producto => producto.categoria.includes('DEPORTIVOS'));

//     do{
//         categoria = prompt(`Hola ${nombreDeCliente}, Bienvenido/a. Ingrese el nombre de la categoria de anteojos que desea comprar: \n - Recetados \n - Sol \n - Deportivos`).toUpperCase();
            
//             switch(categoria){
//                 case 'RECETADOS':
//                 let listaModelosRecetados = filtroRecetados.map((producto) => `${producto.modelo} - $${producto.precio}`).join(' \n');
//                 modeloRecetadoSeleccionado = prompt(`Ingrese el nombre del modelo recetado que desea comprar: \n ${listaModelosRecetados}`).toUpperCase();
//                 seleccionDeModelo = true;
//                 break;
//             case 'SOL':
//                 let listaModeloDeSol = filtroSol.map((producto) => `${producto.modelo} - $${producto.precio}`).join('\n');
//                 modeloSolSeleccionado = prompt(`Ingrese el nombre del modelo de Sol que deseas comprar: \n ${listaModeloDeSol}`).toUpperCase();
//                 seleccionDeModelo = true;
//                 break;
//             case 'DEPORTIVOS':
//                 let listaModelosDeportivos = filtroDeportivos.map((producto) => `${producto.modelo} - $${producto.precio}`).join('\n');
//                 modeloDeportivoSeleccionado = prompt(`Ingrese el nombre del modelo deportivo que deseas comprar: \n ${listaModelosDeportivos}`).toUpperCase();
//                 seleccionDeModelo = true;
//                 break;
//             default:
//                 continuarCompra = alert(`La categoría ${categoria} no existe.`)
//                 break;
//         }
    
//         while(seleccionDeModelo){
            
//             switch(modeloRecetadoSeleccionado || modeloSolSeleccionado || modeloDeportivoSeleccionado){
//                     case 'GOTTE':
//                         let modeloGotte = filtroRecetados.filter(elemento => elemento.modelo == 'GOTTE');
//                         modeloSeleccionado = modeloGotte;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'VIENET':
//                         let modeloVienet = filtroRecetados.filter(elemento => elemento.modelo == 'VIENET');
//                         modeloSeleccionado = modeloVienet;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'THER':
//                         let modeloTher = filtroRecetados.filter(elemento => elemento.modelo == 'THER');
//                         modeloSeleccionado = modeloTher;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'CALLED':
//                         let modeloCalled = filtroSol.filter(elemento => elemento.modelo == 'CALLED');
//                         modeloSeleccionado = modeloCalled;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'CREDIX':
//                         let modeloCredix = filtroSol.filter(elemento => elemento.modelo == 'CREDIX');
//                         modeloSeleccionado = modeloCredix;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'SPELL':
//                         let modeloSpell = filtroSol.filter(elemento => elemento.modelo == 'SPELL');
//                         modeloSeleccionado = modeloSpell;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'SOTION':
//                         let modeloSotion = filtroDeportivos.filter(elemento => elemento.modelo == 'SOTION');
//                         modeloSeleccionado = modeloSotion;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'ESLAV':
//                         let modeloEslav = filtroDeportivos.filter(elemento => elemento.modelo == 'ESLAV');
//                         modeloSeleccionado = modeloEslav;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     case 'YAU':
//                         let modeloYau = filtroDeportivos.filter(elemento => elemento.modelo == 'YAU');
//                         modeloSeleccionado = modeloYau;
//                         cantidadUnidadesPorProducto();
//                         agregarAlCarrito();
//                         seleccionDeModelo = false;
//                         break;
//                     default:
//                         continuarCompra = alert(`El modelo ingresado no existe.`);
//                         seleccionDeModelo = false;
//                         break;
//                     }
//                 }  
    
//                 modeloRecetadoSeleccionado = '';
//                 modeloSolSeleccionado = '';
//                 modeloDeportivoSeleccionado = '';
                
//                 continuarCompra = confirm(`¿Deseas seguir comprando?`)
    
//                 console.log(`carrito `,carrito)
    
//     }while(!isNaN(categoria) || categoria.length == 0 || continuarCompra)

// let cantidadProductos = carrito.length;
// let montoTotal = carrito.reduce((acc, producto) => acc + producto.precio, 0);


// listaDeCarrito();

//     alert(`Detalle de su compra: \n - Cantidad total unidades compradas: ${cantidadProductos} \n \n - Lista de productos comprados: \n ${listaFinalDeCompra} \n \n - Monto total a abonar: $${montoTotal}`);






