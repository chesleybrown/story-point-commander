import React from "react";

interface SessionContext {
    sessionId: string,
    participantName: string
}

export let CurrentSessionContext: SessionContext = {
    sessionId: "",
    participantName: ""
};
let Session = React.createContext({
    sessionId: "",
    participantName: ""
});

export function SetCurrentSessionContext(ctx: SessionContext) {
    CurrentSessionContext = {
        sessionId: "",
        participantName: ""
    };
}

export default Session