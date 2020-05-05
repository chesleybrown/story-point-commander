import React from "react";
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { StoryPointOptionID, StoryPointSolutionEffortOptions } from "../services/StoryPointOptions";
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";
import Session from "./Session";

type Props = {
};

type State = {
};

class SolutionEffortSelector extends React.Component<Props, State> {
    static contextType = Session;

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <FirestoreMutation type="set" path={"/sessions/" + this.context.sessionId + "/participants/" + this.context.participantName}>
                {({ runMutation }) => {
                    let update = async (id?: StoryPointOptionID) => {
                        interface Participant {
                            name?: string,
                            solutionEffortOptionId?: string
                        }
                        let p: Participant = {};
                        if (this.context.name) {
                            p.name = this.context.participantName
                        }
                        if (id) {
                            p.solutionEffortOptionId = id;
                        }
                        await runMutation(p, { merge: true })
                    }
                    return (
                        <FirestoreDocument path={"/sessions/" + this.context.sessionId + "/participants/" + this.context.participantName}>
                            {d => {
                                if (!d.isLoading && !d.value) {
                                    // Create participant if they don't already exist
                                    update();
                                }
                                return (!d.value) ? <span></span> : (
                                    <Container>
                                        <Row>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Brief1.id)
                                            }} option={StoryPointSolutionEffortOptions.Brief1} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Solution1.id)
                                            }} option={StoryPointSolutionEffortOptions.Solution1} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Effort1.id)
                                            }} option={StoryPointSolutionEffortOptions.Effort1} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                        </Row>
                                        <Row>
                                            <Col><hr></hr></Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Brief2.id)
                                            }} option={StoryPointSolutionEffortOptions.Brief2} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Solution2.id)
                                            }} option={StoryPointSolutionEffortOptions.Solution2} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Effort2.id)
                                            }} option={StoryPointSolutionEffortOptions.Effort2} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                        </Row>
                                        <Row>
                                            <Col><hr></hr></Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Brief3.id)
                                            }} option={StoryPointSolutionEffortOptions.Brief3} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Solution3.id)
                                            }} option={StoryPointSolutionEffortOptions.Solution3} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Effort3.id)
                                            }} option={StoryPointSolutionEffortOptions.Effort3} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                        </Row>
                                        <Row>
                                            <Col><hr></hr></Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Brief5.id)
                                            }} option={StoryPointSolutionEffortOptions.Brief5} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Solution5.id)
                                            }} option={StoryPointSolutionEffortOptions.Solution5} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Effort5.id)
                                            }} option={StoryPointSolutionEffortOptions.Effort5} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                        </Row>
                                        <Row>
                                            <Col><hr></hr></Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Brief8.id)
                                            }} option={StoryPointSolutionEffortOptions.Brief8} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Solution8.id)
                                            }} option={StoryPointSolutionEffortOptions.Solution8} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Effort8.id)
                                            }} option={StoryPointSolutionEffortOptions.Effort8} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                        </Row>
                                        <Row>
                                            <Col><hr></hr></Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Brief13.id)
                                            }} option={StoryPointSolutionEffortOptions.Brief13} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Solution13.id)
                                            }} option={StoryPointSolutionEffortOptions.Solution13} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                            <Col xs={12} sm={4}><SelectableCard onClick={() => {
                                                update(StoryPointSolutionEffortOptions.Effort13.id)
                                            }} option={StoryPointSolutionEffortOptions.Effort13} current={StoryPointSolutionEffortOptions[d.value.solutionEffortOptionId]}></SelectableCard></Col>
                                        </Row>
                                        <Row>
                                            <Col><hr></hr></Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Alert variant="warning">
                                                    Anything you feel would be greater than <strong>13</strong> story points should be broken down into smaller tasks before estimating further. Try adding a <strong>discovery task</strong> to help understand the <strong>scope of the work</strong> better.
                                            </Alert>
                                            </Col>
                                        </Row>
                                    </Container>
                                )
                            }}
                        </FirestoreDocument>
                    )
                }}
            </FirestoreMutation>
        );
    }
}

export default SolutionEffortSelector
