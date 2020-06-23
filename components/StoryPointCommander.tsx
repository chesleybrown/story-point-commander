import React from "react";
import SolutionEffortSelector from "../components/SolutionEffortSelector";
import SolutionEffortMemo from "../components/SolutionEffortMemo";
import RiskMemo from "../components/RiskMemo";
import TestingSelector from "./TestingSelector";
import RiskSelector from "../components/RiskSelector";
import Summary from "../components/Summary";
import SummaryActions from "../components/SummaryActions";
import SelectionActions from "./SelectionActions";
import Container from "react-bootstrap/Container";

const StoryPointCommander = () => {
  return (
    <Container>
      <SolutionEffortMemo></SolutionEffortMemo>

      <h3>Solution &amp; Effort</h3>
      <SolutionEffortSelector></SolutionEffortSelector>

      <hr></hr>

      <h2>Testing</h2>
      <TestingSelector></TestingSelector>

      <hr></hr>

      <h3>Risk</h3>
      <RiskSelector></RiskSelector>
      <hr></hr>
      <RiskMemo></RiskMemo>

      <SelectionActions></SelectionActions>

      <hr></hr>

      <h3>Summary</h3>
      <Summary></Summary>

      <SummaryActions></SummaryActions>
    </Container>
  );
};

export default StoryPointCommander;
