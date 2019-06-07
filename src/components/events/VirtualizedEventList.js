import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moduleName, fetchAll, entitesSelector, selectedEvent } from '../../ducks/events';
import Loader from '../common/Loader';
import { Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css';

class VirtualizedEventList extends Component {

    componentDidMount() {
        this.props.fetchAll();
    };

    render() {
        const { loading, events, loaded } = this.props;
        if (loading && !loaded) return <Loader />
        return (
            <Table
                rowCount={loaded ? Object.values(events).length : 0}
                rowGetter={this.rowGetter}
                rowHeight={40}
                headerHeight={50}
                width={700}
                height={600}
                onRowClick={this.onhandleClick}
            >
                <Column
                    dataKey='title'
                    label='title'
                    width={250}
                />
                <Column
                    dataKey='where'
                    label='where'
                    width={250}
                />
                <Column
                    dataKey='when'
                    label='when'
                    width={250}
                />
            </Table>
        );
    };

    rowGetter = ({ index }) => {
        const {events} = this.props;
        return Object.values(events)[index];
    }

    onhandleClick = (evt) => {
        const { selectedEvent } = this.props;
        console.log(evt.rowData.id)
        selectedEvent(evt.rowData.id)
    }
}

export default connect(state => ({
    events: entitesSelector(state),
    loading: state[moduleName].loading,
    loaded: state[moduleName].loaded
}), { fetchAll, selectedEvent })(VirtualizedEventList);
