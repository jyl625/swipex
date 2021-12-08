import React from 'react';

import '../stylings/reset.css'
import '../stylings/swipe_form.css'

class SwipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askPrice: Number(0).toFixed(2),
      expiration: new Date(), // date needed "1999-20-20" format
      cafeId: "61afc736f71ca14a2311581a",
      mealType: "Breakfast",
      meetingDateTime: new Date() //
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let swipe = {
      seller: "61aed27a42cc3cab7be395a9",
      askPrice: this.state.askPrice.toString(),
      expiration: this.state.expiration.toString(),
      cafeId: this.state.cafeId,
      mealType: this.state.mealType,
      meetingDateTime: this.state.meetingDateTime
    }
    console.log(swipe)
    this.props.createSwipe(swipe);
    this.props.history.push("/")
    // this.setState({      //maybe not necessary

    // })
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    })
  }

  listMealTypes() {
    const mealTypes = ["Breakfast", "Lunch", "Dinner"]

    return mealTypes.map((mealType, idx) => (
      <option key={idx} value={`${mealType.toLowerCase()}`}>{`${mealType}`}</option>
    ))
  }

  listCafeterias() {
    const cafeterias = {
      "Reiber": "61afc736f71ca14a2311581a",
      "Covel": "61afc768f71ca14a2311581c",
      "DeNeve": "61afc788f71ca14a2311581e",
      "Bruin Plate": "61afc7b0f71ca14a23115820"
    }

    return Object.keys(cafeterias).map((name, idx) => (
      <option key={idx} value={`${cafeterias[name]}`}>{name}</option>
    ))
  }

  updatePrice() {
    return e => {
      const str = e.currentTarget.value;
      const charArr = str.split("");
      const numOnlyArr = charArr.filter(char => !isNaN(char))

      if (numOnlyArr.length < 2) {
        while (numOnlyArr.length < 2) {
          numOnlyArr.unshift(0)
        }
      } else {
        numOnlyArr.splice(numOnlyArr.length-2, 0, ".")
      }

      const numOnlyStr = numOnlyArr.join("")
      console.log(Number(numOnlyStr).toFixed(2))
      // console.log(parseFloat(numOnlyStr))
      this.setState({askPrice: parseFloat(Number(numOnlyStr).toFixed(2))})
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="swipe-form-main">
        <div className="swipe-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>Post your swipe for sale!</h1>
            {/* <div> */}
              <div className="input-label">Price</div>
              <input type="text" 
                    value={Number(this.state.askPrice).toFixed(2)}
                    // value={this.state.askPrice}
                    onChange={this.updatePrice()}
                    placeholder="0.00"
              />

              <div className="input-label">Location and Meal swipe type</div>
              <div className="select-option-container">
                <select type="text" 
                      value={this.state.cafeId}
                      onChange={this.update("cafeId")}
                >
                  {this.listCafeterias()}
                </select>
                <select value={this.state.mealType} 
                        onChange={this.update("mealType")}>
                    {this.listMealTypes()}
                </select>
              </div>
  
              <div className="input-label">Suggested meeting time</div>
              <input type="datetime-local" 
                    value={this.state.meetingDateTime}
                    onChange={this.update("meetingDateTime")}
              />

              <div className="input-label">Post expiration date</div>
              <input type="date" 
                    value={this.state.expiration}
                    onChange={this.update("expiration")}
              />


              <input type="submit" value="Submit"/>
            {/* </div> */}
          </form>
        </div>
      </div>
    )
  }
}

export default SwipeForm;