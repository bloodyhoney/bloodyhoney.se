import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Presentation() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="md:flex">
      <div className="flex items-center md:w-1/2 box mango-gradient text-yellow-400">
        <div id="om" className="">
          <header>
            <div className="text-xl">Det här är</div>
            <h3 className="text-5xl font-bold mb-4">Bloody Honey</h3>
          </header>
          <div className="text-lg">
            <p>Bloody Honey är produktionsbolaget där allt är möjligt.</p>
            <p>
              Ödlor som äter choklad… dansande bakterier… barn på månen…
              kompositörer med fattig skäggväxt…
            </p>
            <p>
              Detta är bara några av historierna vi berättat tillsammans med
              våra kunder.
            </p>
            <p>
              Med ena foten i berättelsen och det andra i animationen hjälper vi
              företag med reklamfilm, företagsfilm, explainer videos samt tv- &
              filmgrafik. och inte nog med det – vi är ena riktiga djävlar på
              grafisk design och copywriting.
            </p>
            <p>
              Oavsett vad vi jobbar med är målet alltid detsamma: att berätta
              och visualisera en historia på ett kul, gripande och smittsamt
              enkelt sätt.
            </p>
          </div>
        </div>
      </div>
      <div className="items-center justify-center md:w-1/2 bg-gray-900 box text-gray-600">
        <div className="pt-32">
          <Slider {...settings}>
            <div className="text-center">
              <header>
                <h3 className="text-6xl font-bold text-yellow-400">&rdquo;</h3>
              </header>
              <div className="text-pink-500 font-bold text-3xl mb-8 italic">
                Bloody Honey är helt enkelt världens bästa produktionsbolag
              </div>
              <div className="text-2xl text-yellow-400">
                - Sveriges Television
              </div>
            </div>
            <div className="text-center">
              <header>
                <h3 className="text-6xl font-bold text-yellow-400">&rdquo;</h3>
              </header>
              <div className="text-pink-500 font-bold text-3xl mb-8 italic">
                Vi är supernöjda med Bloody Honey
              </div>
              <div className="text-2xl text-yellow-400">- Netflix</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
