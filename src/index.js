const express = require('express')
require('./db/mongoose')
const path= require('path')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const studentRouter = require('./routers/student')
const app = express()
const port = process.env.PORT 


app.use(express.json())
app.use(userRouter)
app.use(studentRouter)
app.use(taskRouter)

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
console.log(publicDirectoryPath)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
}) 