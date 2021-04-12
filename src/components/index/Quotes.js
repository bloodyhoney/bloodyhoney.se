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
      allWpQuote {
        edges {
          node {
            id
            title
            citat {
              innehall
            }
          }
        }
      }
    }
  `);
  const quotes = data.allWpQuote.edges;

  return (
    <Slider {...settings}>
      {quotes.map((quote) => {
        return <Quote key={quote.node.id} quote={quote} />;
      })}
    </Slider>
  );
}

export default Quotes;
