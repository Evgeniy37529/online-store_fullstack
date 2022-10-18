const Router = require('express');
const deviceController = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.post('/', deviceController.create);

module.exports = router;