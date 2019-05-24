import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { addNewUser } from '../../ducks/users';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    lastName: yup.string().length(3)
});

class AddUserForm extends Component {
    render() {
        const { addNewUser } = this.props;
        return (
            <div>
                <h1>Add user</h1>
                <Formik
                    initialValues={{
                        name: '',
                        lastName: '',
                        email: ''
                    }}
                    onSubmit={(values) => {
                        addNewUser(values);
                        console.log(values);
                    }}
                    validationSchema={schema}
                    render={({ handleSubmit, handleReset, errors }) => (
                        <Form
                            onSubmit={handleSubmit}
                            onReset={handleReset}
                        >
                            <div>
                                <label>
                                    <Field name='name' placaholder='Name' />
                                    Name
                            </label>
                            <div>{errors.name}</div>
                            </div>
                            <div>
                                <label>
                                    <Field name='lastName' placaholder='LastName' />
                                    LastName
                            </label>
                            <div>{errors.name}</div>
                            </div>
                            <div>
                                <label>
                                    <Field type='email' name='email' placaholder='Email' />
                                    Email
                            </label>
                            <div>{errors.name}</div>
                            </div>
                            <div>
                                <input type='submit' />
                            </div>
                        </Form>
                    )}
                />

            </div>
        );
    };
}

export default connect(
    null,
    { addNewUser }
)(AddUserForm);
