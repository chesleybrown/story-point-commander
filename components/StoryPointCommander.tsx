import React from "react";
import SolutionEffortSelector from "../components/SolutionEffortSelector"
import SolutionEffortMemo from "../components/SolutionEffortMemo"
import RiskMemo from "../components/RiskMemo"
import TestingEffortSelector from "../components/TestingEffortSelector"
import RiskSelector from "../components/RiskSelector"
import Summary from "../components/Summary"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoryPointDetail } from "../services/StoryPointOptions";

type Props = {
    sessionId: string
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
        this.clear = this.clear.bind(this);
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
                <SolutionEffortSelector current={this.state.currentSolutionEffortOption} onSelected={this.onSolutionEffortOptionSelected}></SolutionEffortSelector>

                <hr></hr>

                <h2>Testing</h2>
                <TestingEffortSelector current={this.state.currentTestingOption} onSelected={this.onTestingOptionSelected}></TestingEffortSelector>

                <hr></hr>

                <h2>Risk</h2>
                <RiskSelector sessionId={this.props.sessionId} onSelected={this.onRiskOptionSelected}></RiskSelector>
                <hr></hr>
                <RiskMemo></RiskMemo>

                <hr></hr>

                <h2>Summary</h2>
                <Summary sessionId={this.props.sessionId} currentSolutionEffortOption={this.state.currentSolutionEffortOption} currentTestingOption={this.state.currentTestingOption} currentRiskOption={this.state.currentRiskOption}></Summary>

                <hr></hr>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2"></Col>
                        <Col md="auto">
                            <Button size="lg" variant="danger" onClick={this.clear}>Clear</Button>
                        </Col>
                        <Col xs lg="2"></Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default StoryPointCommander
