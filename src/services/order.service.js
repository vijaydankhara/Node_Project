const Order = require('../model/order.model');
module.exports = class OrderServices{

    // add order
    async addToOrder (body) {
        try {
            return await Order.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

   
    // get order
    async getOrder (body) {
        try {
            return await Order.findOne(body);
            // return await Order.findOne(body).populate('user').populate('items');
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    async getOrderById (id) {
        try {
            return await Order.findById(id);
            // return await Order.findById(id).populate('user').populate('items');
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    async updateOrder (id, body){
        try {
            return await Order.findByIdAndUpdate(id, { $set: body} , { new : true }).populate('user').populate('items');
        } catch (error) {
            console.log(error);
            return error.message;  
        }
    };


    //  get all order

    async getAllOrder(query) {
        try {
            let find = [
                { $match: { isDelete: false } },

            ];

            let result = await Order.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    


    //  async getAllOrder (body) {
    //     try {
    //         return await Order.find(body).populate('user').populate('items');
    //     } catch (error) {
    //         console.log(error);
    //         return error.message;            
    //     }
    // }

}