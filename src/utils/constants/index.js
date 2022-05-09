export const optionsMenu = [
  {
    id: 1,
    to: "/events",
    title: "Events",
  },
  {
    id: 2,
    to: "/help",
    title: "Help",
  },
];

export const headerTable = [
  { name: "Start Time", field: "dateTime", sortable: true },
  { name: "Event ID", field: "id", sortable: true },
  { name: "Event Name", field: "name", sortable: true },
];

export const apiUrl = "http://localhost:4000/api";

export const routes = {
  home: "/",
  events: "/events",
  event: "/events/:eventsId",
  help: "/help",
  notFound: "/404",
};
