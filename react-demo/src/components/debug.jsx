import React, { Component } from 'react';
import config from '../config/config';

export class Debugger extends Component {
    render() {
        return(
            <div>
                <p>{config.AUTH_ENDPOINT}</p>
                <p>{config.CLIENT_ID}</p>
                <p>{config.CLIENT_SECRET}</p>
                <p>{config.LOGIN}</p>
                <p>{config.PASSWORD}</p>
                <p>{config.SCOPE}</p>
            </div>
        )
    }
}
export default Debugger;