import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.displayData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removePersonData(index)}>DELETE</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { displayData, removePersonData } = this.props;
    return (
      <table>
        <TableHeader></TableHeader>
        <TableBody
          displayData={displayData}
          removePersonData={removePersonData}
        ></TableBody>
      </table>
    );
  }
}

export default Table;
