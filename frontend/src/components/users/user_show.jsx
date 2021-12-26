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
    console.log(this.props)
    this.props.requestUser(this.props.userId)
    .then(() => {
      // debugger
      this.props.requestUserThreads(this.props.userId)
    .then(
      () => this.props.requestUserSwipes(this.props.userId)
      .then(
        () => this.props.requestUserExchanges(this.props.userId)
        .then(() => this.setState({ loaded: true }))
        )
    )
    })
  }

  render() {
    if (!this.props.user || Object.keys(this.props.user).length === 0 || !this.state.loaded) 
      return 'loading'
    // console.log(this.state)

   
    let userLink;
    let otherUserContentCC;
    let otherUserContentPC;
    let otherUserStatsCC;
    let otherUserStatsPC;
    if (this.props.type === 'current') {

      userLink = (
        <div className="usershow-nav-left">
            <div className="usershow-nav-links">
              <HashLink smooth to={`/profile#CC`}>
                <div className="link">Open Threads</div>
              </HashLink>
              <HashLink smooth to={`/profile#CS`}>
                <div className="link">Current Swipes</div>
              </HashLink>
              <HashLink smooth to={`/profile#PC`}>
                <div className="link">Closed Threads</div>
              </HashLink>
              <HashLink smooth to={`/profile#PS`}>
                <div className="link">Closed Deals</div>
              </HashLink>
            </div>
          </div>
      )

     
      otherUserContentCC = (
        <div id="CC" className="usershow-column">
          <ThreadIndexCurrentContainer user={this.props.user} updateCount={this.updateCount} type={this.props.type}/>
        </div>
      )
      otherUserContentPC = (
        <div id="PC" className="usershow-column">
          <ThreadIndexPastContainer user={this.props.user} updateCount={this.updateCount} type={this.props.type}/>
        </div>
      )
      otherUserStatsCC = (
        <div>Open Threads: <span>{this.state.CC}</span></div>
      )
      otherUserStatsPC = (
        <div>Closed Threads: <span>{this.state.PC}</span></div>
      )
    }
    else {

      userLink = (
        <div className="usershow-nav-left">
            <div className="usershow-nav-links">
              <HashLink smooth to={`/user/${this.props.userId}#CS`}>
                <div className="link">Current Swipes</div>
              </HashLink>
              <HashLink smooth to={`/user/${this.props.userId}#PS`}>
                <div className="link">Closed Deals</div>
              </HashLink>
            </div>
          </div>
      )

    }
    return (
      <div className="usershow-main">
        <div className="usershow-wrapper">

         {userLink}

          <div className="usershow-content-middle">
            {otherUserContentCC}
            <div id="CS" className="usershow-column">
              <SwipeUserIndexContainer user={this.props.user} updateCount={this.updateCount} />
            </div>
              {otherUserContentPC}
            <div id="PS" className="usershow-column">
              <ExchangeIndexContainer user={this.props.user} updateCount={this.updateCount} />
            </div>
          </div>

          <div className="usershow-info-right">
            <div className="usershow-info-wrapper">
              <div className="usershow-info-title">
                {this.props.user.username}'s
                Homepage
              </div>
              
              <div className="usershow-info-content">
                {otherUserStatsCC}
                <div>Current Swipes: <span>{this.state.CS}</span></div>
                {otherUserStatsPC}
                <div>Closed Deals: <span>{this.state.PS}</span></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;