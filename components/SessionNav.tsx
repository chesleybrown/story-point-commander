import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Spinner from "react-bootstrap/Spinner"
import { FirestoreDocument } from "@react-firebase/firestore"
import Session from "./Session"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

const SessionNav = () => {
    return (
        <Session.Consumer>
            {ctx => <Navbar bg="light">
                <Navbar.Brand href="#home">Story Point Commander</Navbar.Brand>
                <Nav>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip id="session-share-link">
                                Click to copy share link
                            </Tooltip>
                        }
                    >
                        <Nav.Link>
                            <FirestoreDocument path={"/sessions/" + ctx.sessionId}>
                                {d => {
                                    return d.isLoading ? <Spinner animation="border" size="sm" /> : <span onClick={() => navigator.clipboard.writeText(window.location.href.split("?")[0])}>{ctx.sessionId}</span>
                                }}
                            </FirestoreDocument>
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    {(ctx.sessionId) ? <Nav.Link href="/session/create">New Session</Nav.Link> : ""}
                    <Navbar.Text>
                        {(ctx.participantName) ? <span>Welcome <span>{ctx.participantName}</span></span> : ""}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>}
        </Session.Consumer>
    )
}

export default SessionNav

