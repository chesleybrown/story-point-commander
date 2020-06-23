import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { StoryPointDetail } from "../services/StoryPointOptions"

type Props = {
    current?: StoryPointDetail
    option: StoryPointDetail
    onClick: (detail: StoryPointDetail) => void
}

type State = {}

class SelectableCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.click = this.click.bind(this)
    }

    click() {
        this.props.onClick(this.props.option)
    }

    render() {
        return (
            <Card style={{ minHeight: "12rem" }}>
                <Card.Body>
                    <Card.Title>
                        <Button onClick={this.click} variant={this.props.current && this.props.current.id == this.props.option.id ? "primary" : "secondary"}>
                            {this.props.option.category} {this.props.option.value || "+" + this.props.option.modifier}
                        </Button>
                    </Card.Title>
                    <Card.Text>{this.props.option.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default SelectableCard
