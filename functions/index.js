"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const cors = require("cors")({
  origin: false
});

firebase.initializeApp(functions.config().firebase);

const db = firebase.firestore();

exports.getApiKeys = functions.https.onRequest((() => {
  var _ref = _asyncToGenerator(function* (request, response) {
    const docRef = yield db.collection("mecontrata").doc("api");

    const result = yield docRef.get().then(function (doc) {
      return doc.data();
    }).catch(function (error) {
      return error;
    });

    return cors(request, response, function () {
      response.status(200).send(result);
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());