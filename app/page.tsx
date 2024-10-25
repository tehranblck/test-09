import Banner from "./components/Banner/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import InfoComponent from "./components/Faq/index";
import './globals.css'
import CookieConsent from "./components/cookie/Cookies";
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;

  return (
    <main  >
      <div className="layer"/>
      <div className="div"></div>
      <div  style={{backdropFilter:'blur(10px)',width:'100%',height:'auto'}}>
      <Banner />

{/* <Companies /> */}
{/* <Work /> */}
{/* <Simple /> */}
{/* <Table /> */}
<Features />

{/* <Trade /> */}
<InfoComponent />
      </div>
    </main>
  );
}
