import React from "react";
//child
class Homepage extends React.Component {
  handleClicks = () => {
    this.props.cb(`FRSNL-36,${this.props.learnerName}`);
  };
  render() {
    const { learnerName, cb } = this.props; // destructuring
    return (
      <h2 onClick={this.handleClicks}>
        Thanks for joining the course - {learnerName}
      </h2>
    );
  }
}

export default Homepage;
