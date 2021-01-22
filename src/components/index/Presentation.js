import React from "react";

import Quotes from "./Quotes";
function Presentation() {
  return (
    <div className="lg:flex testimonials">
      <div className="flex items-center lg:w-1/2 p-4 md:p-16 mango-gradient text-yellow-400">
        <div className="">
          <header id="om">
            <div className="text-xl">Det här är</div>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Bloody Honey
            </h3>
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
      <div className="flex-1 flex flex-wrap items-center justify-center lg:w-1/2 p-8 md:p-8 bg-gray-900 box text-gray-600">
        <div className="w-full">
          <Quotes />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
