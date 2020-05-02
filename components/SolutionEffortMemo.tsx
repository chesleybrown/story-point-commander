import React from 'react';
import Alert from 'react-bootstrap/Alert';

type Props = {
};

type State = {
};

class SolutionEffortSelector extends React.Component<Props, State> {
    render() {
        return (
            <Alert variant="primary">
                📈 Estimate stories by thinking about the solution effort + additional testing effort + risk level.<br></br>
                🐛 Bugs don’t get points because fixing what’s broken is not delivering new value. Otherwise we could get double accounting for a feature poorly completed.
            </Alert>
        );
    }
}

export default SolutionEffortSelector
