import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { addNewUser } from '../../ducks/users';
import * as Yup from 'yup';

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
                    onSubmit={(values, actions) => {
                        addNewUser(values);
                        actions.resetForm();
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required(),
                        email: Yup.string().required(),
                        lastName: Yup.string().min(3)
                    })}
                    render={({ handleSubmit, errors, touched }) => (
                        <Form
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label>
                                    <Field name='name' placaholder='Name' />
                                    Name
                            </label>
                            {errors.name && touched.name && <div>{errors.name}</div>}
                            </div>
                            <div>
                                <label>
                                    <Field name='lastName' placaholder='LastName' />
                                    LastName
                            </label>
                            {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
                            </div>
                            <div>
                                <label>
                                    <Field type='email' name='email' placaholder='Email' />
                                    Email
                            </label>
                            {errors.email && touched.email && <div>{errors.email}</div>}
                            </div>
                            <div>
                                <input 
                                    type='submit'
                                />
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
