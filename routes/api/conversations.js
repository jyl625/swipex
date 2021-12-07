const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Conversation = require("../../models/Conversation");

router.get("/test", (req, res) => res.json({ msg: "This is the conversations route" }));


// for testing, get all conversations
router.get('/', (req, res) => {
  Conversation.find()
    .populate("sellerId", "username")
    .populate("buyerId", "username")
    .exec()
    .then(conversations => res.json(conversations))
    .catch(err => res.status(404).json({ noconversationsfound: 'No conversations found' }));
});

//get conversation by conversationId
router.get('/:id', (req, res) => {
  Conversation.findById(req.params.id)
    .populate("sellerId", "username")
    .populate("buyerId", "username")
    .exec()
    .then(conversation => res.json(conversation))
    .catch(err =>
      res.status(404).json({ noconversationfound: 'No conversation found with that ID' })
    );
});


//get all conversations of specific user by user_id
router.get('/user/:user_id', (req, res) => {
  Conversation.find({"$or": [{ sellerId: req.params.user_id }, { buyerId: req.params.user_id }]})
    .populate("sellerId", "username")
    .populate("buyerId", "username")
    .exec()
    .then(conversations => res.json(conversations))
    .catch(err =>
      res.status(404).json({ noconversationsfound: 'No conversations found for that user' }
      )
    );
});


//create conversation
router.post('/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newConversation = new Conversation({
      sellerId: req.body.sellerId,
      buyerId: req.body.buyerId,
      comments: []
    });
    newConversation.save().then(conversation => res.json(conversation));
  }
);

//update conversation
// router.patch('/:id',
//   // passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     console.log(req.body)
//     let comment = req.body.comments[0];
//     Conversation.findByIdAndUpdate(req.params.id,
//       {"$push": { "comments": comment }})
//       .then(conversation => res.json(conversation))
//       .catch(err => res.status(404).json({ error: err }))
//   }
// );


//delete conversation by conversationId
router.delete('/:id', 
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Conversation.findOneAndDelete({_id: req.params.id})
      .then(() => res.json({ msg: "conversation deleted", deleted: Conversation}))
      .catch(err => res.status(404).json({error: err}))
  }
);


module.exports = router;