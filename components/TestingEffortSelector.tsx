import React from 'react';
import SelectableCard from "./SelectableCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

type Props = {
};

type State = {
};

class TestingEffortSelector extends React.Component<Props, State> {
    render() {
        return (
            <div className="row">
                <Container>
                    <Row>
                        <Col xs={3}><h3>Baseline</h3></Col>
                        <Col xs={3}><h3>+1</h3></Col>
                        <Col xs={3}><h3>+2</h3></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={3}><SelectableCard content={<span><strong>Zero</strong> additional testing effort beyond standard practice</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Testing effort <strong>exceeds standard practice</strong> and is <strong>equal</strong> to the effort of the implementation</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Testing effort <strong>exceeds standard practice</strong> and is <strong>greater</strong> than the effort of the implementation</span>}></SelectableCard></Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default TestingEffortSelector
