
/******************************************
          CREAR ESTRUCTURA HTML
*******************************************/


const portada = document.createElement("section");
    portada.classList.add("portada");

// Crear el div del carousel
const carousel = document.createElement("div");
    
    carousel.classList.add("carousel");
    portada.appendChild(carousel);
    document.body.appendChild(portada);



//CREO UN DIV CON CLASE DESLIZAMIENTO DENTRO DE CAROUSEL
const EtiquetaParaCarousel = document.querySelector(".carousel");

    const deslizamiento = document.createElement("div");
    deslizamiento.classList.add("deslizamiento"); 
    EtiquetaParaCarousel.appendChild(deslizamiento);



// Creo selec para los filtros
const inputFiltro = document.createElement("select");
    inputFiltro.id = "input-filtro";

// OPCION 1
const opcion1 = document.createElement("option");
    opcion1.value = "todos";
    opcion1.innerText = "Todos";

// OPCION 2
const opcion2 = document.createElement("option");
    opcion2.value = "trajes de banio";
    opcion2.innerText = "Trajes de baño";

// OPCION 3
const opcion3 = document.createElement("option");
    opcion3.value = "conjuntos deportivos";
    opcion3.innerText = "Conjuntos deportivos";

// OPCION 4
const opcion4 = document.createElement("option");
    opcion4.value = "sweaters";
    opcion4.innerText = "Sweaters";

    // AGREGAR OPCIONES AL SELECT
    inputFiltro.appendChild(opcion1);
    inputFiltro.appendChild(opcion2);
    inputFiltro.appendChild(opcion3);
    inputFiltro.appendChild(opcion4);
    document.body.appendChild(inputFiltro);

// Creo boton filtrar el select
const btnFiltrar = document.createElement("button");

    btnFiltrar.id = "btn-filtrar";
    btnFiltrar.innerText = "Filtrar";
    document.body.appendChild(btnFiltrar);






const inputBuscar = document.createElement("input"); 
    inputBuscar.type = "text"; 
    inputBuscar.id = "input-buscar"; 
    inputBuscar.placeholder = "Nombre producto"; 
    document.body.appendChild(inputBuscar);

//     // Creo boton filtrar el select
// const btnBuscar = document.createElement("button");
//     btnBuscar.id = "btn-buscar";
//     btnBuscar.innerText = "Buscar";
//     document.body.appendChild(btnBuscar);




 //creo el titulo h2 "Nuestro Catalogo"
const TituloNuestroCatalogo = document.createElement("h2");

    TituloNuestroCatalogo.classList.add("nuestro-catalogo");
    TituloNuestroCatalogo.innerText = "Nuestro catálogo";
    document.body.appendChild(TituloNuestroCatalogo);


// <div id="container" class="container"></div>
const container = document.createElement("div");
    
    container.id = "container";
    container.classList.add("container");
    document.body.appendChild(container);


/***creo la eitqueta para cada card*************/
const carritoHTML = document.createElement("div");

    carritoHTML.id = "carrito";
    carritoHTML.classList.add("container");
    document.body.appendChild(carritoHTML);
    

/* Creo boton limpiar carrito */
const LimpiarCarrito= document.createElement("button");

    LimpiarCarrito.id = "btn-limpiar";
    LimpiarCarrito.classList.add("btn-generico");
    LimpiarCarrito.innerText="Limpiar Carrito";
    document.body.appendChild(LimpiarCarrito);



const controles = document.createElement("div");
    controles.classList.add("controles");
    document.body.appendChild(controles);
    controles.appendChild(LimpiarCarrito);







/******************************************
          FIN ESTRUCTURA HTML
*******************************************/

/***************************************
          ESTRUCTURA CAROUSEL
 ****************************************/
const ImagenesCarousel = [];
let indice = 0;


