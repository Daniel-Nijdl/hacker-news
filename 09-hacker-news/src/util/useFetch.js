// import { useState, useEffect } from "react";


// export const useFetch = (searchQuery) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState({ show: false, msg: "" });
//   const [articles, setArticles] = useState([]);

//   const fetchArticles = async (url) => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       setArticles(data.hits);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     console.log(`${API_ENDPOINT}${searchQuery}`);
//     fetchArticles(`${API_ENDPOINT}${searchQuery}`);
//   }, [searchQuery]);

//   return { loading, error, articles };
// };
