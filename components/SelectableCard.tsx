import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { StoryPointDetail } from "../services/StoryPointOptions"

type Props = {
    current?: StoryPointDetail
    option: StoryPointDetail
    onClick: (detail: StoryPointDetail) => void
}

const SelectableCard = (props: Props) => {
    function click() {
        props.onClick(props.option)
    }

    return (
        <Card style={{ minHeight: "12rem" }}>
            <Card.Body>
                <Card.Title>
                    <Button onClick={click} variant={props.current && props.current.id == props.option.id ? "primary" : "secondary"}>
                        {props.option.category} {props.option.value || "+" + props.option.modifier}
                    </Button>
                </Card.Title>
                <Card.Text>{props.option.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SelectableCard
