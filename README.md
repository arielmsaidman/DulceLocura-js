
## Dulce Locura — Proyecto Final JavaScript
---
## Objetivos Generales
- Desarrollar un simulador interactivo funcional de comercio electrónico (E-commerce).
- Implementar lógica completa de negocio que abarque la visualización del catálogo de productos y la gestión dinámica de un carrito de compras.
- Utilizar herramientas de JavaScript moderno y librerías externas para mejorar la experiencia de usuario.

---

## Objetivos Específicos Cumplidos

## Utilización de datos remotos (Simulación con JSON)
- *data.json:* Contiene la base de datos de productos (**id, nombre, precio, categoría, talles disponibles y ruta de la imagen**).
- *carousel.json:* Contiene las rutas de las imágenes para la portada interactiva.
- *Variables globales:* `productos = []` y `imagenesCarousel = []` se utilizan para almacenar temporalmente la información obtenida desde los archivos JSON.
- *Lógica asíncrona:* Consumo de archivos locales mediante el uso de la API fetch() con gestión de promesas y estructuras try/catch.

## HTML interactivo generado dinámicamente
- *Catálogo:* Renderizado dinámicamente en el DOM a partir de los datos obtenidos del JSON.
- *Interfaz de usuario:* Creación de nodos utilizando `document.createElement()`  y `innerHTML()` para elementos como el selector de talles, botones de acción, tarjetas de catálogo y el panel del carrito.
- *Filtros activos:* Filtrado interactivo por categorías `(Trajes de baño, Conjuntos deportivos, Sweaters)` y buscador de texto en tiempo real.

## Herramientas clave de JavaScript aplicadas
- *Métodos de búsqueda y transformación de Arrays*: `forEach()`, `filter()`, `find()`, `map()`, `some()`.
- *LocalStorage:* conservar datos del carrito de compras `(productos, cantidades seleccionadas y precio total acumulado)`.
- *Event Listeners:* Control de eventos `(click, input)` para reaccionar a las interacciones de filtrado, búsqueda, agregar al carrito e ir al carrito.
- *Manipulación dinámica de estilos:* Visualización condicional de la barra de resumen y el título del carrito según el estado del mismo.

## Integración de librerías externas
- *Toastify.js:* Avisos visuales rápidos y no invasivos cada vez que se agrega o elimina un producto de la lista del carrito. Ubicación: Dentro del archivo main.js, en las funciones `agregarAlCarrito` y `eliminarProducto`.
- *SweetAlert2:* Flujos interactivos complejos, incluyendo el registro simulado del usuario, y las confirmaciones/advertencias durante el proceso de pago, junto con los espacios para incluir los datos personales. Ubicación: En las funciones de registro de usuario `registrarse`, compras directas `realizarCompraDirecta` y facturación del carrito `comprarCarritoBtn`.

---
## Criterios de Evaluación Cubiertos

## Funcionalidad y Flujo de Trabajo
- *Entrada:* Captura de datos del usuario mediante el buscador integrado, filtros de selección de categorías y selección de talles en cada producto.
- *Procesamiento:* Valida el registro del usuario antes de realizar transacciones, actualiza los contadores del  precio total e incremento o decremento de cantidades en el almacenamiento local.
- *Salida:* Renderizado actualizado del carrito en pantalla, sincronización automática con la barra de información final y notificaciones dinámicas.

## Interactividad 
- La interfaz de usuario responde inmediatamente a las acciones de búsqueda.
- Los estados del carrito y las alertas son coherentes y controlados mediante promesas.
- El diseño está optimizado visualmente mediante transiciones y efectos hover en botones y tarjetas de producto.

## Escalabilidad
- *Modularidad de funciones:* el programa se encuentra dividido entre las siguientes respectivas funciones:
    `registrarse()`: permite registrar al usuario por medio de una ventana emergente, solicitando su nombre y dando la bienvenida
    `cargarCarousel()`: carga las imagenes al carousel desde dede el archivo "carousel.json", las muestra de forma dinamica, y activa el desplazamiento cada 3 segundos de cada una.
    `cambiarImagen()`: esta funcion se utiliza para avanzar a la siguiente imagen del carousel. Cuando llega a la última imagen, vuelve a la primera.
    `crearCard()`: crea y muestra la tarjeta del producto de forma dinamica Incluye nombre, imagen, precio, talles, y los botones de agregar al carrito y comprar 
    `realizarCompraDirecta()`: se accede a esta funcion cuando se hace click en el boton de comprar de la carta de un articulo. Valida si el usuario esta registrado, y si lo está, solicita direccion de envio y confirma la operacion al finalizar.
    `comprarCarritoBtn()`: se accede a esta funcion cuando se hace click en el boton de comprar carrito. Valida si el usuario esta registrado, y si lo está, solicita direccion de envio, confirma la operacion al finalizar, y luego vacia el carrito
    `DireccionDelEnvio`: se encarga de solicitar y devolver los datos de envío del cliente mediante una ventana emergente
    `actualizarBarraCarrito()`: muestra la cantidad de productos y el precio total del carrito; si hay algun articulo muestra el titulo del carrito y el boton de ir al carrito
    `agregarAlCarrito`: agrega un producto al carrito, actualiza la cantidad total de articulos y el precio total, tambien guarda la informacion en el Local Storage.
    `crearCardCarrito`: crea y muestra las tarjeta de los productos del carrito de forma dinamica. Incluye nombre, imagen, precio, talle, cantidad y el boton de quitar una unidad.
    `eliminarProducto()`: permite eliminar una unidad de un producto del carrito. Si el artículo tiene una sola unidad, se elimina completamente; de lo contrario, se reduce su cantidad. Luego actualiza el precio total, la cantidad de productos, el almacenamiento local y la interfaz del carrito. Además, muestra una notificación visual confirmando la eliminación.
    `verCarrito()`: muestra el contenido actual del carrito, generando dinámicamente una tarjeta para cada producto agregado.
    `vaciarCarrito()`: vacía completamente el carrito de compras, restablece sus valores en cero y actualiza tanto el almacenamiento local como la interfaz de usuario.
    `filtrarProductos()`: filtra los productos del catálogo según la categoría seleccionada y actualiza la interfaz mostrando únicamente los productos que coinciden la categoria.
    `buscarProductos()`: permite buscar productos en el catálogo mediante palabras clave, filtrando por nombre o categoría y actualizando los resultados mostrados en la interfaz.


## Legibilidad del Código
- Uso de nomenclatura semántica y comprensible tanto en variables como en funciones (`usuarioRegistrado`, `precioCarrito`, `vaciarCarrito`, etc).
- Estructura lógica separada por bloques de comentarios descriptivos.
- Remoción de logs de prueba innecesarios para mantener un código limpio(console.log()).


-----

## Instrucciones de Uso
`1)` Abra el archivo index.html en un navegador web compatible.
`2)` Utilice el botón Registrarse en la esquina superior derecha para habilitar las opciones de compra del simulador.
`3)` Filtre los productos utilizando el buscador de palabras clave o el menú desplegable por categorías.
`4)` Seleccione el talle de su preferencia para el producto deseado.
`5)` Añada elementos al carrito para observar la actualización en tiempo real del costo acumulado, o realice una compra directa utilizando los botones de acción correspondientes.