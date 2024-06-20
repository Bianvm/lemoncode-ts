const backCard = document.getElementById("lion-image");
const backCard2 = document.getElementById("owl-image");
const LION_IMAGE =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
const OWL_IMAGE =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";

const img2 = backCard2?.getElementsByClassName("card__image2").item(0);
const img = backCard?.getElementsByClassName("card__image1").item(0);

function selectAnimalImg() {
  if (
    backCard !== null &&
    backCard !== undefined &&
    backCard instanceof HTMLElement
  ) {
    if (img !== null && img !== undefined && img instanceof HTMLImageElement) {
      img.src = img.src === LION_IMAGE ? "" : LION_IMAGE;

    }
  }
}
function selectAnimalImg2() {
  if (
    backCard2 !== null &&
    backCard2 !== undefined &&
    backCard2 instanceof HTMLElement
  ) {
    if (
      img2 !== null &&
      img2 !== undefined &&
      img2 instanceof HTMLImageElement
    ) {
      img2.src = img2.src === OWL_IMAGE ? "" : OWL_IMAGE;

    }
  }
}


backCard?.addEventListener("click", selectAnimalImg);
backCard2?.addEventListener("click", selectAnimalImg2);
