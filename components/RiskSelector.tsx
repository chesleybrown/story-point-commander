import React, { useContext } from "react"
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StoryPointOptionID, StoryPointRiskOptions } from "../services/StoryPointOptions"
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore"
import Session from "../services/Session"

const RiskSelector = () => {
    const ctx = useContext(Session)

    return (
        <FirestoreMutation type="set" path={"/sessions/" + ctx.sessionId + "/participants/" + ctx.participantName}>
            {({ runMutation }) => {
                let update = (id: StoryPointOptionID) => {
                    runMutation({
                        name: ctx.participantName,
                        riskOptionId: id
                    }, { merge: true }).then(() => { })
                }
                return (
                    <FirestoreDocument path={"/sessions/" + ctx.sessionId + "/participants/" + ctx.participantName}>
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

export default RiskSelector
