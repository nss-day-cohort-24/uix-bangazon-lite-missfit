import axios from 'axios';
import DatabaseURL from './getDatabase';

export const GetProducts = () => {
    axios.get(DatabaseURL('products/'))
    .then(function(response) {
        console.log('the existing products are:', response.data);
        return response.data
    })
    .catch(function(error) {
        console.log('there was an error getting the products:', error);
    })
};

export const CreateProduct = (title, description, price, quantity) => {
    axios.post(DatabaseURL('products/'), {
        "productTitle": title,
        "productDescription": description,
        "productPrice": price,
        "productAvailable": quantity
    })
    .then(function(response) {
        console.log('we added the product:', response);
    })
    .catch(function(error){
        console.log('we ran into an error:',  error);
    })
};

// export const EditProduct = (productid) => {
//     axios.put(
//         DatabaseURL('products/' + productid + '/'),
//         {

//         }
//     )
// };

export const DeleteProduct = (productid) => {
    axios.delete(
        DatabaseURL('products/'+ productid + '/')
    )
    .then(function(response){
        console.log('product was deleted: ', response);
    })
    .catch( function(error) {
        console.log('there was an error deleting the product:', error);
    })
};