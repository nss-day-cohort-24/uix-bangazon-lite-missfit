import axios from 'axios';
import DatabaseURL from './getDatabase';

export const CreateUser = (userEmail, userPassword) => {
    axios.post(DatabaseURL('users/'), {
        "email": userEmail,
        "password": userPassword
    })
    .then(function(response) {
        console.log('we added the user:', response);
    })
    .catch(function(error){
        console.log('we ran into an error:',  error);
    })
};

// export const EditUser = (userid, userchangekey, userchangevalue) => {
//     axios.put(
//         DatabaseURL('users/' + userid + '/'),
//         {

//         }
//     )
// };

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