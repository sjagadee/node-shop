const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'You have reached orders resource through GET'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'You have reached orders resource through POST',
        order: order
    });

});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if(id === 'amzing'){
        res.status(200).json({
            message: 'You have reached orders is spl',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'here is your order'
        });
    }
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Your order is deleted'
    });
});

module.exports = router;