import Head from "next/head"
import Navbar from "react-bootstrap/Navbar";
import SessionCreator from "../components/SessionCreator";

const HomePage = () => (
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
      <SessionCreator></SessionCreator>
    </main>

    <footer style={{ margin: "3rem" }}>
      <hr></hr>
      <p style={{ textAlign: "center" }}>Thrown together by <a target="_blank" href="https://github.com/chesleybrown">chesleybrown</a> 👨🏻‍💻</p>
    </footer>
  </div>
)

export default HomePage
