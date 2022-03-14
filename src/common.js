import axios from 'axios';

const server = 'https://desafio.pontue.com.br';

const http = axios.create({
    baseUrl: server,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
}, function (err) {
    return Promise.reject(err);
})

export { server, http };
