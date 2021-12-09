const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Rating = require('../../models/Rating')

//get rating information from all exchanges
router.get('/', (req, res) => {
  Rating.find()
    .then(ratings => res.json(ratings))
    .catch(err => res.status(404).json({ noratingfound: 'No rating information found' }));
});

//get rating information for specific exchange
router.get('/:id', (req, res) => {
  Rating.findById(req.params.id)
    .then(rating => res.json(rating))
    .catch(err =>
      res.status(404).json({ noratingfound: 'No rating information found'  })
    );
});

//create new rating 
router.post("/",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // if (Rating.find({ exchangeId: req.body.exchangeId })) {
    //   return res.status(400).json({newratingerror: 'ratings have already been submitted'})}
    // else{
      const newRating = new Rating({
        exchangeId: req.body.exchangeId,
        sellerScore: req.body.sellerScore,
        buyerScore: req.body.buyerScore
      });
      newRating.save().then(rating => res.json(rating));
    // }
  });

//edit the rating form
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Rating.findById(req.params.id, (err, rating) => {
      if (req.body._id) {
        delete req.body._id;
      }
      for (let b in req.body) {
        rating[b] = req.body[b];
      }
      rating.save();
      res.json(rating);
    })
  })

module.exports = router;