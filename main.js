
const productos=[
    
    {   
        id:1,
        categoria: "trajesdebanio",
        nombre:"Ola esmeralda",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/TrajesDeBanio/olaesmeralda.jpeg",
        precio:5000
    },

    {
        id:2,
        categoria: "trajesdebanio",
        nombre:"Paraiso floral",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/TrajesDeBanio/paraisofloral.jpeg",
        precio:5000
    },

    {
        id:3,
        categoria: "trajesdebanio",
        nombre:"Fucsia glam",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/TrajesDeBanio/fucsiaglam.jpeg",
        precio:5000
    },

    {
        id:4,
        nombre:"Leopardo tropical",
        categoria: "trajesdebanio",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/TrajesDeBanio/leopardotropical.jpeg",
        precio:5000
    },

    {
        id:5,
        categoria: "trajesdebanio",
        nombre:"Citrus chic",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/TrajesDeBanio/citruschic.jpeg",
        precio:5000
    },

    {
        id:6,
        categoria: "trajesdebanio",
        nombre:"Safari sunset",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/TrajesDeBanio/safarisunset.jpeg",
        precio:5000
    },

    {
        id:7,
        categoria: "conjuntosdeportivos",
        nombre:"Camuflaje Urbano",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/ConjuntosDeportivos/ConjuntoCamuflajeUrbano.png",
        precio:5000
    },

    {
        id:8,
        categoria: "conjuntosdeportivos",
        nombre:"Indigo Clasico",
        talles:{
            s:3,
            m:2,
            l:1,
        },
        imagen:"imagenes/ConjuntosDeportivos/ConjuntoIndigoClasico.png",
        precio:5000
    }

];


/***creo card que se muestra en cada html */
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

    // const selectTalle=document.createElement("select");
    //     const opcionS = document.createElement("option");
    //     opcionS.value = "s";
    //     opcionS.innerText = "S";

    //     const opcionM = document.createElement("option");
    //     opcionM.value = "m";
    //     opcionM.innerText = "M";

    //     const opcionL = document.createElement("option");
    //     opcionL.value = "l";
    //     opcionL.innerText = "L";

    const boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.className = "btn-generico";
    boton.onclick = () => AgregarAlCarrito(producto.id, selectTalle.value);

    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(imagen);
        
        // selectTalle.appendChild(opcionS);
        // selectTalle.appendChild(opcionM);
        // selectTalle.appendChild(opcionL);

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
//     // Devuelve el primer elemento cuyo id coincide con idElegido.
//     // Si no encuentra → devuelve undefined

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

//         switch(opcion){
//             case "0":
//                 // no hacer nada, deja que el while termine
//                 break;
//             case "1":
//                 CatalogoTrajesDeBanio();
//                 break;
                
//             case "2":
//                 ConjunosDeportivos();
//                 break;
                
//             case "3":
//                 Sweaters();
//                 break;
                
//             case "4":
//                 Accesorios();
//                 break;
                
//             default:
//                 alert("Opcion no valida.");         
//                 //le saque break para que no salga de este menu
//         };
//     }while(opcion!=="0");
    
// };

// function CatalogoTrajesDeBanio(){
    
//     let catalogo="";

//     let trajes = productos.filter(p => p.categoria === "trajesdebanio");//devuelve un array con los trajes de baño

//     trajes.forEach((el, indice)=>{ //con el forEach recorro cada objeto
//         catalogo = catalogo + "\n"+ (indice+1) +") id:"+ el.id +" "+ el.nombre + " $" + el.precio + "  talles disponbles:";
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

//     alert("Estos son los trajes de baño disponibles:\n\n" + catalogo);
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

