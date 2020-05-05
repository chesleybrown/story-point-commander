import Head from "next/head"
import Navbar from "react-bootstrap/Navbar";
import SessionCreator from "../components/SessionCreator";
import Footer from "../components/Footer"

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

    <Footer></Footer>
  </div>
)

export default HomePage
