import config from "../config/config";
import axios from "axios";

function getCategories() {
    var endpoint = "/v1/admin/categories";
    var authToken = localStorage.getItem('token');
    var authHeader = {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }
    axios.get(config.BASE_ENDPOINT+endpoint, authHeader)
        .then((response) => {
            console.log(response);
        });
}

export default getCategories;