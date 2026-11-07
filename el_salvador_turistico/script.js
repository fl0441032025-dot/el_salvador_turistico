// Controla la apertura y el cierre del menú en teléfonos.
const menuBoton = document.getElementById("menuBoton");
const navegacion = document.getElementById("navegacion");

menuBoton.addEventListener("click", () => {
  // La clase activa permite mostrar u ocultar los enlaces.
  const menuAbierto = navegacion.classList.toggle("activa");

  // Actualiza el estado del botón para mejorar la accesibilidad.
  menuBoton.setAttribute("aria-expanded", menuAbierto);
});

// Cierra el menú después de seleccionar una sección.
navegacion.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navegacion.classList.remove("activa");
    menuBoton.setAttribute("aria-expanded", "false");
  });
});

// Coloca el año actual automáticamente en el pie de página.
document.getElementById("anio").textContent = new Date().getFullYear();
