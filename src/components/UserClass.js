import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "DK",
      location: "Bengaluru",
      email: "dk@example.com",
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>User Class Component</h1>
        <h2>Name: DK</h2>
        <h3>Location: Bengaluru</h3>
        <h3>Email: dk@example.com</h3>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default UserClass;
