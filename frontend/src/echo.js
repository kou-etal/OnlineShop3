import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: 'ebbd1a8dc8e2a07ffb7e',
  cluster: 'ap3',
  forceTLS: true,
  authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
  auth: {
    headers: {
      'X-XSRF-TOKEN': document.cookie
        .split('; ')
        .find(row => row.startsWith('XSRF-TOKEN='))?.split('=')[1],
    },
    withCredentials: true,
  },
});

export default echo;
