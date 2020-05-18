import React from "react";
import * as firebase from 'firebase/app';

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

export function ShowResults(sessionID) {
    let db = firebase.firestore();
    let p = {
        hidden: false
    }
    db.collection("sessions").doc(sessionID).update(p)
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

export function HideResults(sessionID) {
    let db = firebase.firestore();
    let p = {
        hidden: true
    }
    db.collection("sessions").doc(sessionID).update(p)
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

export default Session