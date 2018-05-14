import axios from 'axios';
import DatabaseURL from './getDatabase';

export const CreateUser = (newUserObj) => {
    axios.post(DatabaseURL('users/'), newUserObj)
    .then(function(response) {
        console.log('we added the user:', response);
    })
    .catch(function(error){
        console.log('we ran into an error:',  error);
    })
};

export const GetUser = (userEmail) => {
    console.log('Getting this user:', userEmail);
    axios.get(DatabaseURL('users/?email=' + userEmail))
    .then(function(response) {
        if (response.data.length === 0) {
            console.log('user does not exist');
        } else {
        console.log('We got this user:', response.data);
        }
    })
    .catch(function(error) {
        console.log('We got an error when trying to get the user:', error)
    })
};

export const DeleteUser = (userid) => {
    axios.delete(
        DatabaseURL('users/'+ userid + '/')
    )
    .then(function(response){
        console.log('user was deleted: ', response);
    })
    .catch( function(error) {
        console.log('there was an error deleting the user:', error);
    })
};