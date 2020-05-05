import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { StoryPointSolutionEffortOptions, StoryPointTestingOptions, StoryPointRiskOptions } from "../services/StoryPointOptions";
import Calculator from "../services/StoryPointCalculator";
import { FirestoreCollection } from "@react-firebase/firestore";
import Session from "./Session";

type Props = {
};

type State = {
};

class Summary extends React.Component<Props, State> {
    static contextType = Session;

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={1}><h3>Name</h3></Col>
                    <Col xs={2}><h3>Story Points</h3></Col>
                    <Col xs={3}><h3>Solution &amp; Effort</h3></Col>
                    <Col xs={3}><h3>Testing</h3></Col>
                    <Col xs={3}><h3>Risk</h3></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <FirestoreCollection path={"/sessions/" + this.context.sessionId + "/participants"} limit={100}>
                    {d => {
                        let list: React.ReactElement[] = [];
                        if (d.isLoading) {
                            return (
                                <Row className="justify-content-md-center">
                                    <Col md="auto">
                                        <Spinner animation="border"></Spinner>
                                    </Col>
                                </Row>
                            )
                        }
                        if (!d.value) {
                            return
                        }
                        d.value.forEach((value, index) => {
                            list.push(
                                <Row key={index}>
                                    <Col xs={1}>{d.ids[index]}</Col>
                                    <Col xs={2}>

                                        <p>{Calculator({
                                            solutionEffortOption: StoryPointSolutionEffortOptions[value.solutionEffortOptionId],
                                            testingOption: StoryPointTestingOptions[value.testingOptionId],
                                            riskOption: StoryPointRiskOptions[value.riskOptionId]
                                        })}</p>
                                    </Col>
                                    <Col xs={3}>
                                        <p>{value.solutionEffortOptionId ? StoryPointSolutionEffortOptions[value.solutionEffortOptionId].description : "…"}</p>
                                    </Col>
                                    <Col xs={3}>
                                        <p>{value.testingOptionId ? StoryPointTestingOptions[value.testingOptionId].description : "…"}</p>
                                    </Col>
                                    <Col xs={3}>
                                        <p>{value.riskOptionId ? StoryPointRiskOptions[value.riskOptionId].description : "…"}</p>
                                    </Col>
                                </Row>
                            )
                        });
                        return list
                    }}

                </FirestoreCollection>
            </Container>
        );
    }
}

export default Summary
