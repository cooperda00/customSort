// Take an array of objects, each object will have properties with a numerical value
// Return the sorted array, sorted by the criteria property passed as second arguement
// ** I couldn't remember if I was asked to sort ascending or descending, so I added this as a thrid arguement

//More Readable
function customSort(table, criteria, order) {
  const sorted = table.sort((objA, objB) => {
    if (order === "ASC") {
      return objA[criteria] - objB[criteria];
    } else if (order === "DESC") {
      return objB[criteria] - objA[criteria];
    }
  });

  return sorted;
}

//ONE LINER
// const customSort = (table, criteria, order) =>
//   table.sort((objA, objB) =>
//     order === "ASC"
//       ? objA[criteria] - objB[criteria]
//       : objB[criteria] - objA[criteria]
//   );

customSort([{ id: 10 }, { id: 5 }], "id", "ASC");
customSort([{ houseNo: 30 }, { houseNo: 5 }], "houseNo", "DESC");
customSort(
  [
    { age: 10, weight: 100 },
    { age: 5, weight: 250 },
    { age: 2550, weight: 111 },
  ],
  "age",
  "ASC"
);
