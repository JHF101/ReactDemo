import axios from "axios";
import config from '../config/config';

function getApiToken() {

  // Send a request for authorization
    const response = axios.request({
        method:'POST',
        url: config.AUTH_ENDPOINT,
        baseURL: config.BASE_ENDPOINT,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
            username: config.LOGIN,
            password: config.PASSWORD,
            client_id: config.CLIENT_ID,
            client_secret: config.CLIENT_SECRET,
            scope: config.SCOPE,
            grant_type: "password",
        }
        }).then((res) => {
            // Save the access token to localStorage
            console.log("Got the token")
            console.log(res.data.access_token)
            localStorage.setItem("token", res.data.access_token)
        }).catch((err) => {
            console.error(err);
        });
}


// Test other API endpoints


export default getApiToken;