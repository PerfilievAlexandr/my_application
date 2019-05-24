import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { moduleName } from '../../ducks/auth';
import UnAuthrized from './UnAuthorized'

class ProtectedRoute extends Component {
    render() {
        const {component, ...rest} = this.props;
        return <Route {...rest} render={this.renderProtected} />
    };

    renderProtected = (routeProps) => {
        const {component: ProtectedComponent, authorize} = this.props;

        return authorize ? <ProtectedComponent {...routeProps}/> : <UnAuthrized />
    }
}

export default connect(state => ({
    authorize: !!state[moduleName].user
}), null, null, {pure: false})(ProtectedRoute);
