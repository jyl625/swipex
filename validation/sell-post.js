const Validator = require('validator');
const validDate = require('./valid-date');
const validPrice = require('./valid-price');

module.exports = function validateSellPost(data) {
  let errors = {};

  if (Validator.isEmpty(data.askPrice)) {
    errors.askPrice = 'Ask Price is required';
  }

  if (Validator.isEmpty(data.cafeId)) {
    errors.cafeId = 'Cafeteria is required';
  }

  if (Validator.isEmpty(data.expiration)) {
    errors.expiration = 'Expiration Date is required';
  }

  if (!validDate(data.expiration)) {
    errors.expiration = 'Not a valid expiration date';
  }

  if (!validPrice(data.askPrice)) {
    errors.askPrice = 'Not a valid ask price';
  }

  if (!validDate(data.meetingTime)) {
    errors.meetingTime = 'Not a valid meeting time';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};