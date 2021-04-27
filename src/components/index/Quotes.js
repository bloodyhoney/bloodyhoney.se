import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "react-bootstrap/Carousel";
import Quote from "./Quote";

function Quotes() {
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
    <Carousel
      fade
      interval={5000}
      controls={false}
      indicators={false}
      className="h-full"
    >
      {quotes.map((quote) => {
        return (
          <Carousel.Item key={quote.node.id}>
            <Quote quote={quote} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Quotes;
