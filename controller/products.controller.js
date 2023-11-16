const axios = require('axios');
const utility = require('../core/utility');

exports.fetchProducts = async (req, res) => {
    try {
        const productData = await axios.get(utility.productUrl);

        res.status(200).json({
            "success": true,
            "message": "Products found",
            "data": {
                username: req.userData.username,
                products: productData.data,
            },
        })
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Internal server error",
        })
    }
};
