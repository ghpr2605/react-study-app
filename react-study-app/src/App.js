import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
class App extends Component {
  state = {
    persons: [],
  };

  removePersonData = (index) => {
    const { persons } = this.state;
    this.setState({
      persons: persons.filter((person, i) => i !== index),
    });
  };

  handleSubmit = (persons) => {
    this.setState({ persons: [...this.state.persons, persons] });
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="container">
        <Table
          displayData={persons}
          removePersonData={this.removePersonData}
        ></Table>
        <Form handleSubmit={this.handleSubmit}></Form>
      </div>
    );
  }
}

export default App;
