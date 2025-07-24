const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { addProduct, updateQuantity } = require('../controllers/productController');

router.post('/', auth, addProduct);
router.put('/:id/quantity', auth, updateQuantity);

module.exports = router;
