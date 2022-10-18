const Router = require('express');
const brandController = require('../controllers/brandController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.get('/', brandController.getAll);
router.post('/', checkRoleMiddleware('ADMIN'), brandController.create);

module.exports = router;