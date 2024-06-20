import Layout from "../component/layout";
import Header from "../component/header";
import Hero from "../component/hero";
import Wcus from "../component/wcus";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Wcus />
      </Layout>
    </>
  );
}
