/* eslint react/prop-types: 0 */
import React from "react";
import BlogFeedItem from "../blog/BlogFeedItem";

function BlogFeedPage({ posts }) {
  console.log(posts);

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => {
          return <BlogFeedItem key={post.node.wordpress_id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default BlogFeedPage;
