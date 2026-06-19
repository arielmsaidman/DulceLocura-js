/****************************************************************
          ESTADO GLOBAL Y CONFIGURACIÓN INICIAL
*****************************************************************/
let usuarioRegistrado = false;
const productos = [];
const imagenesCarousel = [];
let indiceCarousel = 0;

// Cargar datos iniciales de LocalStorage o inicializar por defecto
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contadorCantidad = JSON.parse(localStorage.getItem("contadorcantidad")) || 0;
let precioCarrito = JSON.parse(localStorage.getItem("preciocarrito")) || 0;

/****************************************************************
          CREACIÓN DE LA ESTRUCTURA HTML (DOM)
*****************************************************************/
const main = document.querySelector("main");

// 1. Botón de Login en el Header
const divLogin = document.getElementById("login");
const loginBtn = document.createElement("button");
const loginImg = document.createElement("img");

loginImg.src = "imagenes/MenuPrincipal/login.svg";
loginImg.width = 30;

loginBtn.id = "Logearse";
loginBtn.className = "btn-generico";
loginBtn.appendChild(loginImg);
loginBtn.appendChild(document.createTextNode(" Registrarse"));
loginBtn.onclick = registrarse;
divLogin.appendChild(loginBtn)

// 2. Portada y Carousel
const portada = document.createElement("section");
portada.className = "portada";

const carousel = document.createElement("div");
carousel.className = "carousel";

const deslizamiento = document.createElement("div");
deslizamiento.className = "deslizamiento";

carousel.appendChild(deslizamiento);
portada.appendChild(carousel);
main.appendChild(portada);

// 3. Menú de Búsqueda y Filtro
const filtrarYBuscar = document.createElement("div");
filtrarYBuscar.id = "MenuDeFiltrarYBuscar";
filtrarYBuscar.className = "MenuDeFiltrarYBuscar";

const selectYBoton = document.createElement("div");
selectYBoton.className = "JuntarSelectYBoton";

const tituloCategoria = document.createElement("h3");
tituloCategoria.className = "ElegirCategoria";
tituloCategoria.innerText = "Categoría: ";

const inputFiltro = document.createElement("select");
inputFiltro.id = "inputfiltro";
inputFiltro.className = "input-filtro";

// Generación dinámica de opciones del filtro
const opcionesFiltro = [
    { value: "todos", text: "Todos" },
    { value: "trajes de baño", text: "Trajes de baño" },
    { value: "conjuntos deportivos", text: "Conjuntos deportivos" },
    { value: "sweaters", text: "Sweaters" }
];

opcionesFiltro.forEach(opc => {
    const opt = document.createElement("option");
    opt.value = opc.value;
    opt.innerText = opc.text;
    inputFiltro.appendChild(opt);
});

const btnFiltrar = document.createElement("button");
btnFiltrar.id = "btn-filtrar";
btnFiltrar.className = "btn-filtrar";
btnFiltrar.innerText = "Filtrar";

selectYBoton.appendChild(tituloCategoria);
selectYBoton.appendChild(inputFiltro);
selectYBoton.appendChild(btnFiltrar);
filtrarYBuscar.appendChild(selectYBoton);

// Buscador (Lupa e Input)
const lupaYBuscar = document.createElement("div");
lupaYBuscar.className = "LupaYBuscar";

const imgLupa = document.createElement("img");
imgLupa.src = "imagenes/MenuPrincipal/lupa.svg";
imgLupa.className = "Lupa";
imgLupa.id = "idLupa";
imgLupa.alt = "NO LUPA";

const inputBuscar = document.createElement("input");
inputBuscar.type = "text";
inputBuscar.id = "input-buscar";
inputBuscar.placeholder = "Nombre producto";

lupaYBuscar.appendChild(imgLupa);
lupaYBuscar.appendChild(inputBuscar);
filtrarYBuscar.appendChild(lupaYBuscar);
main.appendChild(filtrarYBuscar);

// 4. Catálogo de Productos y boton de ir al carrito
const tituloYBoton= document.createElement("div");
tituloYBoton.className="titulo-y-boton"

const tituloCatalogo = document.createElement("h2");
tituloCatalogo.className = "nuestro-catalogo";
tituloCatalogo.innerText = "Nuestro catálogo";

const btnIrCarrito =document.createElement("button");
btnIrCarrito.className="btn-generico";
btnIrCarrito.innerText="Ir al carrito";
tituloYBoton.id="IrAlCarrito";
btnIrCarrito.style.display = "none";

