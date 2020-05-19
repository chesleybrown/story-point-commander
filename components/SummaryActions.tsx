import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { StoryPointSolutionEffortOptions, StoryPointTestingOptions, StoryPointRiskOptions } from "../services/StoryPointOptions";
import { FirestoreMutation } from "@react-firebase/firestore";
import Session, { ShowResults, HideResults } from "./Session";
import Button from "react-bootstrap/Button";
import { ParticipantReady, ClearParticipantResponses } from "../services/Participants";

type Props = {
};

type State = {
};

class SummaryActions extends React.Component<Props, State> {
    static contextType = Session;

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="primary" onClick={() => {
                            ShowResults(this.context.sessionId)
                        }}>Show Results</Button> <Button variant="secondary" onClick={() => {
                            HideResults(this.context.sessionId)
                        }}>Hide Results</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SummaryActions
