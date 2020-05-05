import { useRouter } from 'next/router'
import Head from "next/head"
import StoryPointCommander from "../../components/StoryPointCommander"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Spinner from "react-bootstrap/Spinner";
import { FirestoreDocument } from "@react-firebase/firestore";
import CurrentParticipant from "../../components/CurrentParticipant";

const Session = () => {
    const router = useRouter();
    const { id } = router.query;
    const name = "Chesley";

    let sessionId: string;
    if (typeof id === 'string') {
        sessionId = id;
    }

    return (
        <div>
            <Head>
                <title>Story Point Commander</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <CurrentParticipant.Provider value="Chesley">
                    <Navbar bg="light">
                        <Navbar.Brand href="#home">Story Point Commander</Navbar.Brand>
                        <Nav>
                            <Nav.Link eventKey="disabled" disabled>
                                <FirestoreDocument path={"/sessions/" + id}>
                                    {d => {
                                        return d.isLoading ? <Spinner animation="border" size="sm" /> : <span>{id}</span>;
                                    }}
                                </FirestoreDocument>
                            </Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Welcome <span>{name}</span>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                    <StoryPointCommander sessionId={sessionId}></StoryPointCommander>
                </CurrentParticipant.Provider>
            </main>

            <footer style={{ margin: "3rem" }}>
                <hr></hr>
                <p style={{ textAlign: "center" }}>Thrown together by <a target="_blank" href="https://github.com/chesleybrown">chesleybrown</a> 👨🏻‍💻</p>
            </footer>
        </div>
    )
}

export default Session
