import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoryPointDetail, StoryPointRiskOptions } from "../services/StoryPointOptions";
import Calculator from "../services/StoryPointCalculator";
import { FirestoreCollection } from "@react-firebase/firestore";

type Props = {
    sessionId: string,
    currentSolutionEffortOption?: StoryPointDetail,
    currentTestingOption?: StoryPointDetail,
    currentRiskOption?: StoryPointDetail
};

type State = {
};

class Summary extends React.Component<Props, State> {
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
                <FirestoreCollection path={"/sessions/" + this.props.sessionId + "/participants"} limit={100}>
                    {d => {
                        let list: React.ReactElement[] = [];
                        if (!d.value) {
                            return
                        }
                        d.value.forEach((value, index) => {
                            list.push(
                                <Row key={index}>
                                    <Col xs={1}>{value.name}</Col>
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
                                        <p>{value.riskOptionId ? StoryPointRiskOptions[value.riskOptionId].description : "…"}</p>
                                    </Col>
                                </Row>
                            )
                        });
                        return list
                        // <Row>
                        //     <Col xs={2}>

                        //         <p>{Calculator({
                        //             solutionEffortOption: this.props.currentSolutionEffortOption,
                        //             testingOption: this.props.currentTestingOption,
                        //             riskOption: this.props.currentRiskOption
                        //         })}</p>
                        //     </Col>
                        //     <Col xs={3}>
                        //         <p>{this.props.currentSolutionEffortOption ? this.props.currentSolutionEffortOption.description : "…"}</p>
                        //     </Col>
                        //     <Col xs={3}>
                        //         <p>{this.props.currentTestingOption ? this.props.currentTestingOption.description : "…"}</p>
                        //     </Col>
                        //     <Col xs={3}>
                        //         <p>{this.props.currentRiskOption ? this.props.currentRiskOption.description : "…"}</p>
                        //     </Col>
                        // </Row>
                    }}

                </FirestoreCollection>
            </Container>
        );
    }
}

export default Summary
