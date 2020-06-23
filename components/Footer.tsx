import React from "react"

type Props = {}

type State = {}

class Footer extends React.Component<Props, State> {
    render() {
        return (
            <footer style={{ margin: "3rem" }}>
                <hr></hr>
                <p style={{ textAlign: "center" }}>Thrown together by <a target="_blank" href="https://twitter.com/Chesley">@Chesley</a> 👨🏻‍💻</p>
            </footer>
        )
    }
}

export default Footer
