import React, {Component} from 'react';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import {Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp, moduleName, signIn} from '../../ducks/auth';
import Loader from '../common/Loader';

class AuthPage extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div>
                <h1>Auth page</h1>
                <div>
                    <NavLink to='/auth/signin' activeStyle={{color: 'red'}}>sign in</NavLink>
                </div>
                <div>
                    <NavLink to='/auth/signup' activeStyle={{color: 'red'}}>sign up</NavLink>
                </div>
                <Route path='/auth/signin' render={() => <SignInForm onSubmit = {this.handleSignIn}/>}/>
                <Route path='/auth/signup' render={() => <SignUpForm onSubmit = {this.handleSignUp}/>}/>
                {loading && <Loader />}
            </div>
        );
    };

    handleSignIn = ({email, password}) => this.props.signIn(email, password);
    handleSignUp = ({email, password}) => this.props.signUp(email, password);
}

export default connect(
    (state) => ({
        loading: state[moduleName].loading
    }),
    {signUp, signIn}
)(AuthPage);
