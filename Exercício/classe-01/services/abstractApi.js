const axios = require('axios');

const instanciaAxios = axios.create({
  baseURL: 'https://companyenrichment.abstractapi.com/v1',
  params: {
    api_key: 'e8df9a9951784a49b04b372051509e83'
  }
});

module.exports = instanciaAxios;