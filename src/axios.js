import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/unsung-project/us-central1/api' //the API(cloud function)URL
});

export default instance;