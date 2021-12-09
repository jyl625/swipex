import React from 'react';
import { Link } from 'react-router-dom';
import BarChart from './barchart';


class BarchartData extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestExchanges()
  }

  // allExchanges() {
  //   if (Object.keys(this.props.exchanges).length > 0) {
  //     console.log("yes") 
  //     }
  //   }

  render() {
    const data = [
      { date: 1, closePrice: 10.74 },
      { date: 2,closePrice: 8.17},
      { date: 3, closePrice: 9.2 },
      { date: 4, closePrice: 8.43 },
      { date: 5, closePrice: 8.61 },
      { date: 6, closePrice: 8.83 },
      { date: 7, closePrice: 9.16 },
      { date: 8, closePrice: 8.76 },
      { date: 9, closePrice: 8.17 },
      { date: 10, closePrice: 8.7 },
      { date: 11, closePrice: 6.54 },
      { date: 12, closePrice: 10.43 },
      { date: 13, closePrice: 6.72 },
      { date: 14, closePrice: 10 },
      { date: 15, closePrice: 7.95 },
      { date: 16, closePrice: 6.52 },
      { date: 17, closePrice: 7.48 },
      { date: 18, closePrice: 7.66 },
      { date: 19, closePrice: 7.76 },
      { date: 20, closePrice: 7.56 },
      { date: 21, closePrice: 6.76 },
      { date: 22, closePrice: 5.40 },
      { date: 23, closePrice: 5.63 },
      { date: 24, closePrice: 6.09 },
      { date: 25, closePrice: 7.24 },
      { date: 26, closePrice: 7.58 },
      { date: 27, closePrice: 7.70 },
      { date: 28, closePrice: 7.51 },
      { date: 29, closePrice: 6.87 },
      { date: 30, closePrice: 6.08 }]

      // const storedDate = [];



    return (
      <div className="graph-container"><BarChart data = {data} /></div>
    )
  }
}

export default BarchartData;