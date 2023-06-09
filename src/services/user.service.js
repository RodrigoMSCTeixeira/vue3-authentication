import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3333/'

class UserService {
    getPublicContent = () => {
        //return axios.get(API_URL + 'all');
    }

    getUserBoard = () => {
        return axios.get(API_URL + 'registration', { headers: authHeader() });
    }

    getModeratorBoard = () => {
        //return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard = () => {
        //return axios.get(API_URL + 'mod', { headers: authHeader() });
    }
}

export default new UserService();