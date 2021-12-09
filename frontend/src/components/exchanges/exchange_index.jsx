import React from 'react';
import ExchangeIndexItem from './exchange_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class ExchangeIndex extends React.Component {
  componentDidMount() {
    this.props.requestUserExchanges(this.props.user.id);
  }

  render() {
    if (this.props.exchanges.length === 0)
      return 'loading exchanges'
    return (
      <div className="usershow-item">
        <h1>Past Sales Posts from {this.props.user.username}</h1>
        <div className="exchange-index-container">
          {
            this.props.exchanges.map(exchange => (
              <ExchangeIndexItem exchange={exchange}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ExchangeIndex;