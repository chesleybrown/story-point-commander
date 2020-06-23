import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import { CreateSession } from "./Session"

type Props = {}

type State = {
    participantName: string
}

class SessionCreator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            participantName: ""
        };
        this.setName = this.setName.bind(this);
        this.submit = this.submit.bind(this);
    }

    setName(e) {
        this.setState({
            participantName: e.target.value
        });
    }

    submit(e) {
        e.preventDefault();
        CreateSession(this.state.participantName);
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form inline onSubmit={this.submit}>
                            <FormControl size="lg" onChange={this.setName} type="text" placeholder="What's your name?" className="mr-sm-2"></FormControl>
                            <Button type="submit" size="lg" variant="primary" disabled={(this.state.participantName) ? false : true}>Start Session</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SessionCreator
