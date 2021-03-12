const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();


exports.signIn = functions.auth.user().onCreate(user  =>{
  return admin.firestore().collection('Users').doc("ishan").set({
  });
});

exports.subimission = functions.storage.object().onFinalize(event=>{
    const time = event.timeCreated
    const link = event.mediaLink
    const id = event.owner
  return admin.firestore().collection('Users').doc("ishan").set({
    time : time,
    link : link
  });
});

exports.timeWrite = functions.https.onCall((data,contex)=>{
  if(!contex.auth){
    throw new functions.https.HttpsError(
      'unauthenticated',
      'log first'
    );
  }
  admin.firestore().collection('Users').doc("Ussdsadasd").set({
    SubmitTime: 'sxs'
  });
});





// exports.datawritter = functions.firestore.database().