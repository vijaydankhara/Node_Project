const adminsroutes = require('express').Router();
const userRoutes = require('./admin.routes');
const productRoutes = require('../../routes/admin/product.routes');
const cartRoutes = require('../../routes/admin/cart.routes');
const reviewRoutes = require('../admin/review.routes');



adminsroutes.use('/user-admin', userRoutes);
adminsroutes.use('/product',productRoutes);
adminsroutes.use('/cart',cartRoutes);
adminsroutes.use('/review', reviewRoutes);

module.exports = adminsroutes;