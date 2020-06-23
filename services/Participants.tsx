import * as firebase from 'firebase/app';

export type Participant = {
    name?: string,
    solutionEffortOptionId?: number,
    testingOptionId?: number,
    riskOptionId?: number,
    ready?: boolean
}

export function ClearParticipantResponses(sessionID: string, name: string) {
    let db = firebase.firestore();
    let p: Participant = {
        solutionEffortOptionId: 0,
        testingOptionId: 0,
        riskOptionId: 0,
        ready: false
    }
    db.collection("sessions").doc(sessionID).collection("participants").doc(name).update(p)
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

export function ParticipantReady(sessionID: string, name: string) {
    let db = firebase.firestore();
    let p: Participant = {
        ready: true
    }
    db.collection("sessions").doc(sessionID).collection("participants").doc(name).update(p)
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}