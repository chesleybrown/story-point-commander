import React from "react"
import Alert from "react-bootstrap/Alert"

const SolutionEffortMemo = () => {
    return (
        <Alert variant="primary">
            📈 Estimate stories by thinking about the <strong>solution effort + additional testing effort + risk level</strong>.<br></br>
            🐛 <strong>Bugs don’t get points</strong> because fixing what’s broken is not delivering new value. Otherwise we could get double accounting for a feature poorly completed.
        </Alert>
    )
}

export default SolutionEffortMemo
