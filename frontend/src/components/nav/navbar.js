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
      if (this.props.loggedIn) {
        return (
            <div className="navbar-links-container">
                {/* <Link to={'/tweets'}>All Tweets</Link> */}
                {/* <Link to={'/profile'}>Profile</Link> */}
                <Link to={'/createswipe'}>Post your swipes</Link>
                <button onClick={this.logoutUser}>Logout</button>
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

  listCafeterias() {
    if (Object.keys(this.props.allCafeterias).length > 0) {
      return this.props.allCafeterias.map( cafeteria => {
        return <Link to={'/'} key={cafeteria._id}>{cafeteria.name.toUpperCase()}</Link>
      })
    }
  }

  render() {
    return (
      <div className="navbar-container">
          <div className="navbar-wrapper-top">
            <div className="navbar-logo"><h1><Link to={'/'}>SwipeX</Link></h1></div>
            { this.getLinks() }
          </div>
          <div className="navbar-wrapper-bottom">
            {this.listCafeterias()}
          </div>
      </div>
    );
  }
}

export default NavBar;