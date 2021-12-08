const Validator = require('validator');
const validText = require("./valid-text");


module.exports = function validateCommentInput(data) {
  const errors = {};

  data.content = validText(data.content) ? data.content: "";
  
  if (Validator.isEmpty(data.content)){
    errors.text = "Content is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};