const usersRoute = require('express').Router();
const userRoute = require('../user/user.routes');
const productRoute = require('../user/product.routes');
const cartRoutes = require('../../routes/user/cart.routes');
const orderRoutes = require('../user/order.routes');
const favoriteRoutes = require('../user/favorite.routes');
const reviewRoutes = require('../user/review.routes');


usersRoute.use('/users', userRoute);
usersRoute.use('/product', productRoute);
usersRoute.use('/cart', cartRoutes);
usersRoute.use('/order', orderRoutes);
usersRoute.use('/favorite', favoriteRoutes);
usersRoute.use('/review', reviewRoutes);

module.exports = usersRoute;