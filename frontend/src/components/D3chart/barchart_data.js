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
    let data = [
      { preDate: 1, amount : 1, date :"2021-11-1", closePrice: 10.74 },
      { preDate: 2, amount : 1, date :"2021-11-02", closePrice: 8.17},
      { preDate: 3, amount : 1, date :"2021-11-03", closePrice: 9.2 },
      { preDate: 4, amount : 1, date :"2021-11-04", closePrice: 8.43 },
      { preDate: 5, amount : 1, date :"2021-11-05", closePrice: 8.61 },
      { preDate: 6, amount : 1, date :"2021-11-06", closePrice: 8.83 },
      { preDate: 7, amount : 1, date :"2021-11-07", closePrice: 9.16 },
      { preDate: 8, amount : 1, date :"2021-11-08", closePrice: 8.76 },
      { preDate: 9, amount : 1, date :"2021-11-09", closePrice: 8.17 },
      { preDate: 10, amount : 1, date :"2021-11-10", closePrice: 8.7 },
      { preDate: 11, amount : 1, date :"2021-11-11", closePrice: 6.54 },
      { preDate: 12, amount : 1, date :"2021-11-12", closePrice: 10.43 },
      { preDate: 13, amount : 1, date :"2021-11-13", closePrice: 6.72 },
      { preDate: 14, amount : 1, date :"2021-11-14", closePrice: 10 },
      { preDate: 15, amount : 1, date :"2021-11-15", closePrice: 7.95 },
      { preDate: 16, amount : 1, date :"2021-11-16", closePrice: 6.52 },
      { preDate: 17, amount : 1, date :"2021-11-17", closePrice: 7.48 },
      { preDate: 18, amount : 1, date :"2021-11-18", closePrice: 7.66 },
      { preDate: 19, amount : 1, date :"2021-11-19", closePrice: 7.76 },
      { preDate: 20, amount : 1, date :"2021-11-20", closePrice: 7.56 },
      { preDate: 21, amount : 1, date :"2021-11-21", closePrice: 6.76 },
      { preDate: 22, amount : 1, date :"2021-11-22", closePrice: 5.40 },
      { preDate: 23, amount : 1, date :"2021-11-23", closePrice: 5.63 },
      { preDate: 24, amount : 1, date :"2021-11-24", closePrice: 6.09 },
      { preDate: 25, amount : 1, date :"2021-11-25", closePrice: 7.24 },
      { preDate: 26, amount : 1, date :"2021-11-26", closePrice: 7.58 },
      { preDate: 27, amount : 1, date :"2021-11-27", closePrice: 7.70 },
      { preDate: 28, amount : 1, date :"2021-11-28", closePrice: 7.51 },
      { preDate: 29, amount : 1, date :"2021-11-29", closePrice: 6.87 },
      { preDate: 30, amount : 1, date :"2021-11-30", closePrice: 6.08 }]

    if (this.props.exchanges){
        let allDate = data.map((d) => d.date);
        let exchanges = this.props.exchanges;

        for (let i = 0; i < exchanges.length; i++) {
          let exchangeDate = exchanges[i].updatedAt.slice(0, 10);
          if (allDate.includes(exchangeDate)) {
            let index = allDate.findIndex(date => date === exchangeDate);
            data[index].amount += 1;
            data[index].closePrice = +((data[index].closePrice + exchanges[i].closePrice) / data[index].amount).toFixed(2)
          }
          else {
            data.shift();
            for (let i = 0; i < data.length; i++) {
              data[i].preDate -= 1;
            }
            data.push({ preDate: 30, amount: 1, date: exchangeDate, closePrice: exchanges[i].closePrice })
            allDate = data.map((d) => d.date)
          }
        }
      }

    return (
      <div><BarChart data = {data} /></div>
    )
  }
}

export default BarchartData;