import React from 'react'

const ExchangeIndexItem = ({exchange}) => (
  <div>
    <h1>SellPost: {exchange.sellPost}</h1>
    <h1>Buyer: {exchange.buyer}</h1>
    <h1>Closed Price: {exchange.closePrice}</h1>
  </div>
)

export default ExchangeIndexItem;