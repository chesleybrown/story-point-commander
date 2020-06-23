import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Session, { ShowResults, HideResults } from "../services/Session";
import Button from "react-bootstrap/Button";

const SummaryActions = () => {
  const ctx = useContext(Session);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button
            variant="primary"
            onClick={() => {
              ShowResults(ctx.sessionId);
            }}
          >
            Show Results
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={() => {
              HideResults(ctx.sessionId);
            }}
          >
            Hide Results
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryActions;
