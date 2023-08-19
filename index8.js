const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
// Part a
const phoneBookDEF = new Map();

// Part b
const keysValuesDEF = [
  ['David', '0466778899'],
  ['Ella', '0488990011'],
  ['Frank', '0400112233']
];
phoneBookDEF.set('David', '0466778899');
phoneBookDEF.set('Ella', '0488990011');
phoneBookDEF.set('Frank', '0400112233');

// Part c
phoneBookABC.set('Caroline', '0499887766');

// Part d
function printPhoneBook(contacts) {
  contacts.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

// Part e
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// Part f
console.log("Full list of names in the combined phone book:");
printPhoneBook(phoneBook);






