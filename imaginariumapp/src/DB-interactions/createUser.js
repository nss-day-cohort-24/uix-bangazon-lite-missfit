import axios from 'axios';
import DatabaseURL from './getDatabase';

const CreateUser = (userEmail, userPassword) => {
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

export default CreateUser;