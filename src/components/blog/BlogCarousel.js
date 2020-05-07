import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCarouselPost from "../blog/BlogCarouselPost";

function BlogCarousel() {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(limit: 12) {
        edges {
          node {
            wordpress_id
            title
            status
            slug
            featured_media {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              wordpress_id
            }
          }
        }
      }
    }
  `);

  const posts = data.allWordpressPost.edges;

  var settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="py-8 bg-black">
      <div className="text-white text-center pb-2 text-3xl font-bold">
        Blogg
      </div>
      <div className="px-16 mx-auto pb-4">
        <Slider {...settings}>
          {posts.map((item, index) => {
            return <BlogCarouselPost key={index} item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default BlogCarousel;
