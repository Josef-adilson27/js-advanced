let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Max" },
  { id: 1, name: "John" },
];

function uniqueItemsArray(array) { 
        
  const set = new Set();
  const arr = [];

  array.forEach((item) => set.add(JSON.stringify(item)));
  set.forEach((item) => arr.push(JSON.parse(item)));

  return arr;

}

console.log(uniqueItemsArray(users));
