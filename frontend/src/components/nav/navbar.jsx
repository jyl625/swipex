import React from 'react';
import { Link } from 'react-router-dom'


import '../stylings/reset.css'
import '../stylings/navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  componentDidMount() {
    this.props.requestCafeterias()
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn && this.props.currentUser) {
        return (
            <div className="navbar-links-container">
                {/* <Link to={'/tweets'}>All Tweets</Link> */}
                {/* <Link to={'/profile'}>Profile</Link> */}
                <div className="profile">
                  <Link to={'/profile'}>
                  <img className="profile-img" 
                        src="/images/id-card-regular.svg"
                        alt="profile"  /></Link>
                </div>
                <div className="post-swipe">
                  <Link to={'/createswipe'}>
                    <img src="images/plus-square-regular.svg"
                    alt="create swipe"/>
                  </Link>
                </div>
                <div className="logout"
                  onClick={this.logoutUser}>
                    {/* <img src="images/power-off-solid.svg"/> */}
                    <img src="images/logout.png" alt="logout"/>
                </div>

            </div>
        );
      } else {
        return (
            <div className="navbar-links-container">
                <Link to={'/signup'}>Sign up</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  logo() {
    return (
      <div className="navbar-logo">
        <Link to={'/'}>
          <img src="images/swipex_logo_80px_h.png" alt="logo"/>
        </Link>
      </div>
    )
  }

  listCafeterias() {
    if (Object.keys(this.props.allCafeterias).length > 0) {
      return this.props.allCafeterias.map( cafeteria => {
        return <div className="link-wrapper"> 
                <Link 
                    className="cafeteria-link"
                    to={`/cafeteria/${cafeteria.name.replace(/\s/g, "").toLowerCase()}`} 
                    key={cafeteria._id}>{cafeteria.name.toUpperCase()}
                </Link>
              </div>
                
      })
    }
  }

  render() {
    return (
      <div className="navbar-container">
          <div className="navbar-wrapper-top">
            { this.logo() }
            { this.getLinks() }
          </div>
          <div className="navbar-wrapper-bottom">
            <div className="link-wrapper"> 
              <Link className="home-link" to={`/`}>HOME</Link>
            </div>
            {this.listCafeterias()}
            <div className="link-wrapper"> 
              <Link className="home-link" to={`/cafeteria/all`}>ALL</Link>
            </div>
          </div>
      </div>
    );
  }
}

export default NavBar;