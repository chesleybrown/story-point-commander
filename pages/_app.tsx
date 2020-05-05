import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseConfig from "../services/FirebaseConfig";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FirestoreProvider } from "@react-firebase/firestore";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <FirestoreProvider {...FirebaseConfig} firebase={firebase}>
            <Component {...pageProps} />
        </FirestoreProvider>
    )
}