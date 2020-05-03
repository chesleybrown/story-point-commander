import React from "react";
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoryPointDetail, StoryPointTestingOptions } from "../services/StoryPointOptions";

type Props = {
    onSelected?: (StoryPointDetail) => void
};

type State = {
    current?: StoryPointDetail;
};

class TestingEffortSelector extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            current: null
        };
        this.selected = this.selected.bind(this);
    }

    selected(detail: StoryPointDetail) {
        this.setState({
            current: detail
        });
        if (this.props.onSelected) {
            this.props.onSelected(detail);
        }
    }

    render() {
        return (
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
                    <Col xs={3}><SelectableCard onClick={this.selected} option={StoryPointTestingOptions.TestingBaseline} current={this.state.current}></SelectableCard></Col>
                    <Col xs={3}><SelectableCard onClick={this.selected} option={StoryPointTestingOptions.TestingPlus1} current={this.state.current}></SelectableCard></Col>
                    <Col xs={3}><SelectableCard onClick={this.selected} option={StoryPointTestingOptions.TestingPlus2} current={this.state.current}></SelectableCard></Col>
                </Row>
            </Container>
        );
    }
}

export default TestingEffortSelector
