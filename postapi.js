import http from 'k6/http';
import {check} from 'k6';

export const options={
    vus: 10,
}

export default function () {
    const url='http://localhost:8081/post-message';
    const payload = JSON.stringify({
        msg_id: 'KLIM',
    });

    const params = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    const res = http.post(url, payload, params);

    console.log(res)
}