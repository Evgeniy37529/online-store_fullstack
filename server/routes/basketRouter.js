const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');

router.get('/:id', basketController.getBasket);
router.post('/', basketController.createBasket);
router.delete('/:id', basketController.delete);
router.get('/:basketId/:deviceId', basketController.getOneItemBasket);

module.exports = router;