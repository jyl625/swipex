import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

// import TweetsContainer from './tweets/tweets_container';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SwipeShowContainer from './swipes/swipe_show_container';
import CafeteriaShowContainer from './cafeterias/cafeteria_show_container'
import Footer from './footer/footer'
//testing
import SwipeIndexContainer from './swipes/swipe_index_container';
//testing
import UserShowContainer from './users/user_show_container';
// import ProfileContainer from './profile/profile_container';
// import TweetComposeContainer from './tweets/tweet_compose_container';


import SwipesFormContainer from './swipes/swipes_form_container'
import ThreadShowContainer from './threads/thread_show_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/cafeteria/:cafeteriaName" component={CafeteriaShowContainer}/>
      {/* <Route path="/cafeteria/" component={CafeteriaShowContainer}/> */}
      <Route path="/swipe/:swipeId" component={SwipeShowContainer}/>
      <Route path="/user/:userId" component={UserShowContainer}/>
      <ProtectedRoute exact path="/createswipe" component={SwipesFormContainer} />
      <ProtectedRoute exact path="/threads/:threadId" component={ThreadShowContainer} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} /> */}
    </Switch>
    <Footer/>
  </div>
);

export default App;