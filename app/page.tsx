import Banner from "./components/Banner/index";
import Companies from "./components/Companies/index";
import Work from "./components/Work/index";
import Table from "./components/Table/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import Trade from "./components/Trade/index";
import Faq from "./components/Faq/index";
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;

  return (
    <main >
      <div className="layer"/>
      <div  style={{backdropFilter:'blur(10px)'}}>
      <Banner />

<Companies />
{/* <Work /> */}
{/* <Table /> */}
<Features />
<Simple />
{/* <Trade /> */}
<Faq />
      </div>
    </main>
  );
}
