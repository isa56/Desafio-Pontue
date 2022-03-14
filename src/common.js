
import axios from 'axios';

const server = 'https://desafio.pontue.com.br';

const http = axios.create({
    baseUrl: server,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


export { server, http };
