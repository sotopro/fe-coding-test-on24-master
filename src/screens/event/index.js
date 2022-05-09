import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { styles } from "./styles";
import { services } from "../../services/index";
import {
  getEventById,
  getHour,
  getDate,
  convertMinutesToHours,
  getLanguageName,
  hasContent,
} from "../../utils/functions";

const Event = () => {
  let location = useLocation();
  let params = useParams();
  const [event, setEvent] = useState(location?.state);

  useEffect(() => {
    if (!location.state) {
      services
        .getEvents()
        .then((events) => {
          const currentEvent = getEventById(events, params.eventsId);
          setEvent(currentEvent);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  return (
    <div style={styles.content}>
      {event && (
        <>
          <h2>{`${event.name} (${event.id})`}</h2>
          <p>
            <b>Start Date:</b> {getDate(event.dateTime)}
          </p>
          <p>
            <b>Start Time:</b> {getHour(event.dateTime)}
          </p>
          <p>
            <b>Duration: </b>
            {convertMinutesToHours(event.duration)}
          </p>
          <p>
            <b>Language: </b>
            {getLanguageName(event.language)}
          </p>
          <p>
            <b>interest Category: </b>
            {event.interestCategory}
          </p>
          <p>
            <b>hasVideo:</b> {hasContent(event.hasVideo)}
          </p>
          <p>
            <b>hasSlides: </b>
            {hasContent(event.hasSlides)}
          </p>
          <p>
            <b>Attendees: </b>
            {event.Attendees}
          </p>
        </>
      )}
    </div>
  );
};

export default Event;
