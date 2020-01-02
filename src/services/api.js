import axios from 'axios';

const api = axios.create({
    baseURL: 'https://projetogastos.herokuapp.com/'
});

export default api;