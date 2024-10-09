const array = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
];

const uniqueArray = Array.from(new Set(array.map((obj) => obj.id)));

let result = uniqueArray.map((originalObjectId) => {
  return array.find(obj=>obj.id==originalObjectId)
});


console.log(result);