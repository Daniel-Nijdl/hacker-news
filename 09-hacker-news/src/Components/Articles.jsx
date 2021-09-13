import React from "react";
import { useArticleContext } from "../util/context";
// import { Link } from "react-router-dom";

const Articles = () => {
  const { articles, loading } = useArticleContext();



  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="articles">
      {articles.map((article) => {
        const {
          id,
          author,
          title,
          url,
          points,
          num_comments: comments,
        } = article;

        return (
          // <Link to={`/articles/${id}`} key={id} className="article">
          <article>


            <div className="article-info">
              <h4 className="title">{title}</h4>
              <p>{`${points} points by ${author} | ${comments} comments`}</p>
              <a href={url} className="read-more">
                Read More
              </a>
              <button className="remove">Remove</button>
            </div>
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
