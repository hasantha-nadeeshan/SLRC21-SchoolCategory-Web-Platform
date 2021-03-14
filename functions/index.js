const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp()




exports.subimission = functions.storage.object().onFinalize(event=>{
  const time = event.timeCreated;
  const uid = event.metadata.uid;
  const link = event.mediaLink;
  const task = event.metadata.task;
  const team = event.metadata.team;
  const db = admin.firestore();
  const docRef = db.collection('Users').doc(`${team}/Submission/${task}`);
  const getDoc = docRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        return admin.firestore().collection('Users').doc(`${team}/Submission/${task}`).set({
          time: time,
          link: link,
          task: task,
          attempt: 0
        });
      } 
        return admin.firestore().collection('Users').doc(`${team}/Submission/${task}`).set({
          time: time,
          link: link,
          task: task,
          attempt: doc.data().attempt+1
        });
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
});
 
exports.taskRequest = functions.https.onCall((data, contex) => {
  // const task = data.task;
  // const db = admin.firestore();
  // const docRef = db.collection('Task').doc(`${task}`);
  
  // if(!contex.auth){
  //   throw new functions.https.HttpsError(
  //     'unauthenticated',
  //     'log first'
  //   );
  // }
  // const getDoc = docRef.get().then(doc => {
  //     if (!doc.exists) {
  //       console.log('No such document!');
  //       return "unexpected Eroor 01";
  //     }
    
  //     if (false) {
  //       return "Task is unlocked";
  //     } else {
  //       return "Task is locked";
  //     }
      
  //   })
    // .catch(err => {
    //   console.log('Error getting document', err);
    // });
    return "error 1.2"
});

exports.sayHello = functions.https.onCall((data, contex) => {
  let data;
  const task = data.task;
  const db = admin.firestore();
  const docRef = db.collection('Task').doc(`${task}`);
  if(!contex.auth){
    throw new functions.https.HttpsError(
      'unauthenticated',
      'log first'
    );
  }
  const getDoc = docRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        data= "sample"
      } 
        data= "Sample2"
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  return data;
});