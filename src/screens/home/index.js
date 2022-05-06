import React from "react";
import { Outlet } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  headerContiner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
    flexGrow: 0.08,
    backgroundColor: "#B8E1FF",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  circleContainer: {
    display: "flex",
    padding: "10px 0px 10px 25px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 0.1,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 0.9,
  },
  optionsButton: (active = false) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: active ? "#8B95C9" : "#D6EDFF",
    border: "none",
    borderRight: "2px solid #ACD7EC",
  }),
};

const Home = () => {
  return (
    <div style={styles.container}>
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
      <div style={styles.contentContainer}>
        <div style={styles.optionsContainer}>
          <button type="button" style={styles.optionsButton(true)}>
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
            <h2>Events</h2>
          </button>
          <button type="button" style={styles.optionsButton()}>
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
            <h2>Help</h2>
          </button>
        </div>
        <div style={styles.content}></div>
      </div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};

export default Home;
