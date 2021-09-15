import React from "react";
import { useArticleContext } from "../util/context";
// import { Link } from "react-router-dom";

const Articles = () => {
  const { loading, hits, removeStory } = useArticleContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="articles">
      {/* <div className="button-container">
        <button className="pageButton">Prev</button>
        <p className="numPages">0 of 50</p>
        <button className="pageButton">Next</button>
      </div> */}
      {hits.map((article) => {
        const {
          author,
          objectID: id,
          title,
          url,
          points,
          num_comments,
        } = article;

        return (
          // <Link to={`/articles/${id}`} key={id} className="article">
          <article key={id} className="article">
            <h4 className="title">{title}</h4>
            {/* <div className="article-info"> */}
              <p>{`${points} points by ${author} | ${num_comments} comments`}</p>
              <div className="read-more-div">
              <a href={url} className="read-more" target='_blank' rel="noopener noreferrer">
                Read More
              </a>
              </div>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                Remove
              </button>
            {/* </div> */}
          </article>
          // </Link>
        );
      })}
    </section>
  );
};

export default Articles;

// import React from "react";
// import { useArticleContext } from "../util/context";
// import { Link } from "react-router-dom";

// const Articles = () => {
//   const { articles, loading } = useArticleContext();

//   if (loading) {
//     return <div className="loading"></div>;
//   }
//   return (
//     <section className="articles">
//       {articles.map((article) => {
//         const { id, author, title, url, points, num_comments: comments } = article;
//         return (
//           <Link to={`/articles/${id}`} key={id} className="article">
//             <article>
//               <div className="article-info">
//                 <h4 className="title">{title}</h4>
//                 <p>{`${points} by ${author} | ${comments} comments`}</p>
// //               <a href={url} className="read-more">
// //                 Read More
// //               </a>
// //               <button className="remove">Remove</button>
//               </div>
//             </article>
//           </Link>
//         );
//       })}
//     </section>
//   );
// };

// export default Articles;
