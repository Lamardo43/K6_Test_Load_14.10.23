import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        {duration: '300s', target: 100 }
    ],
};

export default function () {
    const url='http://host.docker.internal:8080/post-message';

    const msg_id = Math.floor(Math.random() * 1000).toString();

    const payload = JSON.stringify({
        msg_id: msg_id,
    });

    const params = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    const res = http.post(url, payload, params);

    console.log(`Ответ сервера: ${res.status} - ${res.body}`);


    sleep(1);

}