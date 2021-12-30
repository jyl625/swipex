const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Exchange = require("../../models/Exchange");
const SellPost = require("../../models/Sellpost");

//testing get all exchanges
router.get('/', (req, res) => {
  Exchange.find()
    .sort({ date: -1 })
    .then(exchanges => res.json(exchanges))
    .catch(err => res.status(404).json({ noexchangesfound: 'No exchanges found' }));
});

//get exchange by exchangeId
router.get('/:id', (req, res) => {
  Exchange.findById(req.params.id)
    .then(exchange => res.json(exchange))
    .catch(err =>
      res.status(404).json({ noexchangefound: 'No exchange found with that ID' })
    );
});

//get exchange by userId
router.get('/user/:user_id', (req, res) => {
  Exchange.find({"$or": [{ seller: req.params.user_id }, { buyer: req.params.user_id }]})
    .populate("seller", "username")
    .populate("buyer", "username")  
    .then(exchanges => res.json(exchanges))
    .catch(err =>
      res.status(404).json({ noexchangesfound: 'No exchanges found'})    
    )
})

//get exchange by cafeId
router.get('/cafe/:cafe_id', (req, res) => {
  Exchange.findByCafeId(req.params.cafe_id)
    .then(exchanges => res.json(exchanges))
      .catch(err =>
        res.status(404).json({ noexchangesfound: 'No exchanges found' })
      )
})


//create exchange
router.post('/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // validate price input?

    const newExchange = new Exchange({
      closePrice: req.body.closePrice,
      sellPost: req.body.sellPost,
      seller: req.body.seller,
      buyer: req.body.buyer,
      conversationId: req.body.conversationId
    });

    newExchange.save()
      .then(SellPost.findById(req.body.sellPost)
        .then(sellPost => {
          // conversation.timeUpdated = new Date();
          sellPost.open = false;
          sellPost.save();
        })
      )
      .then(exchange => res.json(exchange));
  }
);














module.exports = router;