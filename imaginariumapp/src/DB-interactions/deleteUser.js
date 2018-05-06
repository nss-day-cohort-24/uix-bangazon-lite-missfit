import axios from 'axios';
import DatabaseURL from './getDatabase';

const DeleteUser = (userid) => {
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

export default DeleteUser;