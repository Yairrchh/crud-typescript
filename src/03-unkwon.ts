let anyVar: any;

anyVar = true;
anyVar = 2;
anyVar = [];
anyVar = {};
anyVar = 'hello';
anyVar = undefined;
anyVar = null;

let isNew = anyVar;
anyVar.doSomething();
anyVar.toUppercase();

let unknowVar: unknown;

unknowVar = true;
unknowVar = 2;
unknowVar = [];
unknowVar = {};
unknowVar = 'hello';
unknowVar = undefined;
unknowVar = null;

//unknowVar.doSomething();



if( typeof unknowVar == 'string') {
  unknowVar.toUpperCase();
}

if( typeof unknowVar == 'boolean') {
  let isNew2:boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}






