import Banner from "./components/Banner/index";
import Companies from "./components/Companies/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import InfoComponent from "./components/Faq/index";
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
<InfoComponent />
      </div>
    </main>
  );
}
