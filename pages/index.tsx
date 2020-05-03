import Head from "next/head"
import StoryPointCommander from "../components/StoryPointCommander"

const Home = () => (
  <div className="container">
    <Head>
      <title>Story Point Commander</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <StoryPointCommander></StoryPointCommander>
    </main>

    <footer>
      <hr></hr>
      <p>Created by <a href="https://github.com/chesleybrown">chesleybrown</a></p>
    </footer>
  </div >
)

export default Home
