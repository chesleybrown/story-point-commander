import React from "react";
import SolutionEffortSelector from "../components/SolutionEffortSelector"
import SolutionEffortMemo from "../components/SolutionEffortMemo"
import RiskMemo from "../components/RiskMemo"
import TestingSelector from "./TestingSelector"
import RiskSelector from "../components/RiskSelector"
import Summary from "../components/Summary"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

                <hr></hr>

                <h2>Summary</h2>
                <Summary></Summary>

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
