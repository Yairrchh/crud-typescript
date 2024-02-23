const withoutEnd = () => {
  while (true) {
    console.log('Never stop learning')
  }
}

const fail = (message: string) => {
  throw new Error(message)
}


const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'is a string';
  } else if (Array.isArray(input)) {
    return 'is an Array'
  }

  return fail("did not match")
}

console.log(example('Hello'))
console.log(example([1,3,4,5]))
console.log(example(333)); // stops
console.log(example('Hello after to fail'))

