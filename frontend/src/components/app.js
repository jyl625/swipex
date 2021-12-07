import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

// import TweetsContainer from './tweets/tweets_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SwipeShowContainer from './swipes/swipe_show_container';
import SwipeIndexContainer from './swipes/swipe_index_container';
// import ProfileContainer from './profile/profile_container';
// import TweetComposeContainer from './tweets/tweet_compose_container';

import SwipesFormContainer from './swipes/swipes_form_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/swipes" component={SwipeIndexContainer}/>
      <Route path="/swipe/:swipeId" component={SwipeShowContainer}/>
      
      <ProtectedRoute exact path="/createswipe" component={SwipesFormContainer} />

      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} /> */}
    </Switch>
  </div>
);

export default App;