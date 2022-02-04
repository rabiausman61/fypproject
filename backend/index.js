const connectToMongo=require('./db');
const express = require('express');
connectToMongo();
const app = express()
const port = 5000

app.use(express.json())

//avaiable routes.
app.use('/api/auth',require ('./routes/auth'))
app.use('/api/adminauth',require ('./routes/adminauth'))

app.use('/api/category',require ('./routes/category'))

app.use('/api/product',require ('./routes/product'))

app.use('/api/cart',require ('./routes/cart'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
