import React from "react"
import Router from 'next/router'
import * as firebase from 'firebase/app'

interface SessionContext {
    sessionId: string,
    participantName: string
}

export let CurrentSessionContext: SessionContext = {
    sessionId: "",
    participantName: ""
}
let Session = React.createContext({
    sessionId: "",
    participantName: ""
})

export function SetCurrentSessionContext(ctx: SessionContext) {
    CurrentSessionContext = {
        sessionId: "",
        participantName: ""
    }
}

export function CreateSession(name: string) {
    let db = firebase.firestore()
    let p = {
        hidden: true
    }
    db.collection("sessions").add(p)
        .then(function (doc) {
            Router.push("/session/" + doc.id + "?name=" + name)
        })
        .catch(function (error) {
            console.error("CreateSession error: ", error)
        })
}

export function ShowResults(sessionID) {
    let db = firebase.firestore()
    let p = {
        hidden: false
    }
    db.collection("sessions").doc(sessionID).update(p)
        .catch(function (error) {
            console.error("ShowResults error: ", error)
        })
}

export function HideResults(sessionID) {
    let db = firebase.firestore()
    let p = {
        hidden: true
    }
    db.collection("sessions").doc(sessionID).update(p)
        .catch(function (error) {
            console.error("HideResults error: ", error)
        })
}

export default Session