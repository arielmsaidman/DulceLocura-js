
/******************************************
          CREAR ESTRUCTURA HTML
*******************************************/

/***login en el header***/
let divlogin = document.getElementById("login");

const login= document.createElement("button");
    const img = document.createElement("img");
    img.src = "imagenes/MenuPrincipal/login.svg";
    img.width = 30;
    const texto = document.createTextNode(" Registrarse");
    login.classList.add("btn-generico");
    login.id=("Logearse");
    login.onclick=()=>Registrarse();

    login.appendChild(img);
    login.appendChild(texto);
    divlogin.appendChild(login);

    

const portada = document.createElement("section");
    portada.classList.add("portada");

// Crear el div del carousel
const carousel = document.createElement("div");
    
    carousel.classList.add("carousel");
    portada.appendChild(carousel);
    document.querySelector("main").appendChild(portada);


//CREO UN DIV CON CLASE DESLIZAMIENTO DENTRO DE CAROUSEL
const EtiquetaParaCarousel = document.querySelector(".carousel");

    const deslizamiento = document.createElement("div");
    deslizamiento.classList.add("deslizamiento"); 
    EtiquetaParaCarousel.appendChild(deslizamiento);

/*Menu de busquedo y filtro*/
const FiltarYBuscar = document.createElement("div")
    FiltarYBuscar.className="MenuDeFiltrarYBuscar";
    FiltarYBuscar.id="MenuDeFiltrarYBuscar";


    // Creo selec para los filtros
    const SelecYBoton =document.createElement("div");
        SelecYBoton.className ="JuntarSelectYBoton";

        const TituloCategoria=document.createElement("h3")
            TituloCategoria.className="ElegirCategoria";
            TituloCategoria.innerText="Categoria: "

        const inputFiltro = document.createElement("select");
            inputFiltro.className ="input-filtro";
            inputFiltro.id = "inputfiltro";

            // OPCION 1
            const opcion1 = document.createElement("option");
                opcion1.value = "todos";
                opcion1.innerText = "Todos";

            // OPCION 2
            const opcion2 = document.createElement("option");
                opcion2.value = "trajes de baño";
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

        // Creo boton filtrar el select
        const btnFiltrar = document.createElement("button");

            btnFiltrar.id = "btn-filtrar";
            btnFiltrar.className="btn-filtrar";
            btnFiltrar.innerText = "Filtrar";


    //meter selec y botndentron del main
    SelecYBoton.appendChild(TituloCategoria);
    SelecYBoton.appendChild(inputFiltro);
    SelecYBoton.appendChild(btnFiltrar);

    FiltarYBuscar.appendChild(SelecYBoton);
    // document.querySelector("main").appendChild(SelecYBoton);


    const varLupaYBuscar = document.createElement("div")
        varLupaYBuscar.className = "LupaYBuscar";

        //placeholder de buscar
        //imagen de lupa
        const imgLupa = document.createElement("img");
            imgLupa.src="imagenes/MenuPrincipal/lupa.svg"
            imgLupa.className="Lupa"
            imgLupa.id="idLupa"
            imgLupa.alt="NO LUPA"

        const inputBuscar = document.createElement("input"); 
            inputBuscar.type = "text"; 
            inputBuscar.id = "input-buscar"; 
            inputBuscar.placeholder = "Nombre producto"; 
            
            //FiltarYBuscar.appendChild(inputBuscar);
            varLupaYBuscar.appendChild(imgLupa);
            varLupaYBuscar.appendChild(inputBuscar);

            FiltarYBuscar.appendChild(varLupaYBuscar);


document.querySelector("main").appendChild(FiltarYBuscar);


//creo el titulo h2 "Nuestro Catalogo"
const TituloNuestroCatalogo = document.createElement("h2");

    TituloNuestroCatalogo.classList.add("nuestro-catalogo");
    TituloNuestroCatalogo.innerText = "Nuestro catálogo";
    document.querySelector("main").appendChild(TituloNuestroCatalogo);


//div que contiene las card producto
const container = document.createElement("div");
    
    container.id = "container";
    container.classList.add("container");
    document.querySelector("main").appendChild(container);



