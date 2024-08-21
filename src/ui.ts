import { obtenerImg } from "./motor";

const botonBuscar = document.getElementById("button-search");
const textAreaBuscar = document.getElementById("search");
const listaImgsContainer = document.getElementById("list-imgs");
const clickEnBotonBuscar = () => {
  if (!!textAreaBuscar && textAreaBuscar instanceof HTMLTextAreaElement) {
    const imgsObtenidas = obtenerImg(textAreaBuscar.value);
    if (!!listaImgsContainer) {
      listaImgsContainer.innerHTML = "";
      imgsObtenidas.forEach((image) => {
        listaImgsContainer.insertAdjacentHTML(
          "beforeend",
          mostrarMensajePantalla(image)
        );
      });
    }
  }
};
const mostrarMensajePantalla = (image: string) => {
  return `
<span>${image}</span>
`;
};
botonBuscar?.addEventListener("click", clickEnBotonBuscar);
