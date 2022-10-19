const router = require('express').Router();
const authorization = require('../middlewares/authorization');
const reflectionController = require('../controllers/reflectionController');
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');

router.post('/api/v1/user/register', userController.register);
router.post('/api/v1/user/login', userController.login);

router.use(authentication);
router.post(
  '/api/v1/user/reflections',
  reflectionController.createOneReflection
);
router.get('/api/v1/user/reflections', reflectionController.getAllReflections);

router.use('/api/v1/user/reflections/:id', authorization);
router.put(
  '/api/v1/user/reflections/:id',
  reflectionController.updateOneReflectionById
);
router.delete(
  '/api/v1/user/reflections/:id',
  reflectionController.deleteOneReflectionById
);

module.exports = router;
