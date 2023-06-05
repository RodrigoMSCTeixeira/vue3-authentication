import axios from 'axios';

const API_URL = 'http://localhost:3333/'

class AuthService {
    login = (user) => {
        return axios 
        .post(API_URL + "signIn", {
            email: user.email,
            password: user.password
        })
        .then(response => {
            if(response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
    };

    logout = () => {
        localStorage.removeItem('user');
    }

    register = (user) => {
        return axios.post(API_URL + 'create-user', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            contributor: user.contributor,
            hasSchedule: false
          });
    }
}

export default new AuthService()