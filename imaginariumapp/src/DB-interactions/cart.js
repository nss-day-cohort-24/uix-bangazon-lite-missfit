import axios from 'axios';
import DatabaseURL from './getDatabase';

export const CreateCart = (dateCreated, dateUpdated, userid) => {
    axios.post(DatabaseURL('cart/'), {
        "dateCreated": title,
        "dateUpdated": description,
        "userid": userid,
        "products": []
    })
    .then(function(response) {
        console.log('we added the product:', response);
    })
    .catch(function(error){
        console.log('we ran into an error:',  error);
    })
};