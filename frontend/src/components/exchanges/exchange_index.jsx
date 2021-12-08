import React from 'react';
import ExchangeIndexItem from './exchange_index_item';

class ExchangeIndex extends React.Component {
  componentDidMount() {
    this.props.requestUserExchanges(this.props.user.id);
  }

  render() {
    return (
      <div>
        <h1>Past Sales Posts from {this.props.user.username}</h1>
        {
          this.props.exchanges.map(exchange => (
            <ExchangeIndexItem exchange={exchange}/>
          ))
        }
      </div>
    )
  }
}

export default ExchangeIndex;