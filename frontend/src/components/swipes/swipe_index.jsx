import React from 'react';
import SwipeIndexItem from './swipe_index_item';

import '../stylings/reset.css'
import '../stylings/swipe_index.css'

class SwipeIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.requestSwipes();
    // need to request user
  }

  listIndexItems() {
    

    this.props.swipes.map(swipe => {
    // this.props.swipes.map((swipe, idx) => {
            return <li key={swipe.id}>
              <SwipeIndexItem swipe={swipe}/>
            </li>
          })
  }

  render() {
    return (
      <div className="swipe-index-page">
        {
          this.listIndexItems()
        }
      </div>
    )
  }
}

export default SwipeIndex;