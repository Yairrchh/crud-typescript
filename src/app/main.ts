import {faker} from '@faker-js/faker';

import { addProduct, findProducts, products, updateProduct } from "./products/product.services";

for (let index = 0; index < 50; index++) {

  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.commerce.productMaterial(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['summer', 'winter']),
    title: faker.commerce.productName(),
    updateAt: faker.date.recent(),
    stock: faker.number.int({min: 10, max: 100}),
    categoryId: faker.datatype.uuid(),
  })

}

const product = products[0]

updateProduct(product.id, {
  title: 'Nike',
  stock: 23,
})

findProducts({
  stock: 10,
  color: 'red',
  isNew: true,
  tags: ['as','as']
})

