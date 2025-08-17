const projects = [
  {
    title: "Sistema de Gestión de Tareas",
    description: "Aplicación web para crear, asignar y dar seguimiento a tareas.",
    image: "img/project1.png",
    link: "https://ximeavipa1.github.io/Sistema-de-Gesti-n-de-Tareas/"
  },
  {
    title: "API REST con Spring Boot",
    description: "API para la gestión de productos con CRUD completo.",
    image: "img/project2.png",
    link: "https://github.com/ximeavipa1/Sistema-de-Gesti-n-de-Tareas"
  },
  {
    title: "Constructora WEB (Frontend)",
    description: "Aplicación web responsiva que muestra el portafolio de proyectos, servicios y datos de contacto de una empresa constructora. Incluye galería, secciones informativas y formulario funcional conectado con EmailJS.",
    image: "img/constructora.png",
    link: "https://ximeavipa1.github.io/WEB-constructora-sin-backend/"
  },
  {
    title: "Book API (Backend Spring Boot)",
    description: "API REST para la gestión de libros, desarrollada con Spring Boot y MySQL, implementando CRUD completo y buenas prácticas de arquitectura.",
    image: "img/bookapi.png",
    link: "https://github.com/ximeavipa1/Book_API"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(proj => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";
  col.innerHTML = `
    <div class="card h-100">
      <img src="${proj.image}" class="card-img-top" alt="${proj.title}">
      <div class="card-body">
        <h5 class="card-title">${proj.title}</h5>
        <p class="card-text">${proj.description}</p>
        <a href="${proj.link}" target="_blank" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  projectList.appendChild(col);

  
});
