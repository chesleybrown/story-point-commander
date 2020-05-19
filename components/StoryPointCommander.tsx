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

type Props = {
};

type State = {
};

class StoryPointCommander extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.clear = this.clear.bind(this);
    }

    clear() {
        this.setState({
            currentSolutionEffortOption: null,
            currentTestingOption: null,
            currentRiskOption: null
        })
    }

    render() {
        return (
            <Container>
                <SolutionEffortMemo></SolutionEffortMemo>

                <h2>Solution &amp; Effort</h2>
                <SolutionEffortSelector></SolutionEffortSelector>

                <hr></hr>

                <h2>Testing</h2>
                <TestingSelector></TestingSelector>

                <hr></hr>

                <h2>Risk</h2>
                <RiskSelector></RiskSelector>
                <hr></hr>
                <RiskMemo></RiskMemo>

                <SelectionActions></SelectionActions>

                <hr></hr>

                <h2>Summary</h2>
                <Summary></Summary>

                <SummaryActions></SummaryActions>
            </Container>
        );
    }
}

export default StoryPointCommander
