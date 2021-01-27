/* eslint react/prop-types: 0 */

import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Portfolio from "../components/portfolio/Portfolio";
// import SimpleCarousel from "simple-react-carousel";
import loadable from "@loadable/component";
const SimpleCarousel = loadable(() => import("simple-react-carousel"));
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import BackgroundImage from "gatsby-background-image";
import CaseSlide from "../components/portfolio/CaseSlide";
import Presentation from "../components/index/Presentation";
import BlogCarousel from "../components/blog/BlogCarousel";

function portfolioItem({ data }) {
  const portfolio = data.wpCase;

  const bgImage1 =
    portfolio.caseInfo.video01Cover?.localFile.childImageSharp.fluid;

  const bgImage2 =
    portfolio.caseInfo.video02Cover?.localFile.childImageSharp.fluid;
  const bgImage3 =
    portfolio.caseInfo.video03Cover?.localFile.childImageSharp.fluid;
  const bgImage4 =
    portfolio.caseInfo.video04Cover?.localFile.childImageSharp.fluid;
  const bgImage5 =
    portfolio.caseInfo.video05Cover?.localFile.childImageSharp.fluid;
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section className="h-full case-slider-wrapper ">
        <SimpleCarousel
          controlsOptions={{}}
          indicatorOptions={{
            shape: "circle",
            height: "10px",
            width: "10px",
            activeColor: "#ff12aa",
          }}
        >
          {/* Slide 1 */}
          {portfolio.caseInfo.video01 ||
            (portfolio.caseInfo.bild01 && (
              <BackgroundImage
                Tag="section"
                fluid={!portfolio.caseInfo.video01 ? bgImage1 : null}
                keepStatic
              >
                <div
                  className={`${
                    !portfolio.caseInfo.video01 ? `bg-black bg-opacity-75` : ``
                  } h-full`}
                >
                  <div className="h-full py-32">
                    <CaseSlide
                      video={portfolio.caseInfo.video01}
                      text={portfolio.caseInfo.bild01}
                    />
                  </div>
                </div>
              </BackgroundImage>
            ))}
          {/* Slide 2 */}
          {portfolio.caseInfo.video02 ||
            (portfolio.caseInfo.bild02 && (
              <BackgroundImage
                Tag="section"
                fluid={!portfolio.caseInfo.video02 ? bgImage2 : null}
                keepStatic
              >
                <div
                  className={`${
                    !portfolio.caseInfo.video02 ? `bg-black bg-opacity-75` : ``
                  } h-full`}
                >
                  <div className="h-full py-32">
                    <CaseSlide
                      video={portfolio.caseInfo.video02}
                      text={portfolio.caseInfo.bild02}
                    />
                  </div>
                </div>
              </BackgroundImage>
            ))}
          {/* Slide 3 */}
          {portfolio.caseInfo.video03 ||
            (portfolio.caseInfo.bild03 && (
              <BackgroundImage
                Tag="section"
                fluid={!portfolio.caseInfo.video01 ? bgImage3 : null}
                keepStatic
              >
                <div
                  className={`${
                    !portfolio.caseInfo.video03 ? `bg-black bg-opacity-75` : ``
                  } h-full`}
                >
                  <div className="h-full py-32">
                    <CaseSlide
                      video={portfolio.caseInfo.video03}
                      text={portfolio.caseInfo.bild03}
                    />
                  </div>
                </div>
              </BackgroundImage>
            ))}
          {/* Slide 4 */}
          {portfolio.caseInfo.video04 ||
            (portfolio.caseInfo.bild04 && (
              <BackgroundImage
                Tag="section"
                fluid={!portfolio.caseInfo.video04 ? bgImage4 : null}
                keepStatic
              >
                <div
                  className={`${
                    !portfolio.caseInfo.video04 ? `bg-black bg-opacity-75` : ``
                  } h-full`}
                >
                  <div className="h-full py-32">
                    <CaseSlide
                      video={portfolio.caseInfo.video04}
                      text={portfolio.caseInfo.bild04}
                    />
                  </div>
                </div>
              </BackgroundImage>
            ))}
          {/* Slide 5 */}
          {portfolio.caseInfo.video05 ||
            (portfolio.caseInfo.bild05 && (
              <BackgroundImage
                Tag="section"
                fluid={!portfolio.caseInfo.video05 ? bgImage5 : null}
                keepStatic
              >
                <div
                  className={`${
                    !portfolio.caseInfo.video05 ? `bg-black bg-opacity-75` : ``
                  } h-full`}
                >
                  <div className="h-full py-32">
                    <CaseSlide
                      video={portfolio.caseInfo.video05}
                      text={portfolio.caseInfo.bild05}
                    />
                  </div>
                </div>
              </BackgroundImage>
            ))}
        </SimpleCarousel>
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
    wpCase(slug: { eq: $slug }) {
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
        video01Cover {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        video02Cover {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        video03Cover {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        video04Cover {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        video05Cover {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        bakgrundsfarg01
        bakgrundsfarg02
        bakgrundsfarg03
        bakgrundsfarg04
        bakgrundsfarg05
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
`;
