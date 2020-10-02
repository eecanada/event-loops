//read file and send to client 

const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req,res)=>{
  // //solution 1 - will need to load entire file 
  // fs.readFile('./test-file.txt',(err, data)=>{
  //   if(err) console.log(err)
  //   res.end(data)
  // })

  // Solution 2 - streams, read chunk by chunk
  const readable = fs.createReadStream('./test-filee.txt')
  readable.on('data', (chunk)=>{
    res.write(chunk)
  })
  readable.on('end', ()=>{
    res.end()
  })
  readable.on('error', err =>{
    console.log(err)
    res.statusCode = 500
    res.end('file not found')
  })
}) 



server.listen(8000, '127.0.0.1', ()=>{
  console.log('waiting for request')
})
