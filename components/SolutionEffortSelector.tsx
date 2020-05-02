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

class SolutionEffortSelector extends React.Component<Props, State> {
    render() {
        return (
            <div className="row">
                <Container>
                    <Row>
                        <Col xs={2}><h3>Story Points</h3></Col>
                        <Col xs={3}><h3>Brief</h3></Col>
                        <Col xs={3}><h3>Solution</h3></Col>
                        <Col xs={3}><h3>Effort</h3></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={2}><h3>1</h3></Col>
                        <Col xs={3}><SelectableCard content={<span><strong>Insignificant</strong>, one line change; typo</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Obvious; <strong>zero</strong> unknowns</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span><strong>Simplistic</strong>; I could do many of these in a day</span>}></SelectableCard></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={2}><h3>2</h3></Col>
                        <Col xs={3}><SelectableCard content={<span><strong>Minor</strong> change; configuration updates</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Known; <strong>little to zero</strong> unknowns</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Will have to <strong>focus</strong>, requires meaningful <strong>code review and tests</strong>, needs <strong>one</strong> session of concentration</span>}></SelectableCard></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={2}><h3>3</h3></Col>
                        <Col xs={3}><SelectableCard content={<span><strong>Small</strong>, scoped feature; requires <strong>insignificant</strong> research or cross-team coordination</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Generally known; <strong>few</strong> unknowns</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Will have to <strong>focus</strong>, requires meaningful <strong>code review and tests</strong>, needs <strong>one</strong> session of concentration</span>}></SelectableCard></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={2}><h3>5</h3></Col>
                        <Col xs={3}><SelectableCard content={<span><strong>Complex</strong> feature; requires <strong>little</strong> research or cross-team coordination</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Have an idea; <strong>research limited</strong> to known unknowns</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Complexity or amount of work to be done requires a <strong>couple</strong> sessions of concentration</span>}></SelectableCard></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={2}><h3>8</h3></Col>
                        <Col xs={3}><SelectableCard content={<span><strong>Large</strong>, complex feature; requires <strong>some</strong> research or cross-team coordination</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Concept and the goals <strong>understood</strong>; solution requires <strong>some research</strong> that can only be done as part of the work</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Complexity or amount of work to be done requires a <strong>few</strong> sessions of concentration</span>}></SelectableCard></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={2}><h3>13</h3></Col>
                        <Col xs={3}><SelectableCard content={<span><strong>Very large</strong>, complex feature; requires <strong>significant</strong> research or cross-team coordination</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Concept and the goals <strong>understood</strong>; solution requires <strong>significant research</strong> that can only be done as part of the work</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard content={<span>Complexity or amount of work to be done requires <strong>many</strong> of sessions of concentration</span>}></SelectableCard></Col>
                    </Row>
                    <Row>
                        <Col><hr></hr></Col>
                    </Row>
                    <Row>
                        <Col xs={2}><h3>&gt;13</h3></Col>
                        <Col>
                            <Alert variant="warning">
                                Anything you feel would be greater than <strong>13</strong> story points should be broken down into smaller tasks before estimating further. Try adding a <strong>discovery task</strong> to help understand the <strong>scope of the work</strong> better.
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default SolutionEffortSelector
