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
- *Procesamiento:* Validación del registro de usuario antes de realizar transacciones, actualización matemática del total e incremento o decremento de cantidades en el almacenamiento local.
- *Salida:* Renderizado actualizado del carrito en pantalla, sincronización automática con la barra de información final y notificaciones dinámicas.

## Interactividad 
- La interfaz de usuario responde inmediatamente a las acciones de búsqueda.
- Los estados del carrito y las alertas son coherentes y controlados mediante promesas.
- El diseño está optimizado visualmente mediante transiciones y efectos hover en botones y tarjetas de producto.

## Escalabilidad
- *Modularidad de funciones:* Las responsabilidades del programa se encuentran divididas en funciones específicas tales como `crearCard()`, `actualizarBarraCarrito()`, `eliminarProducto()` y `filtrarProductos()`.
- *Estructuras de datos consistentes:* Los productos del catálogo y los elementos del carrito conservan esquemas de propiedades definidos para evitar errores de referencia en el código.

## Legibilidad del Código
- Uso de nomenclatura semántica y comprensible tanto en variables como en funciones (`usuarioRegistrado`, `precioCarrito`, `vaciarCarrito`).
- Estructura lógica separada por bloques de comentarios descriptivos.
- Remoción de logs de prueba innecesarios para mantener un código limpio y profesional en producción.


-----

## Instrucciones de Uso
`1)` Abra el archivo index.html en un navegador web compatible.
`2)` Utilice el botón Registrarse en la esquina superior derecha para habilitar las opciones de compra del simulador.
`3)` Filtre los productos utilizando el buscador de palabras clave o el menú desplegable por categorías.
`4)` Seleccione el talle de su preferencia para el producto deseado.
`5)` Añada elementos al carrito para observar la actualización en tiempo real del costo acumulado, o realice una compra directa utilizando los botones de acción correspondientes.