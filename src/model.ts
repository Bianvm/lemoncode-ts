export const TOTAL_SCORE_TEXT = "Puntuación total: ";
export const BACK_IMAGE = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
let puntuacion = 0;
export const setPuntuacion = (nuevaPuntuacion:number) =>{
    puntuacion = nuevaPuntuacion; 
}
export const getPuntuacion =() =>{
    return puntuacion;
}