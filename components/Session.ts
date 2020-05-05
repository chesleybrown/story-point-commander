import React from "react";

interface SessionContext {
    sessionId: string,
    participantName: string
}

export let CurrentSessionContext: SessionContext = {
    sessionId: "rBGiHZe88uCmrgkARPTM",
    participantName: "Chesley"
};
let Session = React.createContext({
    sessionId: "",
    participantName: ""
});

export function SetCurrentSessionContext(ctx: SessionContext) {
    CurrentSessionContext = {
        sessionId: "rBGiHZe88uCmrgkARPTM",
        participantName: "Chesley"
    };
}

export default Session