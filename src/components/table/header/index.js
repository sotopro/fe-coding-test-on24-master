import React, { useState } from "react";
import IconDropdown from "../../../assets/icons/md-arrow-dropdown.svg";
import IconDropup from "../../../assets/icons/md-arrow-dropup.svg";
import { styles } from "./styles";

const Header = ({ headers, onSorting }) => {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");

  const onSortingChange = (field) => {
    const order =
      field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };

  return (
    <thead>
      <tr style={styles.row}>
        {headers.map(({ name, field, sortable }) => (
          <th
            style={styles.header}
            key={name}
            onClick={() => (sortable ? onSortingChange(field) : null)}
          >
            {name}

            {sortingField && sortingField === field && (
              <img
                style={styles.icon}
                src={sortingOrder === "asc" ? IconDropdown : IconDropup}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
