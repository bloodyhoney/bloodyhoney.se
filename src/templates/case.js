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
  console.log(bgImage1);
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
              {portfolio.caseInfo.video01 || portfolio.caseInfo.bild01 ? (
                <div className="h-full py-32">
                  <CaseSlide
                    video={portfolio.caseInfo.video01}
                    text={portfolio.caseInfo.bild01}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </BackgroundImage>
          {/* Slide 2 */}
          <div className="h-full">
            {portfolio.caseInfo.video02 || portfolio.caseInfo.bild02 ? (
              <div className="h-full">
                <CaseSlide
                  video={portfolio.caseInfo.video02}
                  text={portfolio.caseInfo.bild02}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Slide 3 */}
          <div className="h-full w-full">
            {portfolio.caseInfo.video03 || portfolio.caseInfo.bild03 ? (
              <div className="h-full">
                <CaseSlide
                  video={portfolio.caseInfo.video03}
                  text={portfolio.caseInfo.bild03}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Slide 4 */}
          <div className="h-full w-full">
            {portfolio.caseInfo.video04 || portfolio.caseInfo.bild04 ? (
              <div className="h-full">
                <CaseSlide
                  video={portfolio.caseInfo.video04}
                  text={portfolio.caseInfo.bild04}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Slide 5 */}
          <div className="h-full w-full">
            {portfolio.caseInfo.video05 || portfolio.caseInfo.bild05 ? (
              <div className="h-full">
                <CaseSlide
                  video={portfolio.caseInfo.video05}
                  text={portfolio.caseInfo.bild05}
                />
              </div>
            ) : (
              ""
            )}
          </div>
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

// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="w-16 next hover:opacity-75 transform rotate-180"
//     >
//       <svg
//         version="1.1"
//         id="Capa_1"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 451.846 451.847"
//         fill="#ffffff"
//       >
//         <g>
//           <path
//             d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
// 		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
// 		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
//           />
//         </g>
//       </svg>
//     </button>
//   );
// }
// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <button onClick={onClick} className="w-16 prev hover:opacity-75">
//       <svg
//         version="1.1"
//         id="Layer_1"
//         xmlns="http://www.w3.org/2000/svg"
//         x="0px"
//         y="0px"
//         viewBox="0 0 492 492"
//         fill="#ffffff"
//       >
//         <g>
//           <g>
//             <path
//               d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
// 			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
// 			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
// 			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
//             />
//           </g>
//         </g>
//       </svg>
//     </button>
//   );
// }

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
        bild01

        video01Cover {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        bakgrundsfarg01
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
