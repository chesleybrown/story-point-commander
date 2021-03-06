import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import {
  StoryPointSolutionEffortOptions,
  StoryPointTestingOptions,
  StoryPointRiskOptions,
} from "../services/StoryPointOptions";
import Calculator from "../services/StoryPointCalculator";
import {
  FirestoreDocument,
  FirestoreCollection,
} from "@react-firebase/firestore";
import Session from "../services/Session";
import { Participant } from "../services/Participants";

const Summary = () => {
  const ctx = useContext(Session);

  return (
    <FirestoreDocument path={"/sessions/" + ctx.sessionId}>
      {(sd) => {
        if (!sd.isLoading && !sd.value) {
        }
        return !sd.value ? (
          <span></span>
        ) : (
          <Container>
            <Row>
              <Col xs={3}>
                <h6>Name</h6>
              </Col>
              <Col xs={3}>
                <h6>Solution &amp; Effort</h6>
              </Col>
              <Col xs={3}>
                <h6>Testing</h6>
              </Col>
              <Col xs={3}>
                <h6>Risk</h6>
              </Col>
            </Row>
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
                d.value.forEach((value: Participant, index: number) => {
                  let badge = <span></span>;
                  if (value.ready) {
                    badge = (
                      <Badge pill variant="success">
                        Ready
                      </Badge>
                    );
                  }
                  list.push(
                    <Row key={index}>
                      <Col xs={3}>
                        {d.ids[index]}{" "}
                        {sd.value.hidden ? (
                          <span></span>
                        ) : (
                          <Badge pill variant="primary">
                            {Calculator({
                              solutionEffortOption: value.solutionEffortOptionId
                                ? StoryPointSolutionEffortOptions[
                                    value.solutionEffortOptionId
                                  ]
                                : undefined,
                              testingOption: value.testingOptionId
                                ? StoryPointTestingOptions[
                                    value.testingOptionId
                                  ]
                                : undefined,
                              riskOption: value.riskOptionId
                                ? StoryPointRiskOptions[value.riskOptionId]
                                : undefined,
                            })}
                          </Badge>
                        )}{" "}
                        {badge}
                      </Col>
                      <Col xs={3}>
                        <p>
                          {value.solutionEffortOptionId && sd.value.hidden ? (
                            <Badge pill variant="primary">
                              Selected
                            </Badge>
                          ) : value.solutionEffortOptionId ? (
                            StoryPointSolutionEffortOptions[
                              value.solutionEffortOptionId
                            ].description
                          ) : (
                            <Badge pill variant="secondary">
                              Pending
                            </Badge>
                          )}
                        </p>
                      </Col>
                      <Col xs={3}>
                        <p>
                          {value.testingOptionId && sd.value.hidden ? (
                            <Badge pill variant="primary">
                              Selected
                            </Badge>
                          ) : value.testingOptionId ? (
                            StoryPointTestingOptions[value.testingOptionId]
                              .description
                          ) : (
                            <Badge pill variant="secondary">
                              Pending
                            </Badge>
                          )}
                        </p>
                      </Col>
                      <Col xs={3}>
                        <p>
                          {value.riskOptionId && sd.value.hidden ? (
                            <Badge pill variant="primary">
                              Selected
                            </Badge>
                          ) : value.riskOptionId ? (
                            StoryPointRiskOptions[value.riskOptionId]
                              .description
                          ) : (
                            <Badge pill variant="secondary">
                              Pending
                            </Badge>
                          )}
                        </p>
                      </Col>
                    </Row>
                  );
                });
                return list;
              }}
            </FirestoreCollection>
          </Container>
        );
      }}
    </FirestoreDocument>
  );
};

export default Summary;