tituloYBoton.appendChild(tituloCatalogo);
tituloYBoton.appendChild(btnIrCarrito);
main.appendChild(tituloYBoton);

const container = document.createElement("div");
container.id = "container";
container.className = "container";
main.appendChild(container);

// 5. Estructura del Carrito
const tituloCarrito = document.createElement("h2");
tituloCarrito.id = "titulo-carrito";
tituloCarrito.className = "titulo-carrito";
tituloCarrito.innerText = "Carrito";
tituloCarrito.style

main.appendChild(tituloCarrito);

const carritoHTML = document.createElement("div");
carritoHTML.id = "carrito";
carritoHTML.className = "container";
main.appendChild(carritoHTML);

// 6. Barra de Información del Carrito
const barraCarrito = document.createElement("div");
barraCarrito.id = "BarraInfoCarrito";
barraCarrito.className = "BarraInfoCarrito";
barraCarrito.style.display = "none";

const precioTotalTexto = document.createElement("h3");
precioTotalTexto.id = "PrecioFinal";
precioTotalTexto.className = "TextoBarraCarrito";

const cantProductosTexto = document.createElement("h3");
cantProductosTexto.id = "CantidadTotalProductos";
cantProductosTexto.className = "TextoBarraCarrito";

const btnComprarCarrito = document.createElement("button");
btnComprarCarrito.id = "btn-comprar";
btnComprarCarrito.className = "btn-generico";
btnComprarCarrito.innerText = "Comprar carrito";
btnComprarCarrito.onclick = comprarCarritoBtn;

const btnLimpiarCarrito = document.createElement("button");
btnLimpiarCarrito.id = "btn-limpiar";
btnLimpiarCarrito.className = "btn-generico";
btnLimpiarCarrito.innerText = "Limpiar carrito";
btnLimpiarCarrito.onclick = vaciarCarrito;

barraCarrito.appendChild(precioTotalTexto);
barraCarrito.appendChild(cantProductosTexto);
barraCarrito.appendChild(btnComprarCarrito);
barraCarrito.appendChild(btnLimpiarCarrito);
main.appendChild(barraCarrito);

/****************************************************************
          LÓGICA DE USUARIOS Y REGISTRO
*****************************************************************/
function registrarse() {
    Swal.fire({
        title: "Ingrese su nombre",
        input: "text",
        inputPlaceholder: "Nombre",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            usuarioRegistrado = true;
            const nombre = result.value;

            Swal.fire({
                title: `¡Hola ${nombre}!`,
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            });

            const boton = document.getElementById("Logearse");
            boton.innerHTML = `Bienvenido, ${nombre}`;
            boton.onclick = null;
        }
    });
}


/****************************************************************
          CAROUSEL
*****************************************************************/
async function cargarCarousel() {
    try {
        const response = await fetch("./carousel.json");
        const data = await response.json();

        data.forEach(el => {
            imagenesCarousel.push(el.imagen);
        });

        imagenesCarousel.forEach(el => {
            const img = document.createElement("img");
            img.src = el;
            deslizamiento.appendChild(img);
        });

        setInterval(cambiarImagen, 3000);
    } catch (error) {
        console.error("Error al cargar el carousel:", error);
    }
}

function cambiarImagen() {
    indiceCarousel++;
    if (indiceCarousel >= imagenesCarousel.length) {
        indiceCarousel = 0;
    }
    deslizamiento.style.transform = `translateX(-${indiceCarousel * 100}%)`;
}

// Inicializar carousel
cargarCarousel();


/****************************************************************
          CARGA DE PRODUCTOS (CATÁLOGO)
*****************************************************************/
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        container.innerHTML = "";
        data.forEach(el => {
            crearCard(el);
            productos.push(el);
        });
        // Si hay elementos previos en el carrito guardados en LocalStorage, los dibuja al cargar la página
        if (carrito.length > 0) {
            verCarrito();
            actualizarBarraCarrito();
        }
    })
    .catch(err => console.error("Error al cargar productos:", err));

