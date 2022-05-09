import React from "react";
import { styles } from "./styles";
import { Outlet } from "react-router-dom";
import { LinkButton, Header } from "../../components/index";
import { optionsMenu } from "../../utils/constants/index";

const Home = () => {
  const options = optionsMenu;
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.contentContainer}>
        <div style={styles.optionsContainer}>
          {options &&
            options.map((option) => (
              <LinkButton key={option.id} to={option.to} title={option.title} />
            ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
