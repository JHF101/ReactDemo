import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import config from '../config/config';

const InviteUser = () => (
    <div>
        <h1>Invite User</h1>
        <p>Inviting a user can be done only by someone who has logged in via the login endpoint.</p>

        <Formik
            initialValues={{  name: '', surname: '', email: '', role: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        var endpoint = "/v1/admin/Users";
                        var authToken = localStorage.getItem('token');
                        var authHeader = {
                            headers: {
                                Authorization: `Bearer ${authToken}`
                            }
                        }
                        var body = {
                            name: values.name,
                            surname: values.surname,
                            email: values.email,
                            role: values.role,
                        }

                        axios.get(config.BASE_ENDPOINT+endpoint, authHeader, body)
                            .then((response) => {
                                console.log(response)
                        });

                        setSubmitting(false);
                    }, 400);
                }
            }
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.surname}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="text"
                        name="role"
                        placeholder="Role"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default InviteUser;