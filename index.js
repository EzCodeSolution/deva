require('dotenv').config()
const http=require('http')
const app=require('./App')
const port=process.env.PORT
const server=http.createServer(app)
server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("server runing on port3000")
})