import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

// import TweetsContainer from './tweets/tweets_container';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SwipeShowContainer from './swipes/swipe_show_container';
import SwipeIndexContainer from './swipes/swipe_index_container'; //can delete after cafeteria works
import CafeteriaShowContainer from './cafeterias/cafeteria_show_container'
import Footer from './footer/footer'
// import ProfileContainer from './profile/profile_container';
// import TweetComposeContainer from './tweets/tweet_compose_container';


import SwipesFormContainer from './swipes/swipes_form_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/cafeteria/:cafeteriaName" component={CafeteriaShowContainer}/>
      {/* <Route path="/cafeteria/" component={CafeteriaShowContainer}/> */}
      <Route path="/swipe/:swipeId" component={SwipeShowContainer}/>
      
      <ProtectedRoute exact path="/createswipe" component={SwipesFormContainer} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
    <Footer/>
  </div>
);

export default App;