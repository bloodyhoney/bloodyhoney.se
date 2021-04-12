/* eslint react/prop-types: 0 */

import React, { useState } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Portfolio from "../components/portfolio/Portfolio";
import Carousel from "react-bootstrap/Carousel";
import CaseSlide from "../components/portfolio/CaseSlide";
import Presentation from "../components/index/Presentation";
import BlogCarousel from "../components/blog/BlogCarousel";

function portfolioItem({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const portfolio = data.allWpCase.edges[0].node;
  console.log(portfolio.caseInfo.textfarg01);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section className="case-slider-wrapper">
        <div className="flex flex-wrap flex-col w-full">
          <div className="w-full  h-screen-90 flex flex-col items-center justify-center ">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              className="flex-grow w-full h-full flex flex-col items-center justify-center"
            >
              <Carousel.Item>
                {/* Slide 1 */}
                {portfolio.caseInfo.video01 || portfolio.caseInfo.bild01 ? (
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundColor: portfolio.caseInfo.bakgrundsfarg01,
                      color: portfolio.caseInfo.textfarg01,
                    }}
                  >
                    <CaseSlide
                      video={portfolio.caseInfo.video01}
                      text={portfolio.caseInfo.bild01}
                    />
                  </div>
                ) : (
                  ""
                )}
              </Carousel.Item>
              <Carousel.Item>
                {/* Slide 2 */}
                {portfolio.caseInfo.video02 || portfolio.caseInfo.bild02 ? (
                  <div>
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundColor: portfolio.caseInfo.bakgrundsfarg02,
                        color: portfolio.caseInfo.textfarg02,
                      }}
                    >
                      <CaseSlide
                        video={portfolio.caseInfo.video02}
                        text={portfolio.caseInfo.bild02}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </Carousel.Item>
              <Carousel.Item>
                {/* Slide 3 */}
                {portfolio.caseInfo.video03 || portfolio.caseInfo.bild03 ? (
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundColor: portfolio.caseInfo.bakgrundsfarg03,
                      color: portfolio.caseInfo.textfarg03,
                    }}
                  >
                    <CaseSlide
                      video={portfolio.caseInfo.video03}
                      text={portfolio.caseInfo.bild03}
                    />
                  </div>
                ) : (
                  ""
                )}
              </Carousel.Item>

              {/* Slide 4 */}
              {portfolio.caseInfo.video04 || portfolio.caseInfo.bild04 ? (
                <Carousel.Item>
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundColor: portfolio.caseInfo.bakgrundsfarg04,
                      color: portfolio.caseInfo.textfarg04,
                    }}
                  >
                    <CaseSlide
                      video={portfolio.caseInfo.video04}
                      text={portfolio.caseInfo.bild04}
                    />
                  </div>
                </Carousel.Item>
              ) : (
                ""
              )}

              {/* Slide 5 */}
              {portfolio.caseInfo.video05 || portfolio.caseInfo.bild05 ? (
                <Carousel.Item>
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundColor: portfolio.caseInfo.bakgrundsfarg05,
                      color: portfolio.caseInfo.textfarg05,
                    }}
                  >
                    <CaseSlide
                      video={portfolio.caseInfo.video05}
                      text={portfolio.caseInfo.bild05}
                    />
                  </div>
                </Carousel.Item>
              ) : (
                ""
              )}
            </Carousel>
          </div>
        </div>
      </section>

      <section>
        <Portfolio />
      </section>
      <section>
        <Presentation />
      </section>
      <section id="#blogg" className="relative">
        <BlogCarousel />
      </section>
    </Layout>
  );
}

export default portfolioItem;

export const query = graphql`
  query($slug: String!) {
    allWpCase(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          caseInfo {
            bild01
            bild02
            bild03
            bild04
            bild05
            video01
            video02
            video03
            video04
            video05
            bakgrundsfarg01
            bakgrundsfarg02
            bakgrundsfarg03
            bakgrundsfarg04
            bakgrundsfarg05
            textfarg01
            textfarg02
            textfarg03
            textfarg04
            textfarg05
          }
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 70) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          slug
          date(formatString: "MMMM Do, Y")
          content
          id
        }
      }
    }
  }
`;
