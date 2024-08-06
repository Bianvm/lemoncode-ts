export const personajesComicPromesa = fetch("http://localhost:3000/personajes");

personajesComicPromesa
  .then((response) => response.json())
  .then((personajes) => console.log(personajes));

export const obtenerPersonajes = async (nombrePersonaje: String = "") => {
  const url = nombrePersonaje
    ? `http://localhost:3000/personajes?nombre_like=${nombrePersonaje}`
    : "http://localhost:3000/personajes";
  return (await fetch(url)).json();
};
