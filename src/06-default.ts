// Definición de función
const createProduct = (
	id: string | number,
	isNew: boolean = true, // 👀
	stock: number = 10, // 👀
) => {
	return { // Retornamos un objeto con los valores pasados como parámetros.
		id,
		stock,
		isNew
	}
}

// Impresión en consola
console.log(
	createProduct(1)
) // { id: 1, stock: 10, isNew: true } `stock` y `isNew` por defecto

console.log(
	createProduct(2, false)
) // { id: 1, stock: 10, isNew: false } `stock` por defecto

console.log(
	createProduct(3, false, 50)
) // { id: 1, stock: 50, isNew: false }

const p4 = createProduct(1, true, 100)
console.log(p4)

const p5 = createProduct(5, true,)
console.log(p5)
