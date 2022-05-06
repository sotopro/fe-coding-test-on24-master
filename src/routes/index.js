import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Events, Event, Help, NoMatch } from "../screens/index";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="help" element={<Help />} />
        <Route path="events" element={<Events />}>
          <Route path=":eventsId" element={<Event />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Navigator;
