import React from 'react';
import ExchangeIndexItem from './exchange_index_item';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class ExchangeIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = ({
    //   countUpdated: false
    // })
  }
  componentDidMount() {

  }

  listExchange() {

    if (this.props.exchanges.length === 0)
    return 'No exchanges yet'
    // if (!this.state.countUpdated) {
    //   // this.props.updateCount('PS', this.props.exchanges.length)
    //   this.setState({
    //     countUpdated: true
    //   })
    // }
    return this.props.exchanges.map(exchange => {
      return <ExchangeIndexItem exchange={exchange} user={this.props.user} key={exchange._id}/>
    })
  }

  render() {
    // if (this.props.exchanges.length === 0)
    //   return 'loading exchanges'
    
    return (
      <div className="usershow-item-container">
        <div className="usershow-item-title">Closed Deals</div>
        {/* <div className="usershow-item-title">Past Sales from {this.props.user.username}</div> */}
        <div className="usershow-item">
          {
           this.listExchange()
          }
        </div>
      </div>
    )
  }
}

export default ExchangeIndex;