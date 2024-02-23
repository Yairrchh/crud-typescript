// Yair => [Y,a,i,r] => string => string[]
// [Y,a,i,r] => Yair => string[] => string


export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;



// export function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input)) {
//     return input.join(''); //string
//   } else{
//     return input.split(''); //string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)) {
    return input.join(''); //string
  } else if(typeof input === 'string'){
    return input.split(''); //string[]
  } else if(typeof input === 'number'){
    return true; //boolean
  }
}

const rtaArray = parseStr('Yair');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Yair =>', rtaArray)

const rtaString = parseStr(['Y','a','i','r']);
rtaString.toLowerCase();

// if(typeof rtaString === 'string') {
//   rtaString.toLocaleLowerCase();
// }
console.log('rtaString',"['Y','a','i','r'] =>", rtaString)


const rtaBoolean = parseStr(12);
console.log(rtaBoolean)
