/* eslint react/prop-types: 0 */
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
            excerpt
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="py-8 bg-black">
      <div className="text-white text-center pb-2 text-3xl font-bold">
        Bloody Blogg
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

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="w-16 next hover:opacity-75">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 451.846 451.847"
        fill="#ffffff"
      >
        <g>
          <path
            d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
          />
        </g>
      </svg>
    </button>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="w-16 prev hover:opacity-75 ">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 492 492"
        fill="#ffffff"
      >
        <g>
          <g>
            <path
              d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
            />
          </g>
        </g>
      </svg>
    </button>
  );
}

export default BlogCarousel;
