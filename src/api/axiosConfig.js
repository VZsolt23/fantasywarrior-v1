import axios from 'axios';

export default axios.create({
    baseURL:'https://testforrenderapp-2.onrender.com',
    headers: {"ngrok-skip-browser-warning": "true"}
});