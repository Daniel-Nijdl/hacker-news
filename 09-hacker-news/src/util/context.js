import React, { useEffect, useReducer, useContext } from "react";
import { reducer } from "./reducer";

const API_ENDPOINT = "http://hn.algolia.com/api/v1/search?";

//the state object that holds the values for the context
//this is used by the reducer
const initialState = {
  hits: [],
  page: 0,
  query: "react",
  nbPages: 0,
  loading: true,
};

const ArticleContext = React.createContext();

export const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchHits = async (url) => {
    //set loading to true
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_HITS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const removeStory = (id) => {
    dispatch({type: "REMOVE_STORY", payload: id});
  }

  const pageForward = (id) => {
    dispatch({type: "PAGE_FORWARD", payload: id});
  }

  useEffect(() => {
    fetchHits(`${API_ENDPOINT}query=${state.query}&page=${state.page}&`);
  }, [state.query, state.page]);

  return (
    <ArticleContext.Provider value={{ ...state, pageForward, removeStory}}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  return useContext(ArticleContext);
};

// import React, { useState, useContext } from "react";
// import { useFetch } from "./useFetch";

// const ArticleContext = React.createContext();

// export const ArticleProvider = ({ children }) => {
//   const [query, setQuery] = useState("react");
//   const [page, setPage] = useState(0)
//   const { articles, error, loading } = useFetch(`query=${query}&page=${page}`);

//   return (
//     <ArticleContext.Provider
//       value={{ query, setQuery, loading, articles, error }}>
//       {children}
//     </ArticleContext.Provider>
//   );
// };

// export const useArticleContext = () => {
//   return useContext(ArticleContext);
// };
