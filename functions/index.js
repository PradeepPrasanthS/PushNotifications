const admin = require('firebase-admin');

var serviceAccount = require("../firebase-storage-sdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: ""
});

var registrationToken = "cDQEKqqI-uo:APA91bF4uw_VaoDcNP9V_-2A-NAFwZV3B7pC7AvlCfOjctWRrR8L0m7gWpQqQxXsLMPJEDozI3Oa09nkeLXKmCEMiO891yExV9T-zwM-iYRoeFY9pgLMJLDqoYLNexlPL-IGn_hMyJ4x";

var payload = {
    data: {
        title: "Sample notification",
        body: "This is a sample notification"
    },
};

var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
}

admin.messaging().sendToDevice(registrationToken, payload, options)
    .then(function(response) {
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });

