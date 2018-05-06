import axios from 'axios';

const UserData = () => {
axios.get('http://localhost:3001/users')
.then((response) => {console.log('we got it', response.data)})
.catch((error) => {console.log('we didnt get it', error)});
}

export default UserData;