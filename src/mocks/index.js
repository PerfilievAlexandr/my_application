import conferences from './conferences';
import firebase from 'firebase';

function saveEventsToFB() {
    const eventsRef = firebase.database().ref('/events');
    conferences.forEach(conference => eventsRef.push(conference));
};

window.runMigration = function () {
    
    return firebase.database().ref('/events').on('value', data => {
        if (!data.val()) saveEventsToFB();
    });
};
