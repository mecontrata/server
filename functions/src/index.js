const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const cors = require("cors")();

firebase.initializeApp(functions.config().firebase);

const db = firebase.firestore();

exports.getApiKeys = functions.https.onRequest(async (request, response) => {
  const docRef = await db.collection("mecontrata").doc("api");

  const result = await docRef
    .get()
    .then(doc => doc.data())
    .catch(error => error);

  cors(request, response, () => {});

  return response.status(200).send(result);
});
