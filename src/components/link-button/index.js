import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { useMatch, useResolvedPath, Link, useLocation } from "react-router-dom";

const LinkButton = ({ to, title }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} style={styles.link}>
      <button type="button" style={styles.optionsButton(match)}>
        <div style={styles.customRadioButton}>
          <span style={styles.checkmark(match)} />
        </div>
        <h2>{title}</h2>
      </button>
    </Link>
  );
};

export default LinkButton;
