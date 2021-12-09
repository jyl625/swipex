import React from 'react';
// import BarChart from '../D3chart/barchart';
import BarchartContainer from '../D3chart/barchart_container';
import LinechartContainer from '../D3chart/linechart_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>SwipeX</h1>
        <div><BarchartContainer/></div>
        <div><LinechartContainer/></div>
        <footer>
          Copyright &copy; 2021 SwipeX
        </footer>
      </div>
    );
  }
}

export default MainPage;