import React, { useState } from "react";
import Header from "./header/index";
import { styles, classNames } from "./styles";
import { Link } from "react-router-dom";

const Table = ({ headers, source, onSorting }) => {
  const renderData = (item, column) => {
    if (column.field === "name") {
      return (
        <Link
          to={`/events/${item.id}`}
          state={item}
          style={styles.link}
          key={item.id}
        >
          {item[column.field]}
        </Link>
      );
    } else {
      return item[column.field];
    }
  };

  return (
    <table style={styles.container}>
      <Header headers={headers} onSorting={onSorting} />
      <tbody>
        {source?.map((data, idx) => (
          <tr style={styles.row} key={idx}>
            {headers.map((column, index) => (
              <td style={styles.content} key={index}>
                {renderData(data, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
