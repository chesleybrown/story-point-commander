import React from "react";
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoryPointDetail, StoryPointRiskOptions } from "../services/StoryPointOptions";

type Props = {
    onSelected?: (option: StoryPointDetail) => void
};

type State = {
    current?: StoryPointDetail;
};

class RiskSelector extends React.Component<Props, State> {
    constructor(props: Props) {
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
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointRiskOptions.RiskBaseline} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointRiskOptions.RiskPlus1} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointRiskOptions.RiskPlus2} current={this.state.current}></SelectableCard></Col>
                </Row>
            </Container>
        );
    }
}

export default RiskSelector
