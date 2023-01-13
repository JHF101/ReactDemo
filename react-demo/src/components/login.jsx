import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import config from '../config/config';
import { redirect } from "react-router-dom";
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const Login = () => (
    <div>
        <h1>Login</h1>
        <Formik
        initialValues={{ email: '', password: '' }}
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
                    axios.request({
                        method: 'POST',
                        url: config.AUTH_ENDPOINT,
                        baseURL: config.BASE_ENDPOINT,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        data: {
                            username: values.email,
                            password: values.password,
                            client_id: config.CLIENT_ID,
                            client_secret: config.CLIENT_SECRET,
                            scope: config.SCOPE,
                            grant_type: "password",
                        }
                    }).then((res) => {
                        // Save the access token to localStorage
                        console.log("Got the token")
                        localStorage.setItem("token", res.data.access_token)
                    }).catch((err) => {
                        console.error(err);
                        alert(err)
                    });
                    setSubmitting(false);
                }, 400);
                return <Navigate to="/app" replace />;
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
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
            </form>
        )}
        </Formik>
    </div>
);

export default Login;