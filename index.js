const array = [
  8,
  "55",
  [
    2,
    "Hello World",
    {
      a: 2,
      b: 5,
    },
    false,
  ],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];
//   const [a , b ,[c, d,{a:e ,b:f},g ] ,{ arr: [h, i, j , [k , thirtyThree]] , test:m , obj:{d:moha , last:[o,p,q]}}] = array;
//   const [ ,  ,  ,{ arr:[ , , ,[ ,thirtyThree]] , obj:{d: moha , }}] = array;

const [number, string, nestedArray, nestedObject] = array;
const { arr, test, obj } = nestedObject;
const [boolean, one, notANumber, newArray] = arr;
const [two, thirtyThree] = newArray;
const { d: moha, last } = obj;

console.log(thirtyThree);
console.log(moha);

const second = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];

function hasDuplicates(arr) {
  const flattened = arr.flat(Infinity);
  const set = new Set(flattened);
  return set.size !== flattened.length;
}

console.log(hasDuplicates(second));
