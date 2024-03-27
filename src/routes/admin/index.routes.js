const adminsroutes = require('express').Router();
const userRoutes = require('./admin.routes');
const productRoutes = require('./product.routes');
const cartRoutes = require('../../routes/admin/cart.routes');

adminsroutes.use('/user-admin', userRoutes);
adminsroutes.use('/product',productRoutes);
adminsroutes.use('/cart',cartRoutes);


module.exports = adminsroutes;