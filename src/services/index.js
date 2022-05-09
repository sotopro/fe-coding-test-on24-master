import { apiUrl } from "../utils/constants/index";

export const services = {
  getEvents: async () => {
    try {
      const response = await fetch(`${apiUrl}/events`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
