import Head from "next/head"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Link from "next/link";
import { SetCurrentSessionContext } from "../components/Session";

const Home = () => (
  <div>
    <Head>
      <title>Story Point Commander</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Story Point Commander</Navbar.Brand>
      </Navbar>
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form inline>
              <FormControl onChange={(e) => {
                SetCurrentSessionContext({
                  sessionId: "rBGiHZe88uCmrgkARPTM",
                  participantName: e.target.value
                });
              }} type="text" placeholder="What's your name?" className="mr-sm-2"></FormControl>
            </Form>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Link href="/session/rBGiHZe88uCmrgkARPTM?name=Chesley">
              <Button size="lg" variant="primary">Start New Session</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </main>

    <footer style={{ margin: "3rem" }}>
      <hr></hr>
      <p style={{ textAlign: "center" }}>Thrown together by <a target="_blank" href="https://github.com/chesleybrown">chesleybrown</a> 👨🏻‍💻</p>
    </footer>
  </div>
)

export default Home
