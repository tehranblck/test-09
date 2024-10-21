// pages/privacy-terms.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="layer -z-10"></div>
      <div className="container mx-auto pt-32 backdrop-blur-xl bg-transparent p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Datenschutzrichtlinie & Nutzungsbedingungen</h1>

        {/* Datenschutzrichtlinie */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Datenschutzrichtlinie</h2>
          <p className="mb-4">
            Ihre Privatsphäre ist uns wichtig. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen. Durch den Zugriff auf unsere Website stimmen Sie dieser Datenschutzrichtlinie zu. Wenn Sie nicht einverstanden sind, nutzen Sie unsere Website bitte nicht.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Informationen, die wir sammeln</h3>
          <p className="mb-4">
            Wir können sowohl persönliche als auch nicht persönliche Informationen von Ihnen sammeln. Persönliche Informationen umfassen Daten, die zur Identifizierung Ihrer Person verwendet werden können, wie:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Kontaktinformationen: E-Mail-Adresse, Telefonnummer oder Postanschrift.</li>
            <li>Nutzungsdaten: Informationen darüber, wie Sie unsere Website nutzen, einschließlich IP-Adressen, Browsertyp und Seitenaufrufe.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Wie wir Ihre Informationen verwenden</h3>
          <p className="mb-4">
            Wir verwenden die gesammelten Informationen für verschiedene Zwecke, einschließlich:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Zum Betrieb und zur Wartung unserer Website.</li>
            <li>Zur Kommunikation mit Ihnen und zur Beantwortung von Anfragen.</li>
            <li>Zur Analyse von Nutzungstrends und zur Verbesserung unserer Dienste.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Wie wir Ihre Informationen weitergeben</h3>
          <p className="mb-4">
            Wir verkaufen Ihre persönlichen Daten nicht. Wir können sie jedoch mit folgenden Parteien teilen:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Dienstleistern für E-Mail-, Hosting- oder Analysedienste.</li>
            <li>Öffentlichen Behörden, wenn gesetzlich erforderlich.</li>
          </ul>
        </section>

        {/* Nutzungsbedingungen */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nutzungsbedingungen</h2>
          <p className="mb-4">
            Durch den Zugriff auf und die Nutzung unserer Website erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie nicht einverstanden sind, dürfen Sie unsere Website nicht nutzen.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Urheberrechte</h3>
          <p className="mb-4">
            Alle Inhalte, Funktionen und Funktionalitäten auf dieser Website sind unser Eigentum oder das unserer Lizenzgeber und durch Urheberrechte geschützt.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Nutzerverhalten</h3>
          <p className="mb-4">
            Sie stimmen zu, unsere Website nur für rechtmäßige Zwecke zu nutzen. Verbotene Aktivitäten umfassen unbefugten Zugriff, das Übertragen von schädlichen Inhalten und die Störung der Funktionalität der Website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Haftungsausschluss</h3>
          <p className="mb-4">
            Unsere Website wird "wie gesehen" und "wie verfügbar" bereitgestellt, ohne jegliche Gewährleistungen. Wir garantieren nicht, dass die Website fehlerfrei oder sicher ist.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Haftungsbeschränkung</h3>
          <p className="mb-4">
            Wir haften nicht für Schäden, die aus der Nutzung unserer Website resultieren, einschließlich indirekter oder Folgeschäden.
          </p>
        </section>

        {/* Kontaktinformationen */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Kontaktieren Sie uns</h2>
          <p className="mb-4">
            Wenn Sie Fragen oder Bedenken bezüglich unserer Datenschutzrichtlinie oder Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter:
          </p>
          <ul className="list-inside">
            <li>Email: contact@zockerwelt-de.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
