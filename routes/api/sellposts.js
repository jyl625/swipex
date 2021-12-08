const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateSellPost = require('../../validation/sell-post');
const SellPost = require('../../models/Sellpost')

//get all sell posts

router.get('/', (req, res) => {
  SellPost.find()
    .then(sellposts => res.json(sellposts))
    .catch(err => res.status(404).json({ nosellpostfound: 'No sell post found' }));
});

//get single sell post
router.get('/:id', (req, res) => {
  SellPost.findById(req.params.id)
    .then(sellpost => res.json(sellpost))
    .catch(err =>
      res.status(404).json({ nosellpostfound: 'No sell post found' })
    );
});

router.get('/user/:user_id', (req, res) => {
  SellPost.find({ seller: req.params.user_id })
    .then(sellposts => res.json(sellposts))
    .catch(err =>
      res.status(404).json({ nosellpostfound: 'No sell post found' }
      )
    );
});

//create new sell post form
router.post("/", 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  const { errors, isValid } = validateSellPost(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newSellpost = new SellPost({
    seller: req.body.seller,
    askPrice: req.body.askPrice,
    expiration: req.body.expiration,
    cafeId: req.body.cafeId,
    open: req.body.open,
    timeCreated: req.body.timeCreated
  });

    newSellpost.save().then(sellpost => res.json(sellpost));
});

//Edit an exsisting sell post form

router.patch('/:id', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    SellPost.findById(req.params.id, (err, sellpost) => {
      if (req.body._id) {
        delete req.body._id;
      }
      for (let b in req.body) {
        sellpost[b] = req.body[b];
      }
      sellpost.save();
      res.json(sellpost);
    })
  })
  

//delete an exsisting sell post form
router.delete('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  SellPost.deleteOne({_id: req.params.id}).then(
    ()=> {
      res.status(200).json({
        message: 'deleted successfully'
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
})

module.exports = router;