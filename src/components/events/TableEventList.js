import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moduleName, fetchAll, entitesSelector, selectedEvent } from '../../ducks/events';
import Loader from '../common/Loader'

class TableEventList extends Component {

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

    getRows = () => {
        const { events } = this.props;
        if (events) {
            const arrOfEvents = Object.values(events)
            return arrOfEvents.map(event => (
                <tr
                    key={event.id}
                    onClick={this.onhandleClick(event.id)}
                >
                    <td>{event.title}</td>
                    <td>{event.where}</td>
                    <td>{event.month}</td>
                </tr>
            ));
        } else {
            null
        }
    }

    onhandleClick = (id) => () => {
        const {selectedEvent} = this.props;
        selectedEvent && selectedEvent(id)
    }
}

export default connect(state => ({
    events: entitesSelector(state),
    loading: state[moduleName].loading
}), { fetchAll, selectedEvent })(TableEventList);