const CrearTituloCarrito = document.createElement("h2");

    CrearTituloCarrito.innerText="Carrito"; 
    CrearTituloCarrito.id="titulo-carrito";   
    CrearTituloCarrito.classList.add("titulo-carrito");
    document.querySelector("main").appendChild(CrearTituloCarrito);
    
    // OCULTO AL INICIO
    CrearTituloCarrito.style.display = "none";
    
/***creo la etiqueta para cada card del carrito*************/
const carritoHTML = document.createElement("div");

    carritoHTML.id = "carrito";
    carritoHTML.classList.add("container");
    document.querySelector("main").appendChild(carritoHTML);
    
    
/***Creo la barra de abajo del carrito con todos sus elementos internos**** */
const BarraCarrito =document.createElement("div");
    
    BarraCarrito.id="BarraInfoCarrito";
    BarraCarrito.classList.add("BarraInfoCarrito");


    const PrecioTotal=document.createElement("h3");
        PrecioTotal.classList.add("TextoBarraCarrito");
        PrecioTotal.id = "PrecioFinal";

    const CantProductos=document.createElement("h3");
        CantProductos.classList.add("TextoBarraCarrito");
        CantProductos.id = "CantidadTotalProductos";

    const ComprarCarrito= document.createElement("button");
        ComprarCarrito.id = "btn-comprar";
        ComprarCarrito.classList.add("btn-generico");
        ComprarCarrito.innerText="Comprar carrito";
        ComprarCarrito.onclick =()=> ComprarCarritoBtn();

    /* Creo boton limpiar carrito */
    const LimpiarCarrito= document.createElement("button");
        LimpiarCarrito.id = "btn-limpiar";
        LimpiarCarrito.classList.add("btn-generico");
        LimpiarCarrito.innerText="Limpiar carrito";
      

    BarraCarrito.appendChild(PrecioTotal);
    BarraCarrito.appendChild(CantProductos);
    BarraCarrito.appendChild(ComprarCarrito);   
    BarraCarrito.appendChild(LimpiarCarrito);
    

    document.querySelector("main").appendChild(BarraCarrito);
    BarraCarrito.style.display="none";


/******************************************
          FIN ESTRUCTURA HTML
*******************************************/

let usuarioRegistrado = false;

/****Boton de registrarse en el header***/
function Registrarse(){

    Swal.fire({
        title: "Ingrese su nombre",
        input: "text",
        inputPlaceholder: "Nombre",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Aceptar"
    }).then((result) => {

        if(result.isConfirmed && result.value){

            usuarioRegistrado = true;

            Swal.fire({
            title: `¡Hola ${result.value}!`,
            icon: "success"
            });

            const nombre = result.value;
            const boton = document.getElementById("Logearse");
            boton.innerHTML = `Bienvenido, ${nombre}`;
            boton.onclick = null; // opcional: desactiva volver a registrarse
        }
    });
}


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


/*Creo la card para cada producto*/    
function CrearCard(producto){

    const card=document.createElement("div");
    card.className="ProductoCard";

    const imagen=document.createElement("img");
    imagen.src=producto.imagen;
    imagen.alt="NOIMG";
    imagen.className="ImagenProducto";

    const nombre=document.createElement("h2");
    nombre.innerText=producto.nombre;

    const precio=document.createElement("p");
    precio.innerText=`$${producto.precio}`;

    
    const TalleYComprar=document.createElement("div");
    TalleYComprar.className="TalleYComprar";


        const selectTalle = document.createElement("select");
            selectTalle.className="SeleccionarTalle";

            for(let talle of producto.talles){

            const opcion = document.createElement("option");

            opcion.value = talle;
            opcion.innerText = talle.toUpperCase();

            selectTalle.appendChild(opcion); 
            //recorre automáticamente los talles del producto y crea las opciones del <select>. 
        }


        const BotonComprar= document.createElement("button");
        BotonComprar.className="btn-generico BotonComprar";
        BotonComprar.innerText="Comprar";
        BotonComprar.onclick = () => Comprar(producto.nombre, producto.categoria, selectTalle.value);


        TalleYComprar.appendChild(selectTalle);
        TalleYComprar.appendChild(BotonComprar);

    
    const BotonAgregarCarrito=document.createElement("div");
    BotonAgregarCarrito.className="BotonAgregarCarrito";

    //boton agregar al carrito para HTML
        const boton = document.createElement("button");
            boton.innerText = "Agregar al carrito";
            boton.className = "btn-generico";
            boton.onclick = () => AgregarAlCarrito(producto.id, selectTalle.value, producto.precio);

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(TalleYComprar);
    
        BotonAgregarCarrito.appendChild(boton);
        card.appendChild(BotonAgregarCarrito);
        
        
        const container = document.getElementById("container");

        if(container){
            container.appendChild(card);
        }
    //document.getElementById("container").appendChild(card);
};


