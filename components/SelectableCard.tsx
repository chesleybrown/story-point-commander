import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {
    content: React.ReactElement;
};

type State = {
};

class SelectableCard extends React.Component<Props, State> {
    render() {
        return (
            <Card style={{ width: "16rem", height: "14rem" }}>
                <Card.Body>
                    <Card.Text>{this.props.content}</Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default SelectableCard
