export const obtenerImg = (texto: string): Array<string> => {
  //extraer las imgs del html
    const extraccion = texto.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
    if (!!extraccion){
        return extraccion.map(x => x.replace(/.*src="([^"]*)".*/, '$1'));
    } return[];
};
