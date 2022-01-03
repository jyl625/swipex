import React from 'react';
import { Link } from 'react-router-dom';

import '../stylings/splash.css'

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="splash-page">
        <div className='splash-page-top'>
          <h1>Meal Swipes for Everyone</h1>
          <div>Sign up or log in to post your meal swipe for sale or buy meal swipes to use in any one of on-campus cafeterias.</div>

        </div>

        <div className='splash-page-introduction'>

        </div>
      </div>
      
    )
  }

}

export default SplashPage;
