import React from 'react';
// import BarChart from '../D3chart/barchart';
import BarchartContainer from '../D3chart/barchart_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>SwipeX</h1>
        <div><BarchartContainer/></div>
        <footer>
          Copyright &copy; 2021 SwipeX
        </footer>
      </div>
    );
  }
}

export default MainPage;