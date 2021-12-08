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
    .populate("seller", "username")
    .populate("buyer", "username")
    .populate("comments", "commentor content timeCreated")
    .exec()
    .then(conversations => res.json(conversations))
    .catch(err => res.status(404).json({ noconversationsfound: 'No conversations found' }));
});

//get conversation by conversationId
router.get('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Conversation.findById(req.params.id)
    .populate("seller", "username")
    .populate("buyer", "username")
    .populate("comments"
    )
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
    .exec()
    .then(conversations => res.json(conversations))
    .catch(err =>
      res.status(404).json({ noconversationsfound: 'No conversations found for that user' }
      )
    );
});


//create conversation
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newConversation = new Conversation({
      sellpost: req.body.sellpost,
      seller: req.body.seller,
      buyer: req.body.buyer,
      comments: []
    });
    newConversation.save().then(conversation => res.json(conversation));
  }
);

// update conversation
// router.patch('/:id',
//   // passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     console.log(req)
//     let comment = req.body.comments[0];
//     Conversation.findByIdAndUpdate(req.params.id,
//       {"$push": { "comments": comment }})
//       .then(conversation => res.json(conversation))
//       .catch(err => res.status(404).json({ error: err }))
//   }
// );


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