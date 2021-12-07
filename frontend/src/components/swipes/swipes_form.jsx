import React from 'react';

class SwipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askPrice: 1,
      expirationDate: new Date(),
      cafeId: "A0000",
      mealType: "Breakfast",
      meetingDateTime: new Date()
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let swipe = {
      askPrice: this.state.askPrice,
      expirationDate: this.state.expirationDate,
      cafeId: this.state.cafeId,
      mealType: this.state.mealType,
      meetingDateTime: this.state.meetingDateTime
    }

    this.props.createSwipes(swipe);
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
      "Cafeteria01": "A0001",
      "Cafeteria02": "A0002",
      "Cafeteria03": "A0003",
      "Cafeteria04": "A0004"
    }

    return Object.keys(cafeterias).map((name, idx) => (
      <option key={idx} value={`${cafeterias[name]}`}>{name}</option>
    ))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create a Swipe!</h1>
          <div>
            <input type="number" 
                  value={this.state.askPrice}
                  onChange={this.update("askPrice")}
                  min="1" max="10" step="0.25"
            />
            <input type="date" 
                  value={this.state.expirationDate}
                  onChange={this.update("expirationDate")}
            />
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
            <input type="datetime-local" 
                  value={this.state.meetingDateTime}
                  onChange={this.update("meetingDateTime")}
            />


            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SwipeForm;