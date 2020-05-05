import React from "react";
import Alert from "react-bootstrap/Alert";

type Props = {
};

type State = {
};

class RiskMemo extends React.Component<Props, State> {
    render() {
        return (
            <Alert variant="primary">
                <p>Risks should be explicitly stated and actions to address each categories with <i>R.O.A.M</i>:</p>
                <ul>
                    <li><strong>Resolved:</strong> the risk is known and should be stated, but does not need action now</li>
                    <li><strong>Owned:</strong> someone has taken ownership of addressing the risk, but not yet resolved</li>
                    <li><strong>Accepted:</strong> the risk cannot be resolved, so it has to be understood and accepted for what it is</li>
                    <li><strong>Mitigated:</strong> a plan has been created to eradicate the risk</li>
                </ul>
            </Alert>
        );
    }
}

export default RiskMemo
