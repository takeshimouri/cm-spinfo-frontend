import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3306/api'
    baseURL: 'http://localhost:8080/api'
});