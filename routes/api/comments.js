const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const Conversation = require("../../models/Conversation")

const validateCommentInput = require("../../validation/comments")

//testing get comments
router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ nocommentsfound: 'No comments found' }));
});

//get comment by commentId
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err =>
      res.status(404).json({ nocommentfound: 'No comment found with that ID' })
    );
});

//create comment
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      commentor: req.user.id,
      conversation: req.body.conversation,
      content: req.body.content,
    });
    
    newComment.save()
      .then(Conversation.findById(req.body.conversation)
        .then(conversation => {
          conversation.comments.push(newComment);
          conversation.save();
        })
      )
      .then(comment => res.json(comment));
  }
);




module.exports = router;