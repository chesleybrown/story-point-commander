import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { StoryPointDetail, StoryPointOptionID } from "../services/StoryPointOptions";

type Props = {
    current?: StoryPointOptionID;
    option: StoryPointDetail;
    onClick: (id: StoryPointOptionID) => void;
};

type State = {
};

class SelectableCard extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.onClick(this.props.option.id);
    }

    render() {
        return (
            <Card style={{ width: "16rem", height: "14rem" }}>
                <Card.Body>
                    <Card.Text>{this.props.option.description}</Card.Text>
                    <Button onClick={this.click} variant={this.props.current == this.props.option.id ? "primary" : "secondary"}>Select</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default SelectableCard
