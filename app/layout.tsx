import "./globals.css";
import "@/node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import CookieConsent from "./components/cookie/Cookies";

export const metadata = {
  title: "Mystery Mice casino",
  description: "Social Casino England",
  icons: {
    icon: "/fav.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="description" >
        <Navbar />
        <CookieConsent />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
