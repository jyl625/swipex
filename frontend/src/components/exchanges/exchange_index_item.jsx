import React from 'react'

const ExchangeIndexItem = ({exchange}) => {
  return (
    <div className="messages">
      {/* <div><span className="usershow-index-item-grey">SellPost:</span> {exchange.sellPost}</div> */}
      <div><span className="usershow-index-item-grey">Buyer:</span> {exchange.buyer}</div>
      <div><span className="usershow-index-item-grey">Closed at:</span> ${Number(exchange.closePrice).toFixed(2)}</div>
      <div><span className="usershow-index-item-grey">Last updated at:</span> {exchange.updatedAt}</div>
    </div>
  )
}

export default ExchangeIndexItem;