import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { SUGGESTIONS_API } from "./Constants";

const useSearchSuggestions = (searchText) => {
  const dispatch = useDispatch();

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const suggestionsApi = async () => {
    const searchSuggest = await fetch(
      SUGGESTIONS_API +
        searchText
    );
    const json = await searchSuggest.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
  };

  useEffect(() => {
    const callSuggestions = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        suggestionsApi();
      }
    }, 200);
    return () => {
      clearTimeout(callSuggestions);
    };
  }, [searchText]);

  return {
    suggestions,
    showSuggestions,
    setShowSuggestions,
  };
};

export default useSearchSuggestions;
