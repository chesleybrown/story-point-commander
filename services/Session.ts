import React from "react";
import Router from "next/router";
import * as firebase from "firebase/app";

export function CreateSession() {
  let db = firebase.firestore();
  let p = {
    hidden: true,
  };
  db.collection("sessions")
    .add(p)
    .then(function (doc) {
      Router.push("/session/" + doc.id);
    })
    .catch(function (error) {
      console.error("CreateSession error: ", error);
    });
}

export function ShowResults(sessionID: string) {
  let db = firebase.firestore();
  let p = {
    hidden: false,
  };
  db.collection("sessions")
    .doc(sessionID)
    .update(p)
    .catch(function (error) {
      console.error("ShowResults error: ", error);
    });
}

export function HideResults(sessionID: string) {
  let db = firebase.firestore();
  let p = {
    hidden: true,
  };
  db.collection("sessions")
    .doc(sessionID)
    .update(p)
    .catch(function (error) {
      console.error("HideResults error: ", error);
    });
}

export function SetParticipantName(name: string) {
  window.localStorage.setItem("name", name);
}

export function GetParticipantName() {
  return window.localStorage.getItem("name");
}

let Session = React.createContext({
  sessionId: "",
  participantName: "",
});

export default Session;
