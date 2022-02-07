import React, { Component } from "react";
import Table from "./Table";
import displayData from "./data";
class App extends Component {
  state = {
    persons: displayData,
  };

  removePersonData = (index) => {
    const { persons } = this.state;
    this.setState({
      persons: persons.filter((person, i) => i !== index),
    });
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <Table
          displayData={persons}
          removePersonData={this.removePersonData}
        ></Table>
      </div>
    );
  }
}

export default App;
