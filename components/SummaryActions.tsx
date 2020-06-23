import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Session, { ShowResults, HideResults } from "../services/Session";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { FirestoreDocument } from "@react-firebase/firestore";

const SummaryActions = () => {
  const ctx = useContext(Session);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <FirestoreDocument path={"/sessions/" + ctx.sessionId}>
            {(sd) => {
              if (sd.isLoading || !sd.value) {
                return (
                  <Button variant="secondary" disabled>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </Button>
                );
              }
              if (sd.value.hidden) {
                return (
                  <Button
                    variant="primary"
                    onClick={() => {
                      ShowResults(ctx.sessionId);
                    }}
                  >
                    Show Results
                  </Button>
                );
              }
              return (
                <Button
                  variant="secondary"
                  onClick={() => {
                    HideResults(ctx.sessionId);
                  }}
                >
                  Hide Results
                </Button>
              );
            }}
          </FirestoreDocument>
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryActions;
