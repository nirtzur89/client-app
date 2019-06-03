import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//reducers

const firebaseConfig = {
  apiKey: "AIzaSyCm3DXq3kISqvhuTKzFhQfydO4f3yiMZSA",
  authDomain: "nirs-react-client-panel.firebaseapp.com",
  databaseURL: "https://nirs-react-client-panel.firebaseio.com",
  projectId: "nirs-react-client-panel",
  storageBucket: "nirs-react-client-panel.appspot.com",
  messagingSenderId: "1080275686571",
  appId: "1:1080275686571:web:fc0e4c60ee258bc6"
};

//react redux firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

//init firebase config
firebase.initializeApp(firebaseConfig);
//init firestore
//const firestore = firebase.firestore();

//add reactredux enhancer when making store
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

//create initial state
const initialState = {};

//create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
