export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,

  }
}

const p1 = createProduct(1,true,12);
console.log(p1);

const p2 = createProduct(1,true,);
console.log(p2);

const p3 = createProduct(1,false,0);
console.log(p3);

//  0 === false
// "" === false
// false === false

const num = 0; const valB = num ?? "default";
console.log(valB)

const myFunc = (a = 10) => {return a}

const res = myFunc()

console.log(res)