productos.forEach(el=>CrearCard(el));


function Comprar(NombreProducto,CategoriaProducto, TalleElegido){
    
    if(usuarioRegistrado){

        Swal.fire({
        title: "Compra realizada con exito!",
        text:`${NombreProducto} - Talle: ${TalleElegido.toUpperCase()}`,
        icon: "success"
        });
    }
    else{
        Swal.fire({
            title: "Debes registrarte primero",
            text: "Para realizar una compra necesitas registrarte.",
            icon: "warning"
        });

    }
}

function ComprarCarritoBtn(){
if(usuarioRegistrado){

        Swal.fire({
        title: "Compra realizada con exito!",
        text:`Precio final: $${preciocarrito} - Cantidad de productos: ${contadorcantidad}`,
        icon: "success"
        });

        VaciarCarrito();
    }
    else{
        Swal.fire({
            title: "Debes registrarte primero",
            text: "Para realizar una compra necesitas registrarte.",
            icon: "warning"
        });

    }
};


/***********************************
        AGREGAR AL CARRITO
************************************/

let carrito;
let contadorcantidad;
let preciocarrito;


//chatgpt
function ActualizarBarraCarrito(){

    PrecioTotal.textContent =
        `Precio final: $${preciocarrito}`;

    CantProductos.textContent =
        `Cantidad de productos: ${contadorcantidad}`;

    if(carrito.length > 0){
        BarraCarrito.style.display = "flex";
        document.getElementById("titulo-carrito").style.display = "flex";
    }
    else{
        BarraCarrito.style.display = "none";
        document.getElementById("titulo-carrito").style.display = "none";
    }
};


let data = localStorage.getItem("carrito"); 
let datacantidad =localStorage.getItem("contadorcantidad");
let dataprecio= localStorage.getItem("preciocarrito"); 
//Traé de la memoria del navegador el valor guardado con la clave ‘carrito’ y guardalo en la variable data

if (data) {//si la data no esta vacia(habia algo en el carrito previamente), lo guarda en el carrito
    carrito = JSON.parse(data);//toma un string y lo convierte a un objeto oa array(le saca la bolda del freezer))
    contadorcantidad=JSON.parse(datacantidad); //el contador total de productos de todo el carrito
    preciocarrito=JSON.parse(dataprecio);
}
else {
    carrito = [];
    contadorcantidad=0;
    preciocarrito=0;
}

function AgregarAlCarrito(idElegido,TalleElegido,PrecioProducto){

    contadorcantidad++;
    preciocarrito = preciocarrito + PrecioProducto;
    
    ActualizarBarraCarrito();  


    const productoFinal=productos.find(el=>el.id===idElegido); //Recorre el array productos.
  // Devuelve el primer elemento cuyo id coincide con idElegido, sino devuelve undefined
  

        const existeProductoEnCarrito = carrito.some(el => el.id === productoFinal.id && el.talle === TalleElegido);
       
            if(existeProductoEnCarrito){
            //¿ya existe este producto en el carrito?

                carrito = carrito.map(el => { 
                
                if(Number(el.id) === Number(productoFinal.id) && el.talle === TalleElegido){
                        //si existe un producto con la misma id y mismo talle, primero vuelvo a copiar todo el carrito en el carrito
                        //y despues al objeto que existe(id guales) le suma en cantidad
                    return {
                        ...el,
                        cantidad: el.cantidad + 1,
                        
                    };
                }else {
                    //cuando esta copiando a todo el carrito, deja igual a los objetos que no coincide
                return el;
                }
            });
        } else {
            carrito.push({ ...productoFinal,talle: TalleElegido, cantidad: 1 });
                //Agrega un nuevo producto al carrito en caso de que ese producto no estaba, con una nueva propiedad "cantidad:1"
            document.getElementById("BarraInfoCarrito").style.display = "flex"; //se hace visible el boton "limpiar carrito"
        }   document.getElementById("titulo-carrito").style.display = "flex"; //se hace visible el el titulo "carrito"
        
        localStorage.setItem("carrito", JSON.stringify(carrito));//le pongo la bolsa para mandralo a frizeer
        localStorage.setItem("contadorcantidad", JSON.stringify(contadorcantidad));
        localStorage.setItem("preciocarrito",JSON.stringify(preciocarrito)); 
        
        Swal.fire({
        title: "Exito!",
        text: "Producto cargado al carrito",
        icon: "success"
        });

        verCarrito();    
};

 
function crearCardCarrito(producto) {
    const card = document.createElement("div");
    card.className = "ProductoCard";

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = "NOIMG";
    img.className = "ImagenProducto";

    const nombre = document.createElement("h2");
    nombre.innerText = producto.nombre;

    const precio = document.createElement("p");
    precio.innerText = `$${producto.precio}`;


    const talle = document.createElement("p");
    talle.innerText = `Talle: ${producto.talle.toUpperCase()}`;

    const cantidad = document.createElement("p");
    cantidad.innerText = `Cantidad: ${producto.cantidad}`;

    const total = document.createElement("p");
    total.innerText = `Total: $${producto.precio * producto.cantidad}`;

    const btnEliminarProducto= document.createElement("button");
    btnEliminarProducto.innerText="Eliminar producto";
    btnEliminarProducto.className="btn-generico";
    btnEliminarProducto.onclick=()=>EliminarProducto(card, producto);
    
    card.appendChild(img);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(talle);
    card.appendChild(cantidad);
    card.appendChild(total);
    card.appendChild(btnEliminarProducto);

    document.getElementById("carrito").appendChild(card);
};



