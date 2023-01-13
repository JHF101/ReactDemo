import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
// require('dotenv').config()

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
    <OAuth2Login
        authorizationUrl={process.env.AUTH_ENDPOINT}
        responseType="token"
        clientId={process.env.CLIENT_ID}
        redirectUri="http://localhost:3000/oauth-callback"
        onSuccess={onSuccess}
        onFailure={onFailure}/>,
    document.getElementById('root')
);