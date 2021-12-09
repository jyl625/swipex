import React from 'react';
import { Link } from 'react-router-dom';

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
        return <Link to={`/cafeteria/${cafeteria.name.replace(/\s/g, "").toLowerCase()}`}
                    key={idx}>
                    {cafeteria.name}
                </Link>
      })
    // }
  }

  render() {
    console.log(this.props.cafeterias)
    if (this.state.loadedCafeterias) {
      return (
        <div>
          {this.listCafeteriaLinks()}
        </div>
      );
    } else {
      return <div>Loading Cafeterias...</div>
    }
  }
}

export default MainPage;