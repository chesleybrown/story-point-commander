import Head from "next/head"
import SolutionEffortSelector from "../components/SolutionEffortSelector"
import SolutionEffortMemo from "../components/SolutionEffortMemo"
import TestingEffortSelector from "../components/TestingEffortSelector"
import RiskSelector from "../components/RiskSelector"

const Home = () => (
  <div className="container">
    <Head>
      <title>Story Point Commander</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Story Point Commander</h1>
      <SolutionEffortMemo></SolutionEffortMemo>

      <h2>Solution &amp; Effort</h2>
      <SolutionEffortSelector></SolutionEffortSelector>

      <h2>Testing</h2>
      <TestingEffortSelector></TestingEffortSelector>

      <h2>Risk</h2>
      <RiskSelector></RiskSelector>
    </main>
    <footer>
      <hr></hr>
      <p>Created by <a href="https://github.com/chesleybrown">chesleybrown</a></p>
    </footer>
  </div>
)

export default Home