function EliminarProducto(card, producto){

    if(producto.cantidad === 1){
        console.log(carrito);
        carrito = carrito.filter(el => !(el.id === producto.id && el.talle === producto.talle));      
        //creo un nuevo carrito sin ese elemento id ni talle
    }  
    else{
        producto.cantidad=producto.cantidad-1;
    }
   
    contadorcantidad--;
    preciocarrito=preciocarrito-producto.precio;
    ActualizarBarraCarrito();

    localStorage.setItem("contadorcantidad", JSON.stringify(contadorcantidad));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("preciocarrito", JSON.stringify(preciocarrito));
    
    console.log(contadorcantidad);
    console.log(preciocarrito);

    verCarrito();
};

function verCarrito() {
    document.getElementById("carrito").innerHTML = "";
    carrito.forEach(el => crearCardCarrito(el));
    
    if (carrito.length ===0){
        document.getElementById("BarraInfoCarrito").style.display = "none";//se hace invisible el boton "Limpiar carrito"
        document.getElementById("titulo-carrito").style.display = "none";//se hace invisible el titulo " carrito"
    }    
};

function VaciarCarrito(){
   
    carrito=[];
    contadorcantidad=0;
    preciocarrito=0;
    ActualizarBarraCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("contadorcantidad", JSON.stringify(contadorcantidad));
    localStorage.setItem("preciocarrito", JSON.stringify(preciocarrito));
     
    document.getElementById("carrito").innerHTML="";//vacía visualmente el HTML.

        //despues de ejecutarse todo el vaciamiento, se invisibiliza el titutulo y boton
    document.getElementById("BarraInfoCarrito").style.display = "none";//se hace invisible el boton "Limpiar carrito"
    document.getElementById("titulo-carrito").style.display = "none";//se hace invisible el titulo " carrito"

};

    //Boton vaciar carrito
const btnLimpiarCarrito = document.getElementById("btn-limpiar");
btnLimpiarCarrito.onclick=()=>VaciarCarrito();



/**********************************************
    TODO RELACIONADO A FILTRAR PRODUCTOS
***********************************************/
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
    const categoriaIngresada = document.getElementById("inputfiltro").value;

    // Ejecuta el filtro
    FiltrarProductos(categoriaIngresada);
});



/********************************
    FUNCION BUSCAR PRODUCTOS
*********************************/
function BuscarProductos(palabra){
   
    // Limpia el container, por si habia algo, se pudo haber ejecutado anteriormente
    document.getElementById("container").innerHTML = "";

   // PASAR A MINUSCULA
    palabra = palabra.toLowerCase();


    // si esta vacio el placeholedr, muestra todo el catalogo
    if(palabra === ""){

        productos.forEach(producto => {CrearCard(producto);});
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



