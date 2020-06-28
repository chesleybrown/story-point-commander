import * as firebase from "firebase/app";

export type Participant = {
  name?: string;
  solutionEffortOptionId?: string;
  testingOptionId?: string;
  riskOptionId?: string;
  ready?: boolean;
};

export function ClearParticipantResponses(sessionID: string, name: string) {
  let db = firebase.firestore();
  let p: Participant = {
    solutionEffortOptionId: undefined,
    testingOptionId: undefined,
    riskOptionId: undefined,
    ready: false,
  };
  db.collection("sessions")
    .doc(sessionID)
    .collection("participants")
    .doc(name)
    .update(p)
    .catch(function (error) {
      console.error("ClearParticipantResponses error: ", error);
    });
}

export function ParticipantReady(sessionID: string, name: string) {
  let db = firebase.firestore();
  let p: Participant = {
    ready: true,
  };
  db.collection("sessions")
    .doc(sessionID)
    .collection("participants")
    .doc(name)
    .update(p)
    .catch(function (error) {
      console.error("ParticipantReady error: ", error);
    });
}
