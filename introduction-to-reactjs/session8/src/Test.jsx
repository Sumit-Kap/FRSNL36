import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: undefined,
    };
  }
  // used for doing API calls or getting data
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((results) => {
        this.setState({
          response: results,
        });
      });
    });
  }
  render() {
    const { response } = this.state;
    if (!response) {
      return <h1>Loading.......</h1>;
    }
    return (
      <>
        <h1>In Test component</h1>
        {response ? (
          <div>
            {response.map((item, index) => (
              <>
                <div
                  style={{
                    fontSize: "16px",
                    color: "white",
                    backgroundColor: "blue",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "white",
                    backgroundColor: "orange",
                  }}
                >
                  {item.body}
                </div>
                <hr />
              </>
            ))}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Test;

// API

// default export - IT is one per file and you directly use it without destructuring it
// named export -
// Mounting - component will mount
// Update - updating the component
// unmounting
