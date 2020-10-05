console.log(arguments)
console.log(require('module').wrapper)

//require my own module
const C = require('./test-module-1')

const calc1 = new C()
console.log(calc1.add(2,3))