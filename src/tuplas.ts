const prices:(number | string )[] = [1,3,4,5,6, 'string']
prices.push('string')
prices.push(32);

type StringNumberBooleans = [string, ...number[], boolean];
let string

let user: StringNumberBooleans;

user = ['yairrchh', 25, false];
user = ['user', 25, 23,23,23,23,23,23,23,23,23,23,23,23,23,23,2,23, false];
// user = [];

// user = ['nico'];

// const [username, age] = user; destructuracion de la tupla

// console.log(username, age);

console.log(user[3]);
