import { Personaje } from "./model";
import { obtenerPersonajes } from "./motor";


export const buscarPersonajes = async () => {
    const inputElement = document.getElementsByClassName("input-filtrado")[0];
    if (
      !!inputElement &&
      inputElement instanceof HTMLInputElement &&
      !!containerElement
    ) {
      containerElement.innerHTML = '';
      const personajes: Personaje[] = await obtenerPersonajes(inputElement.value);
      personajes.forEach((element) => {
        containerElement.insertAdjacentHTML(
          "beforeend",
          construirHTMLPersonaje(element)
        );
      });
      console.log(personajes);
    }
  };
export const containerElement = document.getElementById("grid-personajes"); //pillamos el id del contenedor de personajes
export const construirHTMLPersonaje = (personaje: Personaje) => {
  //construimos el componenente HTML de esos personajes
  return `
          <div class="personaje">
          <img class="personaje_img"
            src="http://localhost:3000/${personaje.imagen}"
            alt="">
          <div class="personaje_footer">
            <span class="texto_footer">
              <span class="descripcion_footer">Nombre: </span> ${
                personaje.nombre
              }
            </span>
            <span class="texto_footer">
              <span class="descripcion_footer">Especialidad: </span>${
                personaje.especialidad
              }
            </span>
            <span class="texto_footer">
              <span class="descripcion_footer">Habilidades: </span> ${personaje.habilidades.toString()}
            </span>
          </div>
        </div>
  `;
};


document
  .getElementById("boton-filtrar")
  ?.addEventListener("click", buscarPersonajes);