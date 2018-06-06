// connect to database

import * as firebase from 'firebase'; // * as takes all the named exports and throws it in firebase

 // Initialize Firebase
const config = {

};

firebase.initializeApp(config);

const database = firebase.database();

// set can take any value type: object, string, etc.
database.ref().set({
    name: 'test name',
    isSingle: false,
    age: 27,
    location: {
        city: 'UK',
        Country: 'USA'
    }
}).then( () => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('Save failed.', e);
});

// delete field from database
database.ref('isSingle').remove()
    .then(() => {
        console.log('Remove successful');
    }).catch((e) =>{
        console.log('Remove failed ' + e);
    });

// update/add new attributes. we call also delete by setting value to null
database.ref().update({
    name: 'Wikk',
    age: 29,
    job: "software engineer",
    roaming: true,
    'location/city' : 'Boston'
});


// fetch data from firebase
database.ref()
    .once('value')
    .then((snapshot)=> {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data', e);
    });

// callback function that happens when the data changes live
database.ref().on('value', (snapshot)=> {
    console.log(snapshot.val());
})

setTimeout(() => {
    database.ref('age').set(0);
}, 3000);

// turn off notification for updates
setTimeout(() => {
    database.ref().off();
}, 6000);

setTimeout(() => {
    database.ref('age').set(99);
}, 9000);



// database.ref('notes')
//     .once('value')
//     .then( (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//         // console.log(snapshot.val());
//     })
//     .catch((e)=> {
//         console.log('something went wrong: ' + e);
//     });

// database.ref('notes')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//         // console.log(snapshot.val());
//     });

// database.ref('notes').push(
//     {
//         description: 'descript 2',
//         note: 'my second note',
//         amount: "17",
//         createdAt: 0
//     }
// );

// child_removed
database.ref('notes').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

//child_changed
database.ref('notes').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added - called for new or existing children
database.ref('notes').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});