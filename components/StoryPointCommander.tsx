import React from "react";
import SolutionEffortSelector from "../components/SolutionEffortSelector"
import SolutionEffortMemo from "../components/SolutionEffortMemo"
import TestingEffortSelector from "../components/TestingEffortSelector"
import RiskSelector from "../components/RiskSelector"
import Summary from "../components/Summary"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoryPointOptionID, StoryPointRiskOptions, StoryPointDetail } from "../services/StoryPointOptions";

type Props = {
};

type State = {
    currentSolutionEffortOption?: StoryPointDetail
    currentTestingOption?: StoryPointDetail
    currentRiskOption?: StoryPointDetail
};

class StoryPointCommander extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            currentSolutionEffortOption: null,
            currentTestingOption: null,
            currentRiskOption: null
        };
        this.onSolutionEffortOptionSelected = this.onSolutionEffortOptionSelected.bind(this);
        this.onTestingOptionSelected = this.onTestingOptionSelected.bind(this);
        this.onRiskOptionSelected = this.onRiskOptionSelected.bind(this);
    }

    onSolutionEffortOptionSelected(selected: StoryPointDetail) {
        this.setState({
            currentSolutionEffortOption: selected
        })
    }

    onTestingOptionSelected(selected: StoryPointDetail) {
        this.setState({
            currentTestingOption: selected
        })
    }

    onRiskOptionSelected(selected: StoryPointDetail) {
        this.setState({
            currentRiskOption: selected
        })
    }

    render() {
        return (
            <Container>
                <h1>Story Point Commander</h1>
                <SolutionEffortMemo></SolutionEffortMemo>

                <h2>Solution &amp; Effort</h2>
                <SolutionEffortSelector onSelected={this.onSolutionEffortOptionSelected}></SolutionEffortSelector>

                <h2>Testing</h2>
                <TestingEffortSelector onSelected={this.onTestingOptionSelected}></TestingEffortSelector>

                <h2>Risk</h2>
                <RiskSelector onSelected={this.onRiskOptionSelected}></RiskSelector>

                <hr></hr>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2"></Col>
                        <Col md="auto"><Button size="lg" variant="success">Done</Button></Col>
                        <Col xs lg="2"></Col>
                    </Row>
                </Container>

                <h2>Summary</h2>
                <Summary currentSolutionEffortOption={this.state.currentSolutionEffortOption} currentTestingOption={this.state.currentTestingOption} currentRiskOption={this.state.currentRiskOption}></Summary>
            </Container>
        );
    }
}

export default StoryPointCommander
