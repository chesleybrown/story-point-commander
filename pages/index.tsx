import Head from "next/head"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
          <Col xs lg="2"></Col>
          <Col md="auto">
            <Button size="lg" variant="primary">Start New Session</Button>
          </Col>
          <Col xs lg="2"></Col>
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