// FUNCION ASYNC
async function cargarCarousel(){
    //espera la carga del JSON desde fetch

    try{

        const response = await fetch("./carousel.json");//Array donde se guardarán las fotos
        //espera la respuesta antes de seguir.

        const data = await response.json();

        // GUARDAR IMAGENES
        data.forEach(el => {

            ImagenesCarousel.push(el.imagen);

        });

        // Creo las imagenes y las paso al HTML
        ImagenesCarousel.forEach(el => {

            const imgagenesdeslizadas = document.createElement("img");
            imgagenesdeslizadas.src = el;//Le asigno la imagen.
            deslizamiento.appendChild(imgagenesdeslizadas);
        });

        // INICIAR CAROUSEL
        setInterval(cambiarImagen, 3000);

    }

    catch(error){

        console.error(error);

    }
}

// FUNCION CAMBIAR IMAGEN
function cambiarImagen(){

    indice++;

    if(indice >= ImagenesCarousel.length){

        indice = 0;
    }

    deslizamiento.style.transform = `translateX(-${indice * 100}%)`;
    //Mueve horizontalmente el div completo.
    //si hubiera sido -100, mueve la pantalla hacia la izquierda

}

cargarCarousel();

/***************************************
        FIN ESTRUCTURA CAROUSEL
 ****************************************/

//*******Array donde se guardarán los productos*************************/
const productos = [];

// Busca el archivo data.json
fetch("./data.json")

    // Convierte la respuesta a formato JSON
    .then(response => response.json())

    // Cuando el JSON ya está cargado
    .then(data => {

        // Limpia el contenedor para evitar duplicados
        document.getElementById("container").innerHTML = "";

        // Recorre cada producto del JSON
        data.forEach(el => {

            // Crea una card HTML para cada producto
            CrearCard(el);

            // Guarda el producto en el array productos
            productos.push(el);
        });

    })

    // Si ocurre un error lo muestra en consola
    .catch(err => console.error(err));




function CrearCard(producto){

    const card=document.createElement("div");
    card.className="card";

    const nombre=document.createElement("h2");
    nombre.innerText=producto.nombre;

    const precio=document.createElement("p");
    precio.innerText=`$${producto.precio}`;

    const imagen=document.createElement("img");
    imagen.src=producto.imagen;
    imagen.alt="NOIMG";
    imagen.className="imagen";

    const selectTalle = document.createElement("select");

        for(let talle in producto.talles){

        const opcion = document.createElement("option");

        opcion.value = talle;
        opcion.innerText = talle.toUpperCase();

        selectTalle.appendChild(opcion); 
        //recorre automáticamente los talles del producto y crea las opciones del <select>. 
    }

    //boton agregar al carrito para HTML
    const boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.className = "btn-generico";
    boton.onclick = () => AgregarAlCarrito(producto.id, selectTalle.value);

    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(imagen);
    card.appendChild(selectTalle);
    card.appendChild(boton);
    
    const container = document.getElementById("container");

    if(container){
        container.appendChild(card);
    }
    //document.getElementById("container").appendChild(card);
};


productos.forEach(el=>CrearCard(el));


///******TODO RELACIONADO A AGREGAR AL CARRITO************************/

let carrito;

let data = localStorage.getItem("carrito"); 
//Traé de la memoria del navegador el valor guardado con la clave ‘carrito’ y guardalo en la variable data

if (data) {//si la data no esta vacia(habia algo en el carrito previamente), lo guarda en el carrito
    carrito = JSON.parse(data);//toma un string y lo convierte a un objeto oa array(le saca la bolda del freezer))
} else {//si no hay data, creo un carrito vacio
    carrito = [];
}



