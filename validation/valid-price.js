const validPrice = price => {

  const regex_price = /^\d+(\.\d{0,2})?$/;
  const priceStr = price.toString();

  if (!regex_price.test(priceStr)) {
    return false;
  }
  return true
}

module.exports = validPrice;