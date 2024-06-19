type Animal = "🦉" | "🐶" | "🦁" | "🐓" | "🐷" | "🐝";
let animalCards: Array<Animal> = [
  "🦉",
  "🐶",
  "🦁",
  "🐓",
  "🐷",
  "🐝",
  
];

function shuffleAnimalCardsArray<T>(animalCards: Array<T>) {
  for (let i = animalCards.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (1 + 1));
    [animalCards[a], animalCards[i]] = [animalCards[i], animalCards[a]];
  }
  return animalCards;
}

console.log(shuffleAnimalCardsArray(animalCards));
console.log(shuffleAnimalCardsArray(animalCards));
console.log(shuffleAnimalCardsArray(animalCards));
