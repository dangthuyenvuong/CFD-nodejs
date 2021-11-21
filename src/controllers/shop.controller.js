const ShopController = {
    products(req, res){
        res.json({
            products: true
        })
    },
    categories(req, res){
        res.json({
            categories: true
        })
    },
}

export default ShopController