function crearCard(producto) {
    const card = document.createElement("div");
    card.className = "ProductoCard";

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = "Imagen del producto";
    imagen.className = "ImagenProducto";

    const nombre = document.createElement("h2");
    nombre.innerText = producto.nombre;

    const precio = document.createElement("p");
    precio.innerText = `$${producto.precio}`;

    const talleYComprar = document.createElement("div");
    talleYComprar.className = "TalleYComprar";

    const selectTalle = document.createElement("select");
    selectTalle.className = "SeleccionarTalle";

    producto.talles.forEach(talle => {
        const opcion = document.createElement("option");
        opcion.value = talle;
        opcion.innerText = talle.toUpperCase();
        selectTalle.appendChild(opcion);
    });

    const botonComprarDirecto = document.createElement("button");
    botonComprarDirecto.className = "btn-generico BotonComprar";
    botonComprarDirecto.innerText = "Comprar";
    botonComprarDirecto.onclick = () => realizarCompraDirecta(producto.nombre, producto.categoria, selectTalle.value);

    talleYComprar.appendChild(selectTalle);
    talleYComprar.appendChild(botonComprarDirecto);

    const divBotonAgregar = document.createElement("div");
    divBotonAgregar.className = "BotonAgregarCarrito";

    const botonAgregar = document.createElement("button");
    botonAgregar.className = "btn-generico";
    botonAgregar.innerText = "Agregar al carrito";
    botonAgregar.onclick = () => agregarAlCarrito(producto.id, selectTalle.value, producto.precio);

    divBotonAgregar.appendChild(botonAgregar);

    card.appendChild(imagen);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(talleYComprar);
    card.appendChild(divBotonAgregar);

    container.appendChild(card);
}


