import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moduleName, fetchAll, entitesSelector } from '../../ducks/events';
import Loader from '../common/Loader'

class EventList extends Component {

    componentDidMount() {
        this.props.fetchAll();
    };

    render() {
        if (this.props.loading) return <Loader />
        return (
            <div>
                <table>
                    <tbody>
                        {this.getRows()}
                    </tbody>
                </table>
            </div>
        );
    };

    getRows() {
        const {events} = this.props;
        if (events) {
            const arrOfEvents = Object.values(events)
            return arrOfEvents.map(event => (
                <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{event.where}</td>
                    <td>{event.month}</td>
                </tr>
            ));
        } else {
            null
        }
    }
}

export default connect(state => ({
    events: entitesSelector(state),
    loading: state[moduleName].loading
}), { fetchAll })(EventList);
