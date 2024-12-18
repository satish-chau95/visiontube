import React from "react";
import Button from "./Button";
import "swiper/css/bundle"; // For Swiper styles
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_RESULTS_API, GOOGLE_API_KEY } from "../utils/constants";
import { getSearchSuggestionData } from "../utils/searchSlice";

const ButtonList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch search results based on the category
  const fetchCategoryResults = async (category) => {
    try {
      navigate(`/results?search_query=${category}`);
      const response = await fetch(
        `${YOUTUBE_SEARCH_RESULTS_API}q=${category}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      dispatch(getSearchSuggestionData(data?.items));
    } catch (error) {
      console.error("Error fetching category results:", error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap justify-start gap-2 p-4 px-5 md:px-10">
        {categories.map((category, index) => (
          <Button
            key={index}
            name={category.name}
            getCategory={fetchCategoryResults}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;

// Updated categories for the button list
export const categories = [
  { name: "All" },
  { name: "Trending" },
  { name: "Technology" },
  { name: "Music" },
  { name: "Education" },
  { name: "Gaming" },
  { name: "Travel" },
  { name: "Food" },
];
