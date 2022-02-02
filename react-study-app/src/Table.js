import React, {Component} from "react";

class Table extends Component {
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pranay</td>
                        <td>Software Developer</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;