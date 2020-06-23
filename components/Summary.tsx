import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
import Badge from "react-bootstrap/Badge"
import { StoryPointSolutionEffortOptions, StoryPointTestingOptions, StoryPointRiskOptions } from "../services/StoryPointOptions"
import Calculator from "../services/StoryPointCalculator"
import { FirestoreDocument, FirestoreCollection } from "@react-firebase/firestore"
import Session from "./Session"
import { Participant } from "../services/Participants"

const Summary = () => {
    const ctx = useContext(Session)

    return (
        <FirestoreDocument path={"/sessions/" + ctx.sessionId}>
            {sd => {
                if (!sd.isLoading && !sd.value) {

                }
                return (!sd.value) ? <span></span> : (
                    <Container>
                        <Row>
                            <Col xs={3}><h3>Name</h3></Col>
                            <Col xs={3}><h3>Solution &amp; Effort</h3></Col>
                            <Col xs={3}><h3>Testing</h3></Col>
                            <Col xs={3}><h3>Risk</h3></Col>
                        </Row>
                        <Row>
                            <Col><hr></hr></Col>
                        </Row>
                        <FirestoreCollection path={"/sessions/" + ctx.sessionId + "/participants"} limit={100}>
                            {d => {
                                let list: React.ReactElement[] = []
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
                                d.value.forEach((value: Participant, index) => {
                                    let badge = <span></span>
                                    if (value.ready) {
                                        badge = <Badge pill variant="success">Ready</Badge>
                                    }
                                    list.push(
                                        <Row key={index}>
                                            <Col xs={3}>{d.ids[index]} {sd.value.hidden ? <span></span> : <Badge pill variant="primary">{Calculator({
                                                solutionEffortOption: StoryPointSolutionEffortOptions[value.solutionEffortOptionId],
                                                testingOption: StoryPointTestingOptions[value.testingOptionId],
                                                riskOption: StoryPointRiskOptions[value.riskOptionId]
                                            })}</Badge>} {badge}</Col>
                                            <Col xs={3}>
                                                <p>{value.solutionEffortOptionId && sd.value.hidden ? <Badge pill variant="primary">Selected</Badge> : value.solutionEffortOptionId ? StoryPointSolutionEffortOptions[value.solutionEffortOptionId].description : "…"}</p>
                                            </Col>
                                            <Col xs={3}>
                                                <p>{value.testingOptionId && sd.value.hidden ? <Badge pill variant="primary">Selected</Badge> : value.testingOptionId ? StoryPointTestingOptions[value.testingOptionId].description : "…"}</p>
                                            </Col>
                                            <Col xs={3}>
                                                <p>{value.riskOptionId && sd.value.hidden ? <Badge pill variant="primary">Selected</Badge> : value.riskOptionId ? StoryPointRiskOptions[value.riskOptionId].description : "…"}</p>
                                            </Col>
                                        </Row>
                                    )
                                })
                                return list
                            }}

                        </FirestoreCollection>
                    </Container>
                )
            }}
        </FirestoreDocument>
    )
}

export default Summary
