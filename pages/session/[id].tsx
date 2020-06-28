import { useRouter } from "next/router";
import Head from "next/head";
import StoryPointCommander from "../../components/StoryPointCommander";
import Session from "../../services/Session";
import Footer from "../../components/Footer";
import SessionJoiner from "../../components/SessionJoiner";
import SessionNav from "../../components/SessionNav";

const SessionPage = () => {
  const router = useRouter();
  const { id, name } = router.query;

  let sessionId = "";
  if (typeof id === "string") {
    sessionId = id;
  }

  let participantName = "";
  if (typeof name === "string") {
    participantName = name;
  }

  const CurrentSessionContext = {
    sessionId: sessionId,
    participantName: participantName,
  };

  let content: React.ReactElement;
  if (!participantName) {
    content = <SessionJoiner></SessionJoiner>;
  } else {
    content = <StoryPointCommander></StoryPointCommander>;
  }

  return (
    <div>
      <Head>
        <title>Story Point Commander</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Session.Provider value={CurrentSessionContext}>
          <SessionNav></SessionNav>
          <br />
          {content}
        </Session.Provider>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default SessionPage;
