import React, { lazy, Suspense, useState, useMemo, useEffect } from "react";
import { Outlet, useResolvedPath, useMatch } from "react-router-dom";
import { formatTime, sortDate } from "../../utils/functions";
import { headerTable, routes } from "../../utils/constants/index";
import { styles } from "./styles";
import { services } from "../../services/index";
const Table = lazy(() => import("../../components/table/index"));

const Events = () => {
  let resolved = useResolvedPath(routes.events);
  let match = useMatch({ path: resolved.pathname, end: true });
  const [sorting, setSorting] = useState({ field: "asc", order: "" });
  const [events, setEvents] = useState();
  useEffect(() => {
    services
      .getEvents()
      .then((events) => {
        setEvents(events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const orderEvents = useMemo(() => {
    let computedData = events;

    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedData = computedData?.sort((a, b) =>
        sortDate(a, b, reversed, sorting.field)
      );
    }
    const eventDateFormat = computedData?.map((event) => {
      return { ...event, dateTime: formatTime(event.dateTime) };
    });
    return eventDateFormat;
  }, [events, sorting]);

  return (
    <div style={styles.content}>
      {match && (
        <>
          <h2 style={styles.contentTitle}>All Webcast Events</h2>
          <Suspense fallback={<h2>Loading...</h2>}>
            {orderEvents && (
              <Table
                headers={headerTable}
                source={orderEvents}
                onSorting={(field, order) => setSorting({ field, order })}
              />
            )}
          </Suspense>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Events;
