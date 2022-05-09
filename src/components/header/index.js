import React from "react";
import { styles } from "./styles";

const Header = () => {
  return (
    <div style={styles.headerContiner}>
      <div style={styles.circleContainer}>
        <svg height="40" width="40">
          <circle
            cx="20"
            cy="20"
            r="17"
            stroke="#A9FFF7"
            strokeWidth="1"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
