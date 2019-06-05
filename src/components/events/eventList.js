import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchAll} from '../../ducks/events'

class EventList extends Component {
    render() {
        console.log('-----', this.props.events)
        return (
            <div>
                <h1>Events page!</h1>
            </div>
        );
    };

    componentDidMount() {
        this.props.fetchAll();
    };

}

export default connect(state => ({
    events: state[moduleName].entities
}), {fetchAll})(EventList);
