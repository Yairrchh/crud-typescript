// Yair => [Y,a,i,r] => string => string[]
// [Y,a,i,r] => Yair => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); //string
  } else{
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Yair');
console.log('rtaArray', 'Yair =>', rtaArray)

const rtaString = parseStr(['Y','a','i','r']);
console.log('rtaString',"['Y','a','i','r'] =>", rtaString)
