function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number | string {
  if (typeof b === 'number') {
    return a + b; 
  } else {
    return a.toString() + b; //or throw an error
  }
}
const result1 = addSafe(5, 10); // Correctly outputs 15
const result2 = addSafe(5, '10'); // Correctly outputs "510"
console.log(result1,result2); 