const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/rating.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware.verifyToken, ratingController.addRating);
router.get('/product/:id', ratingController.getRatingsByProduct);
router.put('/:id', authMiddleware.verifyToken, ratingController.updateRating);
router.delete('/:id', authMiddleware.verifyToken, ratingController.deleteRating);

module.exports = router;
