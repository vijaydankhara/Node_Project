const favoriteModel = require('../model/favorite.model');
const Favorites = require('../model/favorite.model');
module.exports = class FavoriteServices{

    //  Add To Favorite
    async addToFavorite(body) {
        try {
            return await Favorites.create(body);
        } catch (error) {
            console.log(error);
            return error.message; 
        }
    };

    // get all favorite
    async getAllFavorite(query) {
        try {
            let find = [
                { $match: { isDelete: false }}
            ];
            let result = await Favorites.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // get favorite
    async getFavorite(body) {
        try {
            return await Favorites.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    async getFavoriteById(id) {
        try {
            return await Favorites.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    async updateFavorite(id, body) {
        try {
            return await Favorites.findByIdAndUpdate(id, { $set: body}, { new: true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    } 
}