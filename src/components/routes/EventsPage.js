import React, {Component} from 'react';
import EventList from '../events/eventList'

class EventsPage extends Component {
    render() {
        return (
            <div>
                <h1>Events page</h1>
                <EventList />
            </div>
        );
    };
}

export default EventsPage;
