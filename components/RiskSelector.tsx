import React from "react";
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { StoryPointOptionID, StoryPointDetail, StoryPointRiskOptions } from "../services/StoryPointOptions";
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";

type Props = {
    sessionId: string
    onSelected?: (option: StoryPointDetail) => void
};

type State = {
};

class RiskSelector extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.selected = this.selected.bind(this);
    }

    selected(detail: StoryPointDetail) {
        if (this.props.onSelected) {
            this.props.onSelected(detail);
        }
    }

    render() {
        return (

            <FirestoreMutation type="set" path={"/sessions/" + this.props.sessionId + "/participants/wvyqp45U48XtuMpsj2BV"}>
                {({ runMutation }) => {
                    let update = function (id: StoryPointOptionID) {
                        runMutation({
                            name: "Chesley",
                            riskOptionId: id
                        }, { merge: true }).then(res => {
                            console.log("Ran mutation ", res);
                        })
                    }
                    return (
                        <FirestoreDocument path={"/sessions/" + this.props.sessionId + "/participants/wvyqp45U48XtuMpsj2BV"}>
                            {d => {
                                return (!d.value) ? <span></span> : (
                                    <Container>
                                        <Row>
                                            <Col xs={12} sm={4}>
                                                <SelectableCard onClick={() => {
                                                    update(StoryPointRiskOptions.RiskBaseline.id)
                                                }} option={StoryPointRiskOptions.RiskBaseline} current={StoryPointRiskOptions[d.value.riskOptionId]}></SelectableCard>
                                            </Col>
                                            <Col xs={12} sm={4}>
                                                <SelectableCard onClick={() => {
                                                    update(StoryPointRiskOptions.RiskPlus1.id)
                                                }} option={StoryPointRiskOptions.RiskPlus1} current={StoryPointRiskOptions[d.value.riskOptionId]}></SelectableCard>
                                            </Col>
                                            <Col xs={12} sm={4}>
                                                <SelectableCard onClick={() => {
                                                    update(StoryPointRiskOptions.RiskPlus2.id)
                                                }} option={StoryPointRiskOptions.RiskPlus2} current={StoryPointRiskOptions[d.value.riskOptionId]}></SelectableCard>
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

export default RiskSelector
