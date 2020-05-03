import React from 'react';
import SelectableCard from "./SelectableCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

enum TestingOption {
    TestingBaseline,
    TestingPlus1,
    TestingPlus2,
}

type Props = {
};

type State = {
    current?: TestingOption;
};

class TestingEffortSelector extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            current: null
        };
        this.selected = this.selected.bind(this);
    }

    selected(option: TestingOption) {
        this.setState({
            current: option
        });
    }

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
                        <Col xs={3}><SelectableCard<TestingOption> onClick={this.selected} option={TestingOption.TestingBaseline} current={this.state.current} content={<span><strong>Zero</strong> additional testing effort beyond standard practice</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard<TestingOption> onClick={this.selected} option={TestingOption.TestingPlus1} current={this.state.current} content={<span>Testing effort <strong>exceeds standard practice</strong> and is <strong>equal</strong> to the effort of the implementation</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard<TestingOption> onClick={this.selected} option={TestingOption.TestingPlus2} current={this.state.current} content={<span>Testing effort <strong>exceeds standard practice</strong> and is <strong>greater</strong> than the effort of the implementation</span>}></SelectableCard></Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default TestingEffortSelector
