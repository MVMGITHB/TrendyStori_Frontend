import React from "react";
import IntegratedNewsLayout, { ArticleHome } from "./ArticleHome";
const Article = ({ data }) => {
  return (
    <div>
      <IntegratedNewsLayout data={data} />
    </div>
  );
};

export default Article;
