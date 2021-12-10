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
        return <div className="link-item">
                  <Link to={`/cafeteria/${cafeteria.name.replace(/\s/g, "").toLowerCase()}`}
                    key={idx}>
                      <div className="cafe-link">{cafeteria.name.toUpperCase()}</div>
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
            <div className="barchart-container"><BarchartContainer/></div>
            <div className="linechart-container"><LinechartContainer/></div>
            <div className="cafeteria-links-container">
              {this.listCafeteriaLinks()}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading Cafeterias...</div>
    }
  }
}
 
export default MainPage;