import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Session from "./Session"
import Button from "react-bootstrap/Button"
import { ParticipantReady, ClearParticipantResponses } from "../services/Participants"

type Props = {}

type State = {}

class SelectionActions extends React.Component<Props, State> {
    static contextType = Session;

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="success" onClick={() => {
                            ParticipantReady(this.context.sessionId, this.context.participantName)
                        }}>Ready</Button>
                        {" "}
                        <Button variant="danger" onClick={() => {
                            ClearParticipantResponses(this.context.sessionId, this.context.participantName)
                        }}>Clear</Button>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default SelectionActions
