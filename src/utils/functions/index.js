export const formatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleString("en-US");
};

export const getHour = (time) => {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const getDate = (time) => {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
};

export const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return hours >= 1 ? `${hours} hour ${minutesLeft} min` : `${minutesLeft} min`;
};

export const sortDate = (a, b, reversed, field) => {
  if (a[field] < b[field]) {
    return -1 * reversed;
  }
  if (a[field] > b[field]) {
    return 1 * reversed;
  }
  return 0;
};

export const getEventById = (events, id) => {
  const event = events.find((event) => event.id == id);
  return event;
};

export const getLanguageName = (language) => {
  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  return languageNames.of(language);
};

export const hasContent = (value) => {
  return value === true ? "Yes" : "No";
};
