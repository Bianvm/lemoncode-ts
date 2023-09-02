//Interfaz grupo musical//

interface MusicalBand {
    name: string;
    ageFoundation:number;
    active:boolean;
    musicalGenre: string;
};

const beatles: MusicalBand={
    name: "The Beatles",
    ageFoundation:1960,
    active:false,
    musicalGenre: "Pop Rock",
};
const queen: MusicalBand={
    name: "Queen",
    ageFoundation:1970,
    active:false,
    musicalGenre: "Rock",
};
const acdc: MusicalBand={
    name: "ACDC",
    ageFoundation:1973,
    active:true,
    musicalGenre: "Hard Rock",
};
const ludwigVanBeethoven: MusicalBand={
    name: "Ludwig van Beethoven",
    ageFoundation:1770,
    active:false,
    musicalGenre: "Classical music",
};
const theRollingStones: MusicalBand={
    name: "The Rolling Stones",
    ageFoundation:1962,
    active:true,
    musicalGenre: "Rock",
};
console.log(`%c${beatles.name}`,"font-size:24px; background:green; font-weidth:bold;" ,`/ ${beatles.ageFoundation} `+`/activo: ${beatles.active}`+`/ ${beatles.musicalGenre}`);
console.log(`%c${queen.name}`,"font-size:24px; background:green; font-weidth:bold;" ,`/ ${queen.ageFoundation} `+`/activo: ${queen.active}`+`/ ${queen.musicalGenre}`);
console.log(`%c${acdc.name}`,"font-size:24px; background:green; font-weidth:bold;" ,`/ ${acdc.ageFoundation} `+`/activo: ${acdc.active}`+`/ ${acdc.musicalGenre}`);
console.log(`%c${ludwigVanBeethoven.name}`,"font-size:24px; background:green; font-weidth:bold;" ,`/ ${ludwigVanBeethoven.ageFoundation} `+`/activo: ${ludwigVanBeethoven.active}`+`/ ${ludwigVanBeethoven.musicalGenre}`);
console.log(`%c${theRollingStones.name}`,"font-size:24px; background:green; font-weidth:bold;" ,`/ ${theRollingStones.ageFoundation} `+`/activo: ${theRollingStones.active}`+`/ ${theRollingStones.musicalGenre}`);