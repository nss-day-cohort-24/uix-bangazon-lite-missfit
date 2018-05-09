const port = 3002;

const DatabaseURL = (endpoint) => {
    return 'http://localhost:' + port + "/" + endpoint;
};

export default DatabaseURL;