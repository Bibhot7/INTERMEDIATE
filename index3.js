const animals = ['Tiger', 'Giraffe'];

// a) Add 2 new values to the end
animals.push('Elephant', 'Lion');
console.log("After adding to the end:", animals);

// b) Add 2 new values to the beginning
animals.unshift('Monkey', 'Zebra');
console.log("After adding to the beginning:", animals);

// c) Sort the values alphabetically
animals.sort();
console.log("After sorting:", animals);

// d) Write a function replaceMiddleAnimal(newValue)
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Kangaroo');
console.log("After replacing middle animal:", animals);

// e) Write a function findMatchingAnimals(beginsWith)
function findMatchingAnimals(beginsWith) {
  const matchingAnimals = animals.filter(animal =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
  return matchingAnimals;
}

const matchingAnimalsResult = findMatchingAnimals('t');
console.log("Matching animals:", matchingAnimalsResult);