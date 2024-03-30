const Cart = require('../../src/model/cart.model');
module.exports = class CartServices {
    // addToCart
    async addToCart(body) {
        try {
            return await Cart.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };



    // Get Single Cart
    async getCart(body) {
        try {
            return await Cart.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    async getCartById(id) {
        try {
            return await Cart.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Update Cart
    async updateCart(id, body) {
        try {
            return await Cart.findByIdAndUpdate(id, {$set: body}, {new: true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    async updateMany (user, body) {
        try {
            return await Cart.updateMany({ user: user}, { $set: body}, { new: true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getAllCart(query, user) {
        try {
            let userCarts = query.me && query.me === 'true' ? [
                {
                    $match: { user: user._id, isDelete: false }
                }
            ] : [];
            let find = [
                { $match: { isDelete: false } },
                ...userCarts,
                {
                    $lookup: {
                        from: "products",
                        localField: 'cartItem',
                        foreignField: '_id',
                        as: 'cartItem'
                    }
                },
                { $set: { "cartItem": { $first: "$cartItem" } } } 
            ];
            let result = await Cart.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

}