function AgregarAlCarrito(idElegido,TalleElegido){

    idElegido = Number(idElegido);
    //idElegido =parseInt(idElegido);
    const productoFinal=productos.find(el=>el.id===idElegido); //Recorre el array productos.
  // Devuelve el primer elemento cuyo id coincide con idElegido.
  // Si no encuentra → devuelve undefined

    //console.log(productoFinal) //todo el objeto con el id correspondiente

    if(productoFinal){//pregunta si el producto esta adentro del catalogo
            
        const existeProducto = carrito.some(el => el.id === productoFinal.id && el.talle === TalleElegido);
       
            if(existeProducto){
                //Recorre carrito y devuelve
                //true → si algún elemento tiene ese id con ese talle
                //false → si ninguno coincide
                //Es básicamente: “¿ya existe este producto en el carrito?”

                carrito = carrito.map(el => { 
                
                if(Number(el.id) === Number(productoFinal.id) && el.talle === TalleElegido){
                        //si existe un producto con la misma id y mismo talle, primero vuelvo a copiar todo el carrito en el carrito
                        //y despues al objeto que existe(id guales) le suma en cantidad
                    return {
                        ...el,
                        cantidad: el.cantidad + 1,
                        
                    };
                }else {
                    //cuando esta copiando a todo el carrito, deja igual a los obajetos que no coincide
                return el;
                }
            });
        } else {
            carrito.push({ ...productoFinal,talle: TalleElegido, cantidad: 1 });
                //Agrega un nuevo producto al carrito en caso de que ese producto no estaba
                //con una nueva propiedad "cantidad:1"
        }
        
        localStorage.setItem("carrito", JSON.stringify(carrito));//le pongo la bolsa para mandralo a frizeer
            //alert("Agregaste correctamente " + productoFinal.nombre + " al carrito");
        verCarrito();
        console.log(carrito);
    }
    else{
        alert("Ese producto no esta en tu catalogo");
    };

   //console.log(productoFinal);
};

 //console.log(carrito);


function crearCardCarrito(producto) {
    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("h2");
    nombre.innerText = producto.nombre;

    const precio = document.createElement("p");
    precio.innerText = `$${producto.precio}`;

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = "NOIMG";
    img.className = "imagen";

    const talle = document.createElement("p");
    talle.innerText = `Talle: ${producto.talle}`;

    const cantidad = document.createElement("p");
    cantidad.innerText = `Cantidad: ${producto.cantidad}`;

    const total = document.createElement("p");
    total.innerText = `Total: $${producto.precio * producto.cantidad}`;

    // const boton = document.createElement("button");
    // boton.innerText = "Agregar al carrito";
    // boton.className = "btn-generico";
    // boton.onclick = () => agregarAlCarrito(producto.id);

    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(img);
    card.appendChild(talle);
    card.appendChild(cantidad);
    card.appendChild(total);
    // card.appendChild(boton);

    document.getElementById("carrito").appendChild(card);
};

function verCarrito() {
    if (carrito.length > 0) {//solo se ejecuta si el carrito tiene algo
        document.getElementById("carrito").innerHTML = "";
        carrito.forEach(el => crearCardCarrito(el));
    };
};


//if(document.getElementById("carrito")){//"si existe un elemento HTML con id='carrito'"
 //  verCarrito();
//}

 //creo en HTML <button id="btn-limpiar" class="btn-generico">Limpiar Carrito</button> -->



function VaciarCarrito(){
   
    if (carrito.length > 0) { 
        
        carrito=[];
        localStorage.setItem("carrito", JSON.stringify(carrito));
       // alert("Se vacio el carrito correctamente!");
        document.getElementById("carrito").innerHTML="";//vacía visualmente el HTML.

    } else {
        alert("El carrito esta vacío");
    };

}

//Boton vaciar carrito
const btnLimpiarCarrito = document.getElementById("btn-limpiar");
btnLimpiarCarrito.onclick=()=>VaciarCarrito();


/****TODO RELACIONADO A FILTRAR PRODUCTOS*****************************/



function FiltrarProductos(categoria){
   
    // Limpia el container, por si habia algo, se pudo haber ejecutado anteriormente
    document.getElementById("container").innerHTML = "";

    // SI ELIGE "todo"
    if(categoria === "todos"){

        productos.forEach(producto => {
            CrearCard(producto);
        });

        return;
    }

    const ProductosFiltrados = productos.filter(
    producto => producto.categoria === categoria
    );

    // Renderiza los productos filtrados
    ProductosFiltrados.forEach(producto => {
        CrearCard(producto);
    });

}