/****************************************************************
          LÓGICA DE COMPRAS
*****************************************************************/
async function realizarCompraDirecta(nombreProducto, categoriaProducto, talleElegido) {

    if (usuarioRegistrado === false) {
        Swal.fire({
            title: "Debes registrarte primero",
            text: "Para realizar una compra necesitas registrarte.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    const datosEnvio = await DireccionDelEnvio();

    if (datosEnvio === false) return;

    Swal.fire({
        title: "¡Compra realizada con éxito!",
        text: `${nombreProducto} - Talle: ${talleElegido.toUpperCase()}`,
        icon: "success"
    });
}

async function comprarCarritoBtn() {

    if (usuarioRegistrado === false) {
        Swal.fire({
            title: "Debes registrarte primero",
            text: "Para realizar una compra necesitas registrarte.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    const datosEnvio = await DireccionDelEnvio();

    if (datosEnvio === false) return;

    Swal.fire({
        title: "¡Compra realizada con éxito!",
        text: `Precio final: $${precioCarrito} - Cantidad de productos: ${contadorCantidad}`,
        icon: "success"
    });

    vaciarCarrito();
}

async function DireccionDelEnvio() {

    const result = await Swal.fire({
        title: "Datos de envío",
        html: `
            <input id="nombre" class="swal2-input" placeholder="Nombre">
            <input id="direccion" class="swal2-input" placeholder="Dirección">
            <input id="ciudad" class="swal2-input" placeholder="Ciudad">
            <input id="telefono" class="swal2-input" placeholder="Teléfono">
        `,
        showCancelButton: true,
        confirmButtonText: "Confirmar pedido",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            return {
                nombre: document.getElementById("nombre").value,
                direccion: document.getElementById("direccion").value,
                ciudad: document.getElementById("ciudad").value,
                telefono: document.getElementById("telefono").value
            };
        }
    });

    if (result.isConfirmed === false) return null;

    return result.value;
}

/****************************************************************
          GESTIÓN DEL CARRITO
*****************************************************************/

const IrAlCarritobtn = document.getElementById("IrAlCarrito");
    IrAlCarritobtn.onclick = () => {
    document.getElementById("titulo-carrito").scrollIntoView({
        behavior: "smooth"
        });
        
};

function actualizarBarraCarrito() {
    precioTotalTexto.textContent = `Precio final: $${precioCarrito}`;
    cantProductosTexto.textContent = `Cantidad de productos: ${contadorCantidad}`;

    if (carrito.length > 0) {
        barraCarrito.style.display = "flex";
        tituloCarrito.style.display = "flex";
        btnIrCarrito.style.display = "block";
        
    } else {
        barraCarrito.style.display = "none";
        tituloCarrito.style.display = "none";
        btnIrCarrito.style.display = "none";
    }
}

function agregarAlCarrito(idElegido, talleElegido, precioProducto) {
    contadorCantidad++;
    precioCarrito += precioProducto;

    const productoFinal = productos.find(el => el.id === idElegido);
    if (!productoFinal) return;

    const existeProductoEnCarrito = carrito.some(el => el.id === productoFinal.id && el.talle === talleElegido);

    if (existeProductoEnCarrito) {
        carrito = carrito.map(el => {
            if (Number(el.id) === Number(productoFinal.id) && el.talle === talleElegido) {
                return { ...el, cantidad: el.cantidad + 1 };
            }
            return el;
        });
    } else {
        carrito.push({ ...productoFinal, talle: talleElegido, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("contadorcantidad", JSON.stringify(contadorCantidad));
    localStorage.setItem("preciocarrito", JSON.stringify(precioCarrito));

    Toastify({
    text: "Producto agregado al carrito",
    duration: 3000, // 3 segundos
    close: true,    // botón para cerrar
    gravity: "bottom", // top o bottom
    position: "center", // left, center o right
    stopOnFocus: true,
    style: {
        background: "linear-gradient(to right, #ad8398, #aa9fac)",
    }
    }).showToast();

    actualizarBarraCarrito();
    verCarrito();
}

function crearCardCarrito(producto) {
    const card = document.createElement("div");
    card.className = "ProductoCard";

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = "Imagen del producto en carrito";
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

    const btnEliminarProducto = document.createElement("button");
    btnEliminarProducto.innerText = "Remover una unidad";
    btnEliminarProducto.className = "btn-generico";
    btnEliminarProducto.onclick = () => eliminarProducto(card, producto);
    btnEliminarProducto.style.width= "95%";

    card.appendChild(img);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(talle);
    card.appendChild(cantidad);
    card.appendChild(total);
    card.appendChild(btnEliminarProducto);

    carritoHTML.appendChild(card);
}

function eliminarProducto(card, producto) {
    if (producto.cantidad === 1) {
        carrito = carrito.filter(el => !(el.id === producto.id && el.talle === producto.talle));
    } else {
        producto.cantidad -= 1;
    }

    contadorCantidad--;
    precioCarrito -= producto.precio;
    actualizarBarraCarrito();

    Toastify({
    text: "Producto eliminado del carrito",
    duration: 3000, // 3 segundos
    close: true,    // botón para cerrar
    gravity: "bottom", // top o bottom
    position: "center", // left, center o right
    stopOnFocus: true,
    style: {
        background: "linear-gradient(to right, #ad8398, #aa9fac)",
    }
    }).showToast();

    localStorage.setItem("contadorcantidad", JSON.stringify(contadorCantidad));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("preciocarrito", JSON.stringify(precioCarrito));

    verCarrito();
}

function verCarrito() {
    carritoHTML.innerHTML = "";
    carrito.forEach(el => crearCardCarrito(el));

    if (carrito.length === 0) {
        barraCarrito.style.display = "none";
        tituloCarrito.style.display = "none";
    }
}

function vaciarCarrito() {
    carrito = [];
    contadorCantidad = 0;
    precioCarrito = 0;
    
    actualizarBarraCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("contadorcantidad", JSON.stringify(contadorCantidad));
    localStorage.setItem("preciocarrito", JSON.stringify(precioCarrito));

    carritoHTML.innerHTML = "";
}


/****************************************************************
          FILTROS Y BÚSQUEDA DE PRODUCTOS
*****************************************************************/
function filtrarProductos(categoria) {
    container.innerHTML = "";

    if (categoria === "todos") {
        productos.forEach(producto => crearCard(producto));
        return;
    }

    const productosFiltrados = productos.filter(
        producto => producto.categoria === categoria
    );

    productosFiltrados.forEach(producto => crearCard(producto));
}

// Evento del botón Filtrar
btnFiltrar.addEventListener("click", () => {
    const categoriaIngresada = inputFiltro.value;
    filtrarProductos(categoriaIngresada);
});

// Función de Búsqueda por palabra clave
function buscarProductos(palabra) {
    container.innerHTML = "";
    palabra = palabra.toLowerCase();

    if (palabra === "") {
        productos.forEach(producto => crearCard(producto));
        return;
    }

    const productosBuscados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(palabra) ||
        producto.categoria.toLowerCase().includes(palabra)
    );

    productosBuscados.forEach(producto => crearCard(producto));

    if (productosBuscados.length === 0) {
        const mensaje = document.createElement("h3");
        mensaje.innerText = "El producto no se encuentra en el catálogo";
        mensaje.style.gridColumn = "1 / -1";
        container.appendChild(mensaje);
    }
}

// Evento del input de Búsqueda
inputBuscar.addEventListener("input", () => {
    buscarProductos(inputBuscar.value);
});





