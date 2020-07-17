import * as firebase from "firebase/app";

type ParticipantClearUpdate = {
  solutionEffortOptionId: null;
  testingOptionId: null;
  riskOptionId: null;
  ready: boolean;
};

type ParticipantReadyUpdate = {
  ready: boolean;
};

export function ClearParticipantResponses(sessionID: string, name: string) {
  let db = firebase.firestore();
  let p: ParticipantClearUpdate = {
    solutionEffortOptionId: null,
    testingOptionId: null,
    riskOptionId: null,
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
  let p: ParticipantReadyUpdate = {
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
