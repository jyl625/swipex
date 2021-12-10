import React from 'react';
import { HashLink }  from 'react-router-hash-link';
import ThreadIndexCurrentContainer from '../threads/thread_index_current_container';
import ThreadIndexPastContainer from '../threads/thread_index_past_container';
import SwipeUserIndexContainer from '../swipes/swipe_user_index_container';
import ExchangeIndexContainer from '../exchanges/exchange_index_container';

import '../stylings/reset.css'
import '../stylings/user_show.css'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      PC: 0,
      CC: 0,
      PS: 0,
      CS: 0,
      loaded: false
    })
    
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(field, count) {
    this.setState({
      [field]: count
    })
  }

  componentDidMount() {
    // debugger
    this.props.requestUser(this.props.userId)
    .then(() => {
      // debugger
      this.props.requestUserThreads(this.props.userId)
    .then(() => this.props.requestUserSwipes(this.props.userId)
    .then(() => this.setState({ loaded: true }))
    )
    })
  }

  render() {
    if (!this.props.user || Object.keys(this.props.user).length === 0 || !this.state.loaded) 
      return 'loading'
    console.log(this.state)
    return (
      <div className="usershow-main">
        <div className="usershow-wrapper">
          <div className="usershow-info">
            <div className="usershow-info-title-wrapper">
              <div className="usershow-info-title">{this.props.user.username}'s Profile</div>
            </div>
            <div className="usershow-info-content">
                <div>Total Closed Conversations: {this.state.PC}</div>
                <div>Total Open Conversation: {this.state.CC}</div>
                <div>Total Closed Swipe Sales: {this.state.PS}</div>
                <div>Total Open Swipe Sales: {this.state.CS}</div>
            </div>
          </div>
          <HashLink smooth to={`/user/${this.props.user.id}#PC`}>
            <div className="link">Closed Conversation</div>
          </HashLink>
          <HashLink smooth to={`/user/${this.props.user.id}#CC`}>
            <div className="link">Open Convsersation</div>
          </HashLink>
          <HashLink smooth to={`/user/${this.props.user.id}#PS`}>
            <div className="link">Current Sellpost</div>
          </HashLink>
          <HashLink smooth to={`/user/${this.props.user.id}#CS`}>
            <div className="link">Closed Exchanges</div>
          </HashLink>
          <div id="CC" className="usershow-column">
            <ThreadIndexCurrentContainer user={this.props.user} updateCount={this.updateCount}/>
          </div>
          <div id="PC" className="usershow-column">
            <ThreadIndexPastContainer user={this.props.user} updateCount={this.updateCount}/>
          </div>
          <div id="PS" className="usershow-column">
            <SwipeUserIndexContainer user={this.props.user} updateCount={this.updateCount}/>
          </div>
          <div id="CS" className="usershow-column">
            <ExchangeIndexContainer user={this.props.user} updateCount={this.updateCount}/>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;