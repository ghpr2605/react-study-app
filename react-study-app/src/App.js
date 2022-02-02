import React, { Component } from "react";
import Table from "./Table";
import displayData from "./data";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Table displayData={displayData}></Table>
      </div>
    );
  }
}

export default App;
