const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
  headers: {
    "Content-Types": "application/json",
    "X-Goog-Api-Key": import.meta.env,
  },
};
