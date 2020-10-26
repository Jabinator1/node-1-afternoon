const express = require("express")
const { getProducts, getProduct } = require("./controller")
const app = express()
const port = 4040


//get just returns a value, doesn't change anything

//this get request gets the whole object
app.get("/api/products", getProducts)

//this get request gets a specific object 
app.get("/api/products/:id", getProduct)

app.listen(port, () => console.log(`Server running on port ${port}`))