//Boton filtrar productos
const btnFiltrarProductos = document.getElementById("btn-filtrar");
btnFiltrarProductos.addEventListener("click", () => {

    // Obtiene lo escrito en el input
    const categoriaIngresada = document.getElementById("input-filtro").value;

    // Ejecuta el filtro
    FiltrarProductos(categoriaIngresada);
});






function BuscarProductos(palabra){
   
    // Limpia el container, por si habia algo, se pudo haber ejecutado anteriormente
    document.getElementById("container").innerHTML = "";

   // PASAR A MINUSCULA
    palabra = palabra.toLowerCase();


    // si esta vacio el placeholedr, muestra todo el catalogo
    if(palabra === ""){

        productos.forEach(producto => {
            CrearCard(producto);
        });

        return;
    }


    const ProductosBuscados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(palabra)
        ||
        producto.categoria.toLowerCase().includes(palabra)
    );
    // Renderiza los productos filtrados
    ProductosBuscados.forEach(producto => {
        CrearCard(producto);
    });
  

     // en caso de que el producto buscado no se encuentre, aparace ese mensaje
      if(ProductosBuscados.length === 0){

        const mensaje = document.createElement("h3");

        mensaje.innerText =
            "El producto no se encuentra en el catálogo";

        document.getElementById("container")
            .appendChild(mensaje);

        return;
    }

}


const InputBuscarProductos = document.getElementById("input-buscar");
InputBuscarProductos.addEventListener("input", () => {
    // Ejecuta el filtro
    BuscarProductos(InputBuscarProductos.value);
});



//localStorage.clear();

// // // // // let cards = "";

// // // // // const filtrados = productos.filter(
// // // // //     producto => producto.categoria === categoriaActual
// // // // // );

// // // // // filtrados.forEach(el=>{

// // // // //     cards += `
// // // // //         <div class="card">
// // // // //             <h2>${el.nombre}</h2>
// // // // //             <p>$${el.precio}</p>
// // // // //             <img src="${el.imagen}" alt="NOIMG" class="imagen">
// // // // //         </div>
// // // // //     `;
// // // // // });

// // // // // document.getElementById("container").innerHTML = cards;

// // // // // let NuevaCard="";

// // // // // const ProductosTrajesDeBanio = productos.filter(
// // // // //     producto => producto.categoria === "trajesdebanio"
// // // // // );

// // // // // ProductosTrajesDeBanio.forEach(el=>{
    
// // // // //     NuevaCard =   NuevaCard + `
// // // // //         <div class="card">
// // // // //             <h2>${el.nombre}</h2>
// // // // //             <p>${el.precio}</p>
// // // // //             <img src="${el.imagen}" alt="NOIMG" class="imagen">
// // // // //         </div>
// // // // //     `
// // // // // });

// // // // // document.getElementById("container").innerHTML = NuevaCard;


// // // // // let NuevaCard2="";

// // // // // const ProductosConjuntosDepotivos = productos.filter(
// // // // //     producto => producto.categoria === "conjuntosdeportivos"
// // // // // );

// // // // // ProductosConjuntosDepotivos.forEach(el=>{
    
// // // // //     NuevaCard2 =   NuevaCard2 + `
// // // // //         <div class="card">
// // // // //             <h2>${el.nombre}</h2>
// // // // //             <p>${el.precio}</p>
// // // // //             <img src="${el.imagen}" alt="NOIMG" class="imagen">
// // // // //         </div>
// // // // //     `
// // // // // });

// // // // // document.getElementById("conjuntosdeportivos").innerHTML = NuevaCard2;





// /****************TODO LO RELACIONADO CON CATALOGO**************************/
// function VerCatalogo(){
    
