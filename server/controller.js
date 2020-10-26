const products = require("../products.json")

module.exports = {
    getProducts: (req, res) => {
        if (req.query.price) {
            const items = products.find(product => product.price >= parseInt(req.query.price))
            return res.status(200).send(items)
        }
        res.status(200).send(products)
    },

    getProduct: (req, res) => {
        const item = products.find(product => product.id === parseInt(req.params.id));
        !item ? res.status(500).send(console.log("Item not in list")) : res.status(200).send(item)
    },
}