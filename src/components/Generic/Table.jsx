import React from "react";
import PropTypes from 'prop-types';

const Table = (props) => {
    const tableHeaders = props.headers.map((header, idx) => <th key={idx} scope="col">{header}</th>);
    const tableRows = props.rows.map((row, idx) =>
        <tr key={idx}>
            {renderRow(row)}
        </tr>
    );

    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    {tableHeaders}
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
};

const renderRow = (item) => {
    let tableRow = [];
    for (let key in item) {
        if (item.hasOwnProperty(key)) {
            tableRow.push(<td key={key + item[key]}>{item[key]}</td>);
        }
    }
    return tableRow;
};


Table.propTypes = {
    headers: PropTypes.array,
    rows: PropTypes.array,
};

Table.defaultProps = {
    headers: [],
    rows: [],
};

export default Table;