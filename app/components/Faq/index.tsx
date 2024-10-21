// pages/InfoComponent.tsx
"use client";
import Image from "next/image";

interface InfoSection {
  title: string;
  content: string;
}

const infoSections: InfoSection[] = [
  {
    title: "Was sind Social-Casino-Spiele?",
    content:
      "Social-Casino-Spiele sind kostenlose Spiele, die Casino-ähnliche Spielerlebnisse simulieren. Im Gegensatz zu traditionellen Casinospielen verwenden sie virtuelle Währungen, sodass es keine tatsächlichen Auszahlungen oder finanziellen Risiken gibt.",
  },
  {
    title: "Vorteile unserer Spiele",
    content:
      "Diese Spiele bieten Unterhaltung und soziale Interaktionen, ohne echtes Geld zu benötigen. Sie bieten den Spielern die Möglichkeit, beliebte Casino-ähnliche Spiele zu genießen, während sie mit Freunden in Kontakt treten, Erfolge teilen und auf Ranglisten konkurrieren.",
  },
  {
    title: "Beliebte Spieltypen",
    content:
      "Social-Casino-Spiele umfassen eine Vielzahl von Spieltypen wie Slots, Poker und Blackjack. Spieler können diese Spiele auf verschiedenen Geräten genießen und an täglichen Herausforderungen, Quests und Events teilnehmen, um Belohnungen im Spiel zu erhalten.",
  },
  {
    title: "Zugänglichkeit und Verfügbarkeit",
    content:
      "Social-Casino-Spiele sind auf Mobilgeräten, Tablets und Computern weit verbreitet. Viele Spiele können über Apps oder Webbrowser gespielt werden, was ein bequemes Spielen unterwegs ermöglicht. Diese Spiele sind in der Regel kostenlos herunterzuladen und zu spielen.",
  },
  
];

const InfoComponent = () => {
  return (
    <div className="my-20 px-6" id="info-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-6">
        Erfahren Sie mehr über unsere Spiele
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish ">
        Entdecken Sie verschiedene Aspekte von Social-Casino-Spielen, einschließlich ihrer Vorteile, Zugänglichkeit und Sicherheit.
      </p>

      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Image Section */}
        {/* <div className="w-full flex justify-center my-8">
          <Image
            src="/images/Info/infographic.svg"
            alt="info-image"
            width={941}
            height={379}
          />
        </div> */}

        {/* Informational Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-4 pt-8">
          {infoSections.map((section, index) => (
            <div
              className="bg-[#2323239d] rounded-lg p-6 shadow-md text-offwhite"
              key={index}
            >
              <h4 className="text-2xl font-semibold mb-4">{section.title}</h4>
              <p className="text-md text-bluish font-normal opacity-90">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