//     let opcion;
//     do{
//         opcion=prompt("Que procducto te gustaria ver? \n\n1)Trajes de baño\n2)Conjuntos deportivos\n3)Sweaters\n4)Accesorios.\n\nPara vover al menu principal presione 0.");

//   
// };

//  
// };

// /******CREO CARD PARA CADA PRODUCTO*********************************/

// function CrearCard(producto){

//     const card=document.createElement("div");
//     card.className="card";

//     const nombre=document.createElement("h2");
//     nombre.innerText=producto.nombre;

//     const precio=document.createElement("p");
//     precio.innerText=`$${producto.precio}`;

//     const imagen=document.createElement("img");
//     imagen.scr=producto.imagen;
//     imagen.alt="NOIMG";
//     imagen.className="imagen";

//     card.appendChild(nombre);
//     card.appendChild(precio);
//     card.appendChild(imagen);
// }



// /******TODO RELACIONADO A AGREGAR AL CARRITO************************/

// let carrito;

// let data = localStorage.getItem("carrito"); 
// //Traé de la memoria del navegador el valor guardado con la clave ‘carrito’ y guardalo en la variable data

// if (data) {//si la data no esta vacia(habia algo en el carrito previamente), lo guarda en el carrito
//     carrito = JSON.parse(data);//toma un string y lo convierte a un objeto oa array(le saca la bolda del freezer))
// } else {//si no hay data, creo un carrito vacio
//     carrito = [];
// }


//function AgregarAlCarrito(idElegido){

// // //     let opcion;
// // //     do{
// // //         opcion=prompt("Que producto te gustaria agregar al carrito? \n\n1)Trajes de baño\n2)Conjuntos deportivos\n3)Sweaters\n4)Accesorios.\n\nPara vover al menu principal presione 0.");

// // //         switch(opcion){
// // //             case "0":
// // //                 // no hacer nada, deja que el while termine
// // //                 break;
// // //             case "1":
// // //                 CarritoTrajesDeBanio();
// // //                 break;
                
// // //             case "2":
// // //                 ConjunosDeportivos();
// // //                 break;
                
// // //             case "3":
// // //                 Sweaters();
// // //                 break;
                
// // //             case "4":
// // //                 Accesorios();
// // //                 break;
                
// // //             default:
// // //                 alert("Opcion no valida.");         
// // //                 //le saque break para que no salga de este menu
// // //         };
// // //     }while(opcion!=="0");

// // }

// function CarritoTrajesDeBanio(){
    
//     let catalogo="";

//     let trajes = productos.filter(p => p.categoria === "trajesdebanio");//filtra solo los prductos "traje de baño"

//     trajes.forEach((el, indice)=>{ //con el forEach recorro cada objeto
//         catalogo = catalogo + "\n"+ (indice+1) +") id:"+ el.id + el.nombre + "   $" + el.precio + "  talles disponbles:";
//         if(el.talles.s>0){
//             catalogo +=" s";
//         };
//         if(el.talles.m>0){
//             catalogo +=" m";
//         };
//         if(el.talles.l>0){
//             catalogo +=" l";
//         }
//     });

//     let opcion =prompt("Elija el traje de baño:\n\n" + catalogo); // es string
//     //console.log(typeof opcion);
//     let idElegido= parseInt(opcion);//prompt() devuelve string, no número. Por eso hay que convertirlo
//     console.log(idElegido);

//     const tallesDisponibles = Object.keys(productoFinal.talles)
//     .filter(t => productoFinal.talles[t] > 0);
//     let talle = prompt("Talles disponibles: " + tallesDisponibles.join(", "));
    
    
//     //=(prompt("Elija el talle: "));

 // const productoFinal=productos.find(el=>el.id===idElegido); //Recorre el array productos.
//     // Devuelve el primer elemento cuyo id coincide con idElegido.
//     // Si no encuentra → devuelve undefined
    
  //console.log(productoFinal) //todo el objeto con el id correspondiente
//}
     
