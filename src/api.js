import axios from "axios";

const SearchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 7jCr9m85wTR31H1N8OJmDgq6v16LVKOzaWdlb79bHxI",
      },
      params: {
        query: term,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // Return an empty array or handle the error as needed.
  }
};

export default SearchImages;
