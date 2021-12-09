const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Conversation = require("../../models/Conversation");

router.get("/test", (req, res) => res.json({ msg: "This is the conversations route" }));


// for testing, get all conversations
router.get('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Conversation.find()
    .populate(
      { path: "sellPost",
        populate: { path: 'cafeId', model: "Cafeteria", select: "name location"}
      })
    .populate("seller", "username")
    .populate("buyer", "username")
    .populate("comments", "commentor content timeCreated")
    .sort({updatedAt: -1})
    .exec()
    .then(conversations => res.json(conversations))
    .catch(err => res.status(404).json({ noconversationsfound: 'No conversations found' }));
});

//get conversation by conversationId
router.get('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Conversation.findById(req.params.id)
    .populate(
      { path: "sellPost",
        populate: { path: 'cafeId', model: "Cafeteria", select: "name location" }
      })
    .populate("seller", "username")
    .populate("buyer", "username")
    .populate("comments", "commentor content timeCreated")
    .exec()
    .then(conversation => res.json(conversation))
    .catch(err =>
      res.status(404).json({ noconversationfound: 'No conversation found with that ID' })
    );
});


//get all conversations of specific user by user_id
router.get('/user/:user_id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Conversation.find({"$or": [{ seller: req.params.user_id }, { buyer: req.params.user_id }]})
    .populate("seller", "username")
    .populate("buyer", "username")
    .populate("comments", "timeCreated")
    .sort({ updatedAt: -1 })
    .exec()
    .then(conversations => res.json(conversations))
    .catch(err =>
      res.status(404).json({ noconversationsfound: 'No conversations found for that user' }
      )
    );
});

//
router.get('/user/:user_id/deal', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Conversation.find({
    $and: [
      { "$or": [{ seller: req.params.user_id }, { buyer: req.params.user_id }] },
      { deal: { $ne: null }}
    ]
  })
  .populate("seller", "username")
  .populate("buyer", "username")
  .populate("comments", "timeCreated")
  .sort({ updatedAt: -1 })
  .exec()
  .then(conversations => res.json(conversations))
  .catch(err =>
    res.status(404).json({ noconversationsfound: 'No such conversations found for that user' }
    )
  );
});

router.get('/user/:user_id/nodeal', (req, res) => {
  passport.authenticate('jwt', { session: false }),
    Conversation.find({
      $and: [
        { "$or": [{ seller: req.params.user_id }, { buyer: req.params.user_id }] },
        { deal: { $exists: false } }
      ]
    })
      .populate("seller", "username")
      .populate("buyer", "username")
      .populate("comments", "timeCreated")
      .sort({ updatedAt: -1 })
      .exec()
      .then(conversations => res.json(conversations))
      .catch(err =>
        res.status(404).json({ noconversationsfound: 'No such conversations found for that user' }
        )
      );
});

//create conversation
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    if (req.user.id !== req.body.seller && req.user.id !== req.body.buyer) {
      return res.status(400).json({invalidconversationparty: "Current user is neither the seller or buyer"})
    }
    
    const newConversation = new Conversation({
      sellPost: req.body.sellPost,
      seller: req.body.seller,
      buyer: req.body.buyer,
      timeUpdated: new Date(),
      comments: []
    });
    newConversation.save().then(conversation => res.json(conversation));
  }
);

// update conversation
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Conversation.findById(req.params.id, (err, conversation) => {
      for (let field in req.body) {
        conversation[field] = req.body[field];
      }
      conversation.save()
        .then(conversation => res.json(conversation));
    })
  }
);


//delete conversation by conversationId
router.delete('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Conversation.findOneAndDelete({_id: req.params.id})
      .then(() => res.json({ msg: "conversation deleted", deleted: Conversation}))
      .catch(err => res.status(404).json({error: err}))
  }
);


module.exports = router;