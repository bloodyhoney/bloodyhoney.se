import React from "react";

function Presentation() {
  return (
    <div className="md:flex">
      <div className="flex items-center md:w-1/2 box mango-gradient text-yellow-400">
        <div className="">
          <header>
            <div className="font-bold text-xl">Det här är</div>
            <h3 className="text-4xl font-bold">Bloody Honey</h3>
          </header>
          <div>
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
      <div className="flex items-center md:w-1/2 bg-teal-400 box text-yellow-400">
        <div className="">
          <header>
            <h3 className="text-2xl font-bold">Sagt om oss</h3>
          </header>
          <div>
            <p>Bloody Honey är produktionsbolaget där allt är möjligt.</p>
            <p>
              Ödlor som äter choklad… dansande bakterier… barn på månen…
              kompositörer med fattig skäggväxt…
            </p>
            <p>
              Detta är bara några av historierna vi berättat tillsammans med
              våra kunder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
