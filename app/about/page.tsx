"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const navigateToMoreInfo = () => {
    router.push('/more-info'); // Ersetze durch die tatsächliche Route zu einer detaillierten Informationsseite, falls vorhanden
  };

  return (
    <div className="flex container mx-auto flex-col items-center justify-center min-h-screen bg-gray-800 text-white  px-6">
      <div style={{ zIndex: '-1' }} className="layer top-0"></div>
      <div style={{ backdropFilter: 'blur(10px)' }}>
      
      <div className="bg-gray-700 pt-24 rounded-lg mt-16 shadow-lg p-8  w-full ">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Kostenlose Social-Gaming-Erfahrung
        </h1>

        {/* Introduction Section */}
        <section className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Social Gaming bietet eine fantastische Möglichkeit, verschiedene Spiele zu genießen und sich in einer virtuellen Umgebung mit anderen zu verbinden. Im Gegensatz zu traditionellen Spielmodi sind Social Games ausschließlich zum Spaß gedacht und bieten den Spielern die Möglichkeit, verschiedene Spielstile zu erkunden, Fähigkeiten aufzubauen und einzigartige Erlebnisse mit Freunden zu teilen.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Hauptmerkmale von Social Games</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Zugriff auf Spiele jederzeit und überall, nur mit einer Internetverbindung.</li>
            <li>Genießen Sie entspanntes, freundliches Gameplay, das für alle Fähigkeitsstufen geeignet ist.</li>
            <li>Treten Sie in Ranglisten an und stellen Sie sich Herausforderungen mit Freunden.</li>
            <li>Erleben Sie kontinuierliche Updates mit neuen Levels, Themen und Events.</li>
          </ul>
        </section>

        {/* Types of Social Games Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Arten von Social Games</h2>
          <p className="text-gray-300 leading-relaxed">
            Social Games decken eine breite Palette von Genres ab, von Rätseln und Wortspielen bis hin zu Abenteuer- und Simulationsspielen. Diese Spiele können allein oder mit anderen gespielt werden und beinhalten oft Funktionen, die Zusammenarbeit und freundlichen Wettbewerb fördern. Hier sind einige beliebte Arten von Social Games:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Rätselspiele:</strong> Lösen Sie herausfordernde Rätsel und Denksportaufgaben, die Sie mit Freunden teilen können.
            </li>
            <li>
              <strong>Strategiespiele:</strong> Planen und bauen Sie virtuelle Welten, treffen Sie Entscheidungen und arbeiten Sie mit anderen zusammen.
            </li>
            <li>
              <strong>Simulationsspiele:</strong> Verwalten Sie virtuelle Gemeinschaften oder Lebensstile und entdecken Sie eine Vielzahl kreativer Möglichkeiten.
            </li>
          </ul>
        </section>

        {/* Community and Social Interaction Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Gemeinschaft und soziale Interaktion</h2>
          <p className="text-gray-300 leading-relaxed">
            Social Games sind darauf ausgelegt, Menschen zusammenzubringen. Sie beinhalten oft Chat-Funktionen, soziale Medienintegration und die Möglichkeit, Gruppen oder Teams zu bilden. Viele Spieler genießen es, Erfolge zu teilen, in Ranglisten zu konkurrieren und zusammenzuarbeiten, um Herausforderungen zu meistern. Diese Elemente schaffen ein Gemeinschaftsgefühl und machen Social Gaming zu einer mitreißenden Erfahrung.
          </p>
        </section>

        {/* More Information Button */}
       
      </div>
    </div>
    </div>
  );
};

export default Page;
