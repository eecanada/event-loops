const EventEmitter = require('events')
const http = require('http')

class Sales extends EventEmitter {
  constructor(){
    super()
  }
}

const myEmitter = new EventEmitter()

myEmitter.on('newSale', ()=>{
  console.log('There was a sale')
})

myEmitter.on('newSale', ()=>{
  console.log('customer name: eder')
})

myEmitter.on('newSale', (stock)=>{
  console.log(`there are now ${stock} items left `)
})



myEmitter.emit('newSale', 9)


/////////////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer()

server.on('request', (req,res)=>{
console.log('request received')
res.end('request')
})


server.on('request', (req,res)=>{
  console.log('another request 🤨')
  })


server.on('close', (req,res)=>{
  console.log('request closed')
  res.end('request')
  })

  server.listen(8000, '127.0.0.1', ()=>{
    console.log('waiting for request')
  })