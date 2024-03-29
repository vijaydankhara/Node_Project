const OrderServices = require('../../services/order.service');
const orderServiece = new OrderServices();
const CartServices = require('../../services/cart.service');
const cartService = new CartServices();


// Add New Order
exports.addNewOrder = async(req, res) => {
    try {
        let cartItems = await cartService.getAllCarts({ user: req.user._id, isDelete: false});
        if (!cartItems) {
            res.status(404).json({ message: `Cart Not Found.......`});
        }
        // console.log(cartItems);
        let orderItems = await cartItems.map(item => ({
            product: item.cartItem._id,
            quantity: item.quantity,
            price: item.cartItem.price
        }));
        // console.log(orderItems);
        let totalPrice = orderItems.reduce((total, item) => total + (item.price * item.quantity), 100);
        // console.log(totalPrice);
        let newOrder = await orderServiece.addToOrder({
            user: req.user._id,
            items: orderItems,
            totalAmount: totalPrice
        });
        await cartService.updateMany({ user: req.user._id}, {$set: { isDelete: true}});
        res.status(201).json({ message: `Order Place Successfuly`})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
};


// get all order
exports.getAllOrders = async (req, res) => {
    try {
        let orders = await orderServiece.getAllOrders({ user: req.user._id,  isDelete: false });
        console.log(orders);
        if (!orders) {
            res.status(404).json({ message: `Orders Not Found..Plase Try Again...`});
        }
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
};



// get order
exports.getOrder = async (req, res) => {
    try {
        let order = await orderServiece.getOrderById({_id: req.query.orderId, isDelete: false});
        console.log(order);
        if (!order) {
            res.status(404).json({ message: `Orders Not Found....`});
        }
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
};


// delete order
exports.deleteOrder = async (req, res) => {
    try {
        let order = await orderServiece.getOrder({_id: req.query.orderId});
        console.log(order);
        if (!order) {
            res.status(404).json({ message: `Orders Not Found.....`});
        }
        order = await orderServiece.updateOrder(req.body.orderId, {isDelete: true })
        res.status(200).json({order, message: `Your Order Deleted Successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
};