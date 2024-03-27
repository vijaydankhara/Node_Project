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

    // Get All Cart
    async getAllCart(query) {
        try {
            let find = [
                { $match: { isDelete: false}}
            ];
            let result = await Cart.aggregate(find);
            return result;
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

    // Updare Many Carts
    async updateMany (user, body) {
        try {
            return await Cart.updateMany({ user: user}, { $set: body}, { new: true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}