//     if(productoFinal){//pregunta si el producto esta adentro del catalogo
        
        
//         if(carrito.some(el => el.id === productoFinal.id)){
//             //Recorre carrito y devuelve
//             //true → si algún elemento tiene ese id
//             //false → si ninguno coincide
//             //Es básicamente: “¿ya existe este producto en el carrito?”

//             carrito = carrito.map(el => { 
//                 if(el.id === productoFinal.id){
//                     //si existe vuelvo a copiar todo el carrito en el carrito
//                     //pero al objeto que existe(id guales) le suma en cantidad
//                     return {
//                         ...el,
//                         cantidad: el.cantidad + 1,
//                     };
//                 } else {
//                     //cuando esta copiando a todo el carrito, deja igual a los obajetos que no coincide
//                     return el;
//                 };
//             });
//         } else {
//             carrito.push({ ...productoFinal, cantidad: 1 });
//             //Agrega un nuevo producto al carrito en caso de que ese producto no estaba
//             //con una nueva propiedad "cantidad:1"
//         }

//     }

//     else{
//         alert("Ese producto no esta en tu catalogo");
//     }
// };

// /***CREO LAS CARD PARA MI CARRITO************************************* */
// function CrearCardCarrito(producto){

//     const card=document.createElement("div");
//     card.className="card";

//     const nombre=document.createElement("h2");
//     nombre.innerText=producto.nombre;

//     const precio=document.createElement("p");
//     precio.innerText=`$${producto.precio}`;

//     const imagen=document.createElement("img");
//     imagen.src=producto.imagen;
//     imagen.alt="NOIMG";
//     imagen.className="imagen";

//     const cantidad = document.createElement("p");
//     cantidad.innerText = `Cantidad: ${producto.cantidad}`;

//     const total = document.createElement("p");
//     total.innerText = `Total: $${producto.precio * producto.cantidad}`;

//     // const boton = document.createElement("button");
//     // boton.innerText = "Agregar al carrito";
//     // boton.className = "btn-generico";
//     // boton.onclick = () => agregarAlCarrito(producto.id);

//     card.appendChild(nombre);
//     card.appendChild(precio);
//     card.appendChild(imagen);
//     card.appendChild(cantidad);
//     card.appendChild(total);
//     // card.appendChild(boton);

//     document.getElementById("container-carrito").appendChild(card);
// };



// function VerCarrito(){
//     if (carrito.length > 0) {
//         let mensaje = "Estos son los productos de tu carrito:\n";

//         carrito.forEach(el => {
//             mensaje += "\nID: " + el.id + " / " + el.nombre + " - $" + el.precio + " - Cantidad: " + el.cantidad;
//         });

//         alert(mensaje);
//     } else {
//         alert("Carrito vacío");
//     };
// };


// /******************************************************************* */

// function VaciarCarrito(){
//     if (carrito.length > 0) {
//         let mensaje = "Estos son los productos de tu carrito:\n";
        
//         carrito=[];
//         alert("Se vacio el carrito");

//     } else {
//         alert("El carrito esta vacío");
//     };

// }

// function menu(){

//     let opcion;
//     do{
//         opcion=prompt("Bienvenidos a Dulce Locura! Que desea realizar?\n\n1) Ver el Catalogo. \n2) Agregar productos al carrito.\n3) Ver Carrito.\n4) Vaciar Carrito.\n\nPara salir presione 0.");
//         // promp sirve para mostrar en pantalla e ingresar un valor
//         //alert solo muestra en pantalla
//         switch(opcion){
//             case "0":
//                 alert("Gracias por visitarnos!");
//                 break;
            
//             case "1":
//                 VerCatalogo();
//                 break;
            
//             case "2":
//                 AgregarAlCarrito();
//                 break;
            
//             case "3":
//                 VerCarrito();
//                 break;
            
//             case "4":
//                 VaciarCarrito();
//                 break;
            
//             default:
//                 alert("Opcion no valida.")
//                 break;                
//         };

//     }while(opcion!=="0")
// };

// menu();

