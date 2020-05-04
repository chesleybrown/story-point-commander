import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoryPointDetail } from "../services/StoryPointOptions";
import Calculator from "../services/StoryPointCalculator";

type Props = {
    currentSolutionEffortOption?: StoryPointDetail,
    currentTestingOption?: StoryPointDetail,
    currentRiskOption?: StoryPointDetail
};

type State = {
};

class RiskSelector extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={2}><h3>Story Points</h3></Col>
                    <Col xs={3}><h3>Solution &amp; Effort</h3></Col>
                    <Col xs={3}><h3>Effort</h3></Col>
                    <Col xs={3}><h3>Testing</h3></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <p>{Calculator({
                            solutionEffortOption: this.props.currentSolutionEffortOption,
                            testingOption: this.props.currentTestingOption,
                            riskOption: this.props.currentRiskOption
                        })}</p>
                    </Col>
                    <Col xs={3}>
                        <p>{this.props.currentSolutionEffortOption ? this.props.currentSolutionEffortOption.description : "…"}</p>
                    </Col>
                    <Col xs={3}>
                        <p>{this.props.currentTestingOption ? this.props.currentTestingOption.description : "…"}</p>
                    </Col>
                    <Col xs={3}>
                        <p>{this.props.currentRiskOption ? this.props.currentRiskOption.description : "…"}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RiskSelector
