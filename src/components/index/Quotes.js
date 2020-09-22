import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quote from "./Quote";

function Quotes() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = useStaticQuery(graphql`
    {
      allWordpressWpCitat {
        edges {
          node {
            id
            title
            acf {
              innehall
              extrainfo
            }
          }
        }
      }
    }
  `);
  const quotes = data.allWordpressWpCitat.edges;
  console.log(data);
  return (
    <Slider {...settings}>
      {quotes.map((quote) => {
        return <Quote key={quote.node.id} quote={quote} />;
      })}
    </Slider>
  );
}

export default Quotes;
