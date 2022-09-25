/* fetch('../images.json')
.then((respuesta) => respuesta.json())
.then((datos) => {
  const resultado1 = document.getElementById("galery");
  datos.forEach(valor => {
      //console.log(valor);
      let columna = document.createElement("div");
      columna.className = "col-3";
      let div_padre = document.createElement("div");
      div_padre.className = "card border border-2 border-secondary";
      let div_hijo1 = document.createElement("div");
      div_hijo1.className = "card-header bg-black text-white text-center p-1";
      let div_hijo2 = document.createElement("div");
      div_hijo2.className = "card-body text-center text-muted small";
      let parrafo = document.createElement("p");
      parrafo.innerText = valor.dataPicture;
      let imagen = document.createElement("img");
      imagen.src = "./portfolio/" + valor.picture;
      imagen.alt = valor.name;
      imagen.width = 300;
      imagen.className = "img-fluid";
      div_hijo2.appendChild(imagen);
      div_hijo1.innerHTML = `${valor.name}`;
      div_hijo2.appendChild(parrafo);
      div_padre.appendChild(div_hijo1);
      div_padre.appendChild(div_hijo2);
      columna.appendChild(div_padre);
      resultado1.appendChild(columna);
  });
}) */
const btnCierra = document.querySelector('#btn-cierra');
const imagenes = document.querySelectorAll('#galeria div img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
