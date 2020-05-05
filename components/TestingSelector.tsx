import React from "react";
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoryPointOptionID, StoryPointTestingOptions } from "../services/StoryPointOptions";
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";
import Session from "./Session";

type Props = {
};

type State = {
};

class TestingSelector extends React.Component<Props, State> {
    static contextType = Session;

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <FirestoreMutation type="set" path={"/sessions/" + this.context.sessionId + "/participants/" + this.context.participantName}>
                {({ runMutation }) => {
                    let update = (id: StoryPointOptionID) => {
                        runMutation({
                            name: this.context.participantName,
                            testingOptionId: id
                        }, { merge: true }).then(res => { })
                    }
                    return (
                        <FirestoreDocument path={"/sessions/" + this.context.sessionId + "/participants/" + this.context.participantName}>
                            {d => {
                                return (!d.value) ? <span></span> : (
                                    <Container>
                                        <Row>
                                            <Col xs={12} sm={4}>
                                                <SelectableCard onClick={() => {
                                                    update(StoryPointTestingOptions.TestingBaseline.id)
                                                }} option={StoryPointTestingOptions.TestingBaseline} current={StoryPointTestingOptions[d.value.testingOptionId]}></SelectableCard>
                                            </Col>
                                            <Col xs={12} sm={4}>
                                                <SelectableCard onClick={() => {
                                                    update(StoryPointTestingOptions.TestingPlus1.id)
                                                }} option={StoryPointTestingOptions.TestingPlus1} current={StoryPointTestingOptions[d.value.testingOptionId]}></SelectableCard>
                                            </Col>
                                            <Col xs={12} sm={4}>
                                                <SelectableCard onClick={() => {
                                                    update(StoryPointTestingOptions.TestingPlus2.id)
                                                }} option={StoryPointTestingOptions.TestingPlus2} current={StoryPointTestingOptions[d.value.testingOptionId]}></SelectableCard>
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

export default TestingSelector
