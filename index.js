const express = require('express')
const app = express()
const recipiesRouter = require('./routers/recipies')

app.use((req, res, next) => {
    const {method, path} = req
    console.log(
        `new request log ${method} ${path} at ${new Date().toISOString()}`
    )
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/recipies', recipiesRouter)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})