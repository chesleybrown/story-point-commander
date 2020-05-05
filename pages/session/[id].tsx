import { useRouter } from 'next/router'
import Head from "next/head"
import StoryPointCommander from "../../components/StoryPointCommander"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Spinner from "react-bootstrap/Spinner";
import { FirestoreDocument } from "@react-firebase/firestore";
import Session from "../../components/Session";
import Footer from "../../components/Footer";

const SessionPage = () => {
    const router = useRouter();
    const { id, name } = router.query;

    let sessionId: string;
    if (typeof id === 'string') {
        sessionId = id;
    }

    let participantName: string;
    if (typeof name === 'string') {
        participantName = name;
    }

    const CurrentSessionContext = {
        sessionId: sessionId,
        participantName: participantName
    }

    return (
        <div>
            <Head>
                <title>Story Point Commander</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Session.Provider value={CurrentSessionContext}>
                    <Navbar bg="light">
                        <Navbar.Brand href="#home">Story Point Commander</Navbar.Brand>
                        <Nav>
                            <Nav.Link eventKey="disabled" disabled>
                                <FirestoreDocument path={"/sessions/" + CurrentSessionContext.sessionId}>
                                    {d => {
                                        return d.isLoading ? <Spinner animation="border" size="sm" /> : <span>{CurrentSessionContext.sessionId}</span>;
                                    }}
                                </FirestoreDocument>
                            </Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Welcome <span>{CurrentSessionContext.participantName}</span>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                    <StoryPointCommander></StoryPointCommander>
                </Session.Provider>
            </main>

            <Footer></Footer>
        </div>
    )
}

export default SessionPage
