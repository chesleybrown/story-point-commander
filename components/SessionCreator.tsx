import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Link from "next/link";

type Props = {
};

type State = {
    participantName: string
};

class RiskMemo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            participantName: ""
        };
        this.setName = this.setName.bind(this);
    }

    setName(e) {
        this.setState({
            participantName: e.target.value
        });
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form inline>
                            <FormControl size="lg" onChange={this.setName} type="text" placeholder="What's your name?" className="mr-sm-2"></FormControl>
                            <Link href={"/session/rBGiHZe88uCmrgkARPTM?name=" + this.state.participantName}>
                                <Button size="lg" variant="primary" disabled={(this.state.participantName) ? false : true}>Join Session</Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RiskMemo
