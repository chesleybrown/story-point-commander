import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Session, { ShowResults, HideResults } from "../services/Session";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Participant } from "../services/Participants";
import { ClearAllParticipantResponses } from "../services/Participants";
import {
  FirestoreDocument,
  FirestoreCollection,
} from "@react-firebase/firestore";

const SummaryActions = () => {
  const ctx = useContext(Session);

  let clearAllButton = (
    <Button
      variant="danger"
      onClick={() => {
        ClearAllParticipantResponses(ctx.sessionId);
      }}
    >
      Clear All
    </Button>
  );

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

              return (
                <FirestoreCollection
                  path={"/sessions/" + ctx.sessionId + "/participants"}
                  limit={100}
                >
                  {(d) => {
                    let list: React.ReactElement[] = [];
                    if (d.isLoading) {
                      return (
                        <Row className="justify-content-md-center">
                          <Col md="auto">
                            <Spinner animation="border"></Spinner>
                          </Col>
                        </Row>
                      );
                    }
                    if (!d.value) {
                      return;
                    }
                    let showAllDisabled = true;
                    let readyCount = 0;
                    d.value.forEach((value: Participant) => {
                      if (value.ready) {
                        readyCount++;
                      }
                    });
                    // If all participants are ready, we want to enable the Show button
                    if (readyCount == d.value.length) {
                      showAllDisabled = false;
                    }
                    if (sd.value.hidden) {
                      if (showAllDisabled) {
                        return (
                          <div>
                            <OverlayTrigger
                              placement="bottom"
                              overlay={
                                <Tooltip id="tooltip-show-results">
                                  Everyone must be <strong>Ready</strong> to
                                  show results
                                </Tooltip>
                              }
                            >
                              <Button
                                variant="primary"
                                disabled={true}
                                onClick={() => {
                                  ShowResults(ctx.sessionId);
                                }}
                              >
                                Show Results
                              </Button>
                            </OverlayTrigger>{" "}
                            {clearAllButton}
                          </div>
                        );
                      }
                      return (
                        <div>
                          <Button
                            variant="primary"
                            onClick={() => {
                              ShowResults(ctx.sessionId);
                            }}
                          >
                            Show Results
                          </Button>{" "}
                          {clearAllButton}
                        </div>
                      );
                    }
                    return (
                      <div>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            HideResults(ctx.sessionId);
                          }}
                        >
                          Hide Results
                        </Button>{" "}
                        {clearAllButton}
                      </div>
                    );
                  }}
                </FirestoreCollection>
              );
            }}
          </FirestoreDocument>
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryActions;
