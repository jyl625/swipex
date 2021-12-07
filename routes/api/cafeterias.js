const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Cafeteria = require('../../models/Cafeteria');

//get all cafeteria
router.get('/', (req, res) => {
  Cafeteria.find()
    .then(cafeteria => res.json(cafeteria))
    .catch(err => res.status(404).json({ nocafeteriafound: 'No cafeterias found' }));
});

//get sigle cafeteria
router.get('/:id', (req, res) => {
  Cafeteria.findById(req.params.id)
    .then(cafeteria => res.json(cafeteria))
    .catch(err =>
      res.status(404).json({ nocafeteriafound: 'No cafeteria found with that ID' })
    );
});

module.exports = router;