import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props<T> = {
    current?: T;
    option: T;
    content: React.ReactElement;
    onClick: (option: T) => void;
};

type State = {
};

class SelectableCard<T> extends React.Component<Props<T>, State> {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.onClick(this.props.option);
    }

    render() {
        return (
            <Card style={{ width: "16rem", height: "14rem" }}>
                <Card.Body>
                    <Card.Text>{this.props.content}</Card.Text>
                    <Button onClick={this.click} variant={this.props.current == this.props.option ? "primary" : "secondary"}>Select</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default SelectableCard
