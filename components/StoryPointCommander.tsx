import React from "react";
import SolutionEffortSelector from "./SolutionEffortSelector";
import TestingSelector from "./TestingSelector";
import RiskSelector from "./RiskSelector";
import Summary from "./Summary";
import SummaryActions from "./SummaryActions";
import SelectionActions from "./SelectionActions";
import Container from "react-bootstrap/Container";

const StoryPointCommander = () => {
  return (
    <Container>
      <h5>Solution &amp; Effort</h5>
      <SolutionEffortSelector></SolutionEffortSelector>
      <hr></hr>

      <h5>Testing</h5>
      <TestingSelector></TestingSelector>
      <hr></hr>

      <h5>Risk</h5>
      <RiskSelector></RiskSelector>
      <hr></hr>

      <SelectionActions></SelectionActions>
      <hr></hr>

      <Summary></Summary>
      <SummaryActions></SummaryActions>
    </Container>
  );
};

export default StoryPointCommander;
