type Sizes = 'S' | 'M' | 'L' | 'XL'
// type product = {
//   id: string | number,
//   title: string,
//   createAt: Date,
//   stock: number,
//   size?: Sizes,
// }

interface Product {
  id: string | number,
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes,
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Nike',
  createAt: new Date,
  stock: 4,
  size: 'S'
})

const addProduct = (data: Product) => {
  products.push(data);
}

addProduct({
  id: 1,
  title: 'Nike',
  createAt: new Date,
  stock: 4,
  size: 'S'
})

console.log(products)
