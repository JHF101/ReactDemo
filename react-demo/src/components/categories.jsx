
import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    useParams
} from "react-router-dom";

export default class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    getData(){
        var endpoint = "/v1/admin/categories";
        var authToken = localStorage.getItem('token');
        var authHeader = {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }

        axios.get(config.BASE_ENDPOINT+endpoint, authHeader)
            .then((response) => {
                console.log(`Hit`, endpoint)
                var result = response.data.data;
                this.setState({data : result})
        });

    }
    componentDidMount(){
        this.getData()
    }

    loadWords(id) {
        var endpoint = "/v1/categories"+id;
        var authToken = localStorage.getItem('token');
        var authHeader = {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }

        axios.get(config.BASE_ENDPOINT+endpoint, authHeader)
            .then((response) => {
                console.log(`Hit`, endpoint)
                var result = response.data.data;
                this.setState({data : result})
        });
    }

    render() {
        return (
        <>
            <ul>
                {
                    this.state.data.map(
                        d =>(
                        <li key={d.id}>{d.name}</li>
                        )
                    )
                }
            </ul>
        </>
        )
    }
}
