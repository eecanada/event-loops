const fs = require('fs')
const crypto = require('crypto')

const start = Date.now()

setTimeout(()=>{
  console.log('timer 1 finished')
},0)

setImmediate(()=>{
  console.log('Immediate 1 finished')
},0)

fs.readFile('test-file.txt', ()=>{
  console.log('testFile')

  setTimeout(()=>{
    console.log('timer 2 finished')
  },0)

  setTimeout(()=>{
    console.log('timer 3 finished')
  },0)
  
  setImmediate(()=>{
    console.log('immediate 1 finished')
  })
  
  crypto.pbkdf2('password', 'salt', 100000,1024,'sha512', ()=>{
    console.log(Date.now() - start, "Password ecrypted")
  })
  crypto.pbkdf2('password', 'salt', 100000,1024,'sha512', ()=>{
    console.log(Date.now() - start, "Password ecrypted")
  })
  crypto.pbkdf2('password', 'salt', 100000,1024,'sha512', ()=>{
    console.log(Date.now() - start, "Password ecrypted")
  })
  crypto.pbkdf2('password', 'salt', 100000,1024,'sha512', ()=>{
    console.log(Date.now() - start, "Password ecrypted")
  })

})

console.log('hello from top level code')
