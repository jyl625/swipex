import React from 'react';
import SwipeIndexItem from './swipe_index_item';

class SwipeIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.requestSwipes();
  }

  render() {
    return (
      <div>
        {
          this.props.swipes.map((swipe, idx) => {
            return <li key={idx}>
              <SwipeIndexItem swipe={swipe}/>
            </li>
          })
        }
      </div>
    )
  }
}

export default SwipeIndex;