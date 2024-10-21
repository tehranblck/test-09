'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../components/Button/Button';

const VideoPoker = () => {

  return (
    <div >
        <div style={{zIndex:'-1'}} className='layer'></div>
        <div style={{backdropFilter:'blur(10px)'}} className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-12 px-6 text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl w-full space-y-6">
        {/* Page Header */}
        <h1 className="text-4xl mt-12 font-bold text-center text-blue-400 mb-4">
          Video Poker
        </h1>

        {/* Game Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/Logo/videopoker.png" 
            alt="Video Poker Spiel"
            width={600}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">
            Was ist Video Poker?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Video Poker kombiniert die Strategie traditioneller Kartenspiele mit der Einfachheit des digitalen Spiels. Du entscheidest, welche Karten du behältst und welche du ablegst, was das Ergebnis direkt beeinflusst. Das macht Video Poker zu einer großartigen Wahl für diejenigen, die strategische Entscheidungen mögen.
          </p>
        </section>

        {/* How to Play Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Wie spielt man?</h2>
          <ul className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Platziere deinen Einsatz und starte das Spiel.</li>
            <li>Erhalte fünf Karten und entscheide, welche du behältst.</li>
            <li>Tausche die abgelegten Karten aus und enthülle deine endgültige Hand.</li>
            <li>Vergleiche deine Hand mit der Auszahlungstabelle, um zu sehen, ob du gewonnen hast.</li>
          </ul>
        </section>

        {/* Payouts and Winning Hands Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">
            Auszahlungen und Gewinnende Hände
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Jede Hand bietet unterschiedliche Auszahlungen, abhängig von der Kombination. Gewinnende Hände reichen von einem Paar, Drilling bis hin zu höheren Händen wie Vierlinge oder einem Royal Flush, die jeweils höhere Auszahlungen bieten.
          </p>
        </section>

        {/* Types of Video Poker Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">
            Arten von Video Poker
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Zu den häufigsten Versionen gehören:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Buben oder besser:</strong> Gewinne mit einem Paar Buben oder höher.
            </li>
            <li>
              <strong>Deuces Wild:</strong> Alle Zweien fungieren als Joker.
            </li>
            <li>
              <strong>Joker Poker:</strong> Beinhaltet eine Joker-Karte als zusätzlichen Joker.
            </li>
          </ul>
        </section>

        {/* Play Now Button */}
        <div  className="flex  justify-center mt-8">
         
         <Button buttonText="Spielen"  href={'/game/index.html'}/>
        </div>
      </div>
    </div>
        
    </div>
  );
};

export default VideoPoker;
