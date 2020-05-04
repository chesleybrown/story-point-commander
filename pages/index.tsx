import Head from "next/head"
import StoryPointCommander from "../components/StoryPointCommander"

const Home = () => (
  <div>
    <Head>
      <title>Story Point Commander</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <StoryPointCommander></StoryPointCommander>
    </main>

    <footer style={{ margin: "3rem" }}>
      <hr></hr>
      <p style={{ textAlign: "center" }}>Thrown together by <a target="_blank" href="https://github.com/chesleybrown">chesleybrown</a> 👨🏻‍💻</p>
    </footer>
  </div>
)

export default Home
