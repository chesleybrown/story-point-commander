import React from "react";
import SelectableCard from "./SelectableCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { StoryPointOptionID, StoryPointDetail, StoryPointBriefOptions, StoryPointSolutionOptions, StoryPointEffortOptions } from "../services/StoryPointOptions";

type Props = {
    onSelected?: (option: StoryPointDetail) => void,
};

type State = {
    current: StoryPointDetail;
};

class SolutionEffortSelector extends React.Component<Props, State> {
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
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointBriefOptions.Brief1} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointSolutionOptions.Solution1} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointEffortOptions.Effort1} current={this.state.current}></SelectableCard></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointBriefOptions.Brief2} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointSolutionOptions.Solution2} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointEffortOptions.Effort2} current={this.state.current}></SelectableCard></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointBriefOptions.Brief3} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointSolutionOptions.Solution3} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointEffortOptions.Effort3} current={this.state.current}></SelectableCard></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointBriefOptions.Brief5} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointSolutionOptions.Solution5} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointEffortOptions.Effort5} current={this.state.current}></SelectableCard></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointBriefOptions.Brief8} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointSolutionOptions.Solution8} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointEffortOptions.Effort8} current={this.state.current}></SelectableCard></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointBriefOptions.Brief13} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointSolutionOptions.Solution13} current={this.state.current}></SelectableCard></Col>
                    <Col xs={12} sm={4}><SelectableCard onClick={this.selected} option={StoryPointEffortOptions.Effort13} current={this.state.current}></SelectableCard></Col>
                </Row>
                <Row>
                    <Col><hr></hr></Col>
                </Row>
                <Row>
                    <Col>
                        <Alert variant="warning">
                            Anything you feel would be greater than <strong>13</strong> story points should be broken down into smaller tasks before estimating further. Try adding a <strong>discovery task</strong> to help understand the <strong>scope of the work</strong> better.
                        </Alert>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SolutionEffortSelector
