import React from 'react';
import { Link } from 'react-router-dom';
import BarchartContainer from '../D3chart/barchart_container';
import LinechartContainer from '../D3chart/linechart_container'

import '../stylings/main_page.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedCafeterias: false
    }
  }

  componentDidMount() {
    if (Object.keys(this.props.cafeterias).length === 0) {
      this.props.requestCafeterias().then(() => {
        this.setState({
          loadedCafeterias: true
        })
      })
    } else {
      this.setState({
        loadedCafeterias: true
      })
    }
  }

  listCafeteriaLinks() {
    // console.log(this.props.cafeterias)
    // if (Object.keys(this.props.cafeterias).length !== 0) {
      return this.props.cafeterias.map((cafeteria, idx) => {
        // return <Link to={`/cafeteria/`}
        return <div key={idx} className="link-item" >
                  <Link to={`/cafeteria/${cafeteria.name.replace(/\s/g, "").toLowerCase()}`}
                    key={cafeteria._id} >
                      <div className={`cafe-link ${cafeteria.name.replace(/\s/g, "")}`} 
                            style={{ backgroundImage: `url(${cafeteria.photoUrls[0]})` }}>{cafeteria.name.toUpperCase()}
                      </div>
                  </Link>
              </div>
      })
    // }
  }

  render() {
    if (this.state.loadedCafeterias) {
      return (
        <div className="main-page">
          <div className="content-wrapper-container">
            <div className="chart-wrapper">
              <div className="chart-title">
                <span className="close-price">Avg Meal Swipe Price (Past 30 days)</span>
              </div>
              <div className="linechart-container"><LinechartContainer/></div>
            </div>
            <div className="chart-wrapper">
              <div className="chart-title">
                <span className="exchange-count">Swipe Exchange Volume (Past 30 days)</span>
              </div>
              <div className="barchart-container"><BarchartContainer/></div>
            </div>
          </div>
          <div className="cafeteria-links-container">
            {this.listCafeteriaLinks()}
          </div>
        </div>
      );
    } else {
      return <div>Loading Cafeterias...</div>
    }
  }
}
 
export default MainPage;