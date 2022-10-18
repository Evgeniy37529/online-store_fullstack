const { Basket, BasketDevice, Device } = require('../models/models');

class basketController {
    async createBasket(req, res) {
        //const idBasketFromParams = req.params;
        const {basketId, deviceId } = req.body;
        //const {id} = await Basket.findOne({where: {userId: idBasketFromParams.id}});
        const basketUser = await BasketDevice.create({basketId, deviceId})
        return res.json(basketUser);
    }

    async getBasket(req, res) {
        const idBasketFromParams = req.params;
        const {id} = await Basket.findOne({where: {userId: idBasketFromParams.id}});
        const basketUser = await BasketDevice.findAndCountAll({where: {basketId: id}, include: [{model: Device}]});
        return res.json(basketUser);
    }

    async getOneItemBasket(req, res) {
        const {basketId, deviceId} = req.params;
        try {
            const baskeItem = await BasketDevice.findOne({where: {basketId, deviceId}});
            return res.json(baskeItem);
        } catch (err) {
            return res.json(false);
        }

    }

    async delete(req, res) {
        const {id} = req.params;
        await BasketDevice.destroy({where: {id}})
        return res.json(`${id} удалён`);
    }
}

module.exports = new basketController();