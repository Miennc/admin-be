import {Axios} from './Axios';

function login (payload){
    return Axios.post('users/login', payload);
}
export const authenServices = {
    login
};