import React from "react"
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StoryPointOptionID, StoryPointRiskOptions } from "../services/StoryPointOptions"
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore"
import Session from "./Session"

type Props = {}

type State = {}

class RiskSelector extends React.Component<Props, State> {
    static contextType = Session

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
                            riskOptionId: id
                        }, { merge: true }).then(() => { })
                    }
                    return (
                        <FirestoreDocument path={"/sessions/" + this.context.sessionId + "/participants/" + this.context.participantName}>
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
        )
    }
}

export default RiskSelector
