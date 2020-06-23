import Head from "next/head";
import SessionCreator from "../../components/SessionCreator";
import SessionNav from "../../components/SessionNav";
import Footer from "../../components/Footer";

const SessionCreate = () => {
  return (
    <div>
      <Head>
        <title>Story Point Commander</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SessionNav></SessionNav>
        <br />
        <SessionCreator></SessionCreator>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default SessionCreate;
