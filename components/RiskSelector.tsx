import React from 'react';
import SelectableCard from "./SelectableCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

enum RiskOption {
    RiskBaseline,
    RiskPlus1,
    RiskPlus2,
}

type Props = {
};

type State = {
    current?: RiskOption;
};

class RiskSelector extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            current: null
        };
        this.selected = this.selected.bind(this);
    }

    selected(option: RiskOption) {
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
                        <Col xs={3}><SelectableCard<RiskOption> onClick={this.selected} option={RiskOption.RiskBaseline} current={this.state.current} content={<span>All risks <strong>owned</strong> outside of this ticket, <strong>accepted</strong>, <strong>resolved</strong>, or <strong>mitigated</strong>.</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard<RiskOption> onClick={this.selected} option={RiskOption.RiskPlus1} current={this.state.current} content={<span><strong>Low to moderate</strong> risk <strong>owned</strong> and <strong>accepted</strong> as part of this ticket</span>}></SelectableCard></Col>
                        <Col xs={3}><SelectableCard<RiskOption> onClick={this.selected} option={RiskOption.RiskPlus2} current={this.state.current} content={<span><strong>Moderate to high</strong> risk <strong>owned</strong> and <strong>accepted</strong> as part of this ticket</span>}></SelectableCard></Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default RiskSelector
