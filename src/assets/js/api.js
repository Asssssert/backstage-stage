// const localhost = 'http://120.78.178.136';
const localhost = 'http://localhost';
const port = '9999';
const baseUrl = localhost + ":" + port;
const api = {
  login: `${baseUrl}/account/login`,
};
module.exports = api;
