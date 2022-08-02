const {Device, DeviceInfo} = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {

            const {name, price, typeId, brandId, info} = req.body;
            
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
    
            const device = await Device.create({name, price, typeId, brandId, img: fileName});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    Device.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }
            return res.json(device);
        } catch(e) {
            return next(ApiError.badRequest(e.message));
        }


    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        limit = limit || 9;
        page = page || 1;
        let offset = limit * page - limit;
        let devices;

        if(brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})

        }

        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }

        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }

        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }

        return res.json(devices);

    }


    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findAll({where: {id}, include: [{model: DeviceInfo, as: 'info'}]});
        return res.json(device);

        
    }
}

module.exports = new DeviceController();