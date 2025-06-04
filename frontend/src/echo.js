import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'pusher',
    key: 'ebbd1a8dc8e2a07ffb7e',
    cluster: 'ap3',
    forceTLS: true,
    withCredentials: true,
    authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
});

export default echo;
