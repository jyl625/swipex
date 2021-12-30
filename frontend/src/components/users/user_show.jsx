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
      // PC: 0,
      // CC: 0,
      // PS: 0,
      // CS: 0,
      loaded: false
    })
    
    // this.updateCount = this.updateCount.bind(this);
  }

  // updateCount(field, count) {
  //   this.setState({
  //     [field]: count
  //   })
  // }

  componentDidMount() {
    // if (!this.state.loaded) {
    //   this.setState({ loaded: true })
      this.props.requestUser(this.props.userId).then(() => {
        this.props.requestUserThreads(this.props.userId).then(() => {
          this.props.requestUserExchanges(this.props.userId).then(() => {
            this.props.requestUserSwipes(this.props.userId)
          })
        }) 
      })
    // }
  }

  userShowInfo() {
    // debugger
    // console.log(this.props.match)

    
    if (this.props.match.path === "/profile") {

      if (!Array.isArray(this.props.userSwipes) || !Array.isArray(this.props.userExchanges)) {
        debugger
        return null;
      } else {
        return (
          <div className="usershow-info-content">
                      <div>Open Threads: <span>0</span></div>
                      {/* <div>Current Swipes: <span>{this.state.CS}</span></div> */}
                      <div>Current Swipes: <span>{this.countOpenSwipes()}</span></div>
                      <div>Closed Deals: <span>{this.props.userExchanges ? this.props.userExchanges.length : 0}</span></div>
                    </div>
        )
      }

    }
  }

  countOpenSwipes() {
    if (Array.isArray(this.props.userSwipes)){
      return this.props.userSwipes.filter(swipe => swipe.open).length
    }
    return 0;
  }

  countOpenThreads() {
    if (Array.isArray(this.props.userThreads))
      return this.props.userThreads.length()

    return 0;


  }

  render() {
    if (!this.props.user || Object.keys(this.props.user).length === 0 || !Array.isArray(this.props.userExchanges) || !Array.isArray(this.props.userSwipes))  
      return 'loading'
    // console.log(this.state)

   
    let userLink;
    // let otherUserContentCC;
    // let otherUserContentPC;
    // let otherUserStatsCC;
    // let otherUserStatsPC;
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
              {/* <HashLink smooth to={`/profile#PC`}>
                <div className="link">Closed Threads</div>
              </HashLink> */}
              <HashLink smooth to={`/profile#PS`}>
                <div className="link">Closed Deals</div>
              </HashLink>
            </div>
          </div>
      )

     
      // otherUserContentCC = (
      //   <div id="CC" className="usershow-column">
      //     {/* <ThreadIndexCurrentContainer user={this.props.user} updateCount={this.updateCount} type={this.props.type}/> */}
      //     <ThreadIndexCurrentContainer user={this.props.user} type={this.props.type}/>
      //   </div>
      // )
      // otherUserContentPC = (
      //   <div id="PC" className="usershow-column">
      //     <ThreadIndexPastContainer user={this.props.user} updateCount={this.updateCount} type={this.props.type}/>
      //   </div>
      // )
      // otherUserStatsCC = (
      //   <div>Open Threads: <span>{this.state.CC}</span></div>
      // )
      // otherUserStatsPC = (
      //   <div>Closed Threads: <span>{this.state.PC}</span></div>
      // )
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
    // debugger
    // console.log(this.props.exchangeCount)
    return (
      <div className="usershow-main">
        <div className="usershow-wrapper">

         {userLink}

          <div className="usershow-content-middle">
            <div id="CC" className="usershow-column">
              <ThreadIndexCurrentContainer user={this.props.user} type={this.props.type}/>
            </div>
            <div id="CS" className="usershow-column">
              <SwipeUserIndexContainer user={this.props.user}/>
            </div>
            <div id="PS" className="usershow-column">
              <ExchangeIndexContainer user={this.props.user}/>
            </div>
          </div>

          <div className="usershow-info-right">
            <div className="usershow-info-wrapper">
              <div className="usershow-info-title">
                {this.props.user.username}'s
                Homepage
              </div>
              
              {this.userShowInfo()}
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;