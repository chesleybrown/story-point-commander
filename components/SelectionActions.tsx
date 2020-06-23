import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Session from "../services/Session";
import Button from "react-bootstrap/Button";
import {
  ParticipantReady,
  ClearParticipantResponses,
} from "../services/Participants";

const SelectionActions = () => {
  const ctx = useContext(Session);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button
            variant="success"
            onClick={() => {
              ParticipantReady(ctx.sessionId, ctx.participantName);
            }}
          >
            Ready
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() => {
              ClearParticipantResponses(ctx.sessionId, ctx.participantName);
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectionActions;
