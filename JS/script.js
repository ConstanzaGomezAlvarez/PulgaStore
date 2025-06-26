function mostrarFechaHora() {
  const contenedor = document.getElementById("fecha-hora");
  if (contenedor) {
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString();
    contenedor.textContent = "Fecha y hora actual: " + fechaHora;
  }
}

window.addEventListener("DOMContentLoaded", mostrarFechaHora);

mostrarFechaHora(); 

const imagenes = [
  {
    src: 'https://estudioambiente.com/wp-content/uploads/2023/09/1728-1080x675.webp',
    thumb: 'https://estudioambiente.com/wp-content/uploads/2023/09/1728-1080x675.webp',
    alt: 'Paisaje 1'
  },
  {
    src: 'https://image.made-in-china.com/251f0j00AfERTdKGqQVP/made-in-china.jpg',
    thumb: 'https://image.made-in-china.com/251f0j00AfERTdKGqQVP/made-in-china.jpg',
    alt: 'Paisaje 2'
  },
  {
    src: 'https://i0.wp.com/pakchile.cl/wp-content/uploads/2021/03/shutterstock_688596658.jpg?resize=1024%2C683&ssl=1',
    thumb: 'https://i0.wp.com/pakchile.cl/wp-content/uploads/2021/03/shutterstock_688596658.jpg?resize=1024%2C683&ssl=1',
    alt: 'Paisaje 3'
  }
];

$(document).ready(function () {
  const contenedor = $('#galeria');

  imagenes.forEach((img, index) => {
    const item = `
      <a data-fancybox="galeria" href="${img.src}">
        <img src="${img.thumb}" width="400" alt="${img.alt}" style="margin:10px">
      </a>
    `;
    contenedor.append(item);
  });});
