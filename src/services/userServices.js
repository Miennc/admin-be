import {Axios} from './Axios';

function getAllUser (page,size){
    return Axios.get(`users?page=${page}&size=${size}`);
}
function getUserById (payload) {
    return Axios.get(`users/${payload}`);
}
function getAllRoles(){
    return Axios.get('roles');
}
function addUser (payload){
    return Axios.post('users',payload);
}
function editUser (payload){
    return Axios.put(`users/${payload.id}`,payload);
}
function removeUser (id){
    return Axios.del(`users/${id}`);
}
function searchUser(payload){
    return Axios.get(`users/search`,payload);
}
function searchUserManager (roleName){
    return Axios.post(`users/getAll_user_by_role_name?roleName=${roleName}`);
}
 function  getTtimekeeping (payload){
    return Axios.post(`request_attend/find-by-user-name-and-day`,payload)
}
export const userServices = {
    getTtimekeeping,
    getAllUser,
    getAllRoles,
    addUser,
    removeUser,
    editUser,
    getUserById,
    searchUser,
    searchUserManager
};