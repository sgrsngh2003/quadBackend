require('dotenv').config()
const express = require('express')
const ticketRouter = require('./routes/ticket')


const cors = require('cors')

const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors())

app.use('/api/v1/ticket', ticketRouter)


app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is Successfully Running, and App is listening on port  ${PORT}`)
    }
    else{
        console.log("error in port")
    }
})