import React from 'react';
import { Link } from 'react-router-dom';
import BarchartContainer from '../D3chart/barchart_container';
import LinechartContainer from '../D3chart/linechart_container'

import '../stylings/main_page.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedCafeterias: false
    }
  }

  componentDidMount() {
    if (Object.keys(this.props.cafeterias).length === 0) {
      this.props.requestCafeterias().then(() => {
        this.setState({
          loadedCafeterias: true
        })
      })
    } else {
      this.setState({
        loadedCafeterias: true
      })
    }
  }

  listCafeteriaLinks() {
    // console.log(this.props.cafeterias)
    // if (Object.keys(this.props.cafeterias).length !== 0) {
      return this.props.cafeterias.map((cafeteria, idx) => {
        // return <Link to={`/cafeteria/`}
        return <div key={idx} className="link-item" >
                  <Link to={`/cafeteria/${cafeteria.name.replace(/\s/g, "").toLowerCase()}`}
                    key={cafeteria._id} >
                      <div className={`cafe-link ${cafeteria.name.replace(/\s/g, "")}`} 
                            style={{ backgroundImage: `url(${cafeteria.photoUrls[0]})` }}>{cafeteria.name.toUpperCase()}
                      </div>
                  </Link>
              </div>
      })
    // }
  }

  render() {
    if (this.state.loadedCafeterias) {
      // debugger
      const topInfo = (!this.props.currentUser || Object.values(this.props.currentUser).length === 0) ? (
        <div className="main-page-top-info">
          <p>Sign up or log in to post your meal swipe for sale or buy meal swipes to use in any one of on-campus cafeterias.</p>
          <div className="main-session-links">
            <Link to={'/signup'}>Sign up</Link>
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      ) : (
        <div className="main-page-top-info">
          <p>Post your meal swipe for sale or buy meal swipes to use in any one of on-campus cafeterias.</p>
        </div>
      )

      return (
        <div className="main-page">
          <div className='main-page-top'>
            <div className='main-page-top-content'>
              <h1>Meal Swipes for Everyone</h1>
              {topInfo}
            </div>
          </div>

          <div className='main-page-introduction'>
            <div>
              <div className="main-page-introduction-section">
                <div className="main-page-introduction-info">
                  <h2>Post Your Meal Swipes for Sale</h2>
                  Complete the Swipe Sell Order Form to sell your cafeteria meal swipes. Fill out details about the meal swipe (i.e. meal type and cafeteria location) and just click “Submit” to post your meal swipe for sale.
                </div>
                <img src="images/section-preview-1.png" alt="" />
              </div>
            </div>

            <div>
              <div className="main-page-introduction-section">
                <div className="main-page-introduction-info">
                <h2>Buy Meal Swipes from Cafeteria Page</h2>
                  Visit the cafeteria page to see a list of all meal swipes available for sale. Click on the swipe to see more detail. 
                </div>
                <img src="images/section-preview-2.png" alt="" />
              </div>
            </div>

            <div>
              <div className="main-page-introduction-section">
                <div className="main-page-introduction-info">
                  <h2>Track latest meal swipe price movements</h2>
                  See the graphs on the right side of the cafeteria page to keep track of the latest meal swipe price movements.
                </div>
                <div className="chart-wrapper-container">
                  <div className="chart-wrapper">
                    <div className="chart-title">
                      <span className="close-price">Avg Meal Swipe Price (Past 30 days)</span>
                    </div>
                    <div className="linechart-container"><LinechartContainer /></div>
                  </div>
                  <div className="chart-wrapper">
                    <div className="chart-title">
                      <span className="exchange-count">Swipe Exchange Volume (Past 30 days)</span>
                    </div>
                    <div className="barchart-container"><BarchartContainer /></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="main-page-introduction-section">
                <div className="main-page-introduction-info">
                <h2>Contact the Seller or the Buyer</h2>
                  After clicking on the meal swipe for more details, click on “Contact Seller” to start a message thread with the seller. You can leave a message for the other user or make an offer or a counter offer through this page.
                </div>
                <img src="images/swipex_section_preview_contact.gif" alt="" />
              </div>
            </div>

            <div>
              <div className="main-page-introduction-section">
                <div className="main-page-introduction-info">
                  <h2>Your Profile Page</h2>
                  Visit your profile page to see the lists of all your currently open message threads, meal swipes listed for sale, and your swipe sale history.
                </div>
                <img src="images/section-preview-4.png" alt="" />
              </div>
              
            </div>

          </div>

          
          {/* <div className="cafeteria-links-container">
            {this.listCafeteriaLinks()}
          </div> */}
        </div>
      );
    } else {
      return <div>Loading Cafeterias...</div>
    }
  }
}
 
export default MainPage;