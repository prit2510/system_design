import http from 'k6/http';
import {sleep} from 'k6';

export let options ={
    // vus='1', //for singel 
    insecureSkipTLSVerify:true,
    noConnectionReuse:false,
    stages:[
        {duration:'1m',target:100},
        {duration:'30s',target:100},
        {duration:'1m',target:0}
    ]
};

export default ()=>{
    http.get('http://localhost:3000');
    sleep(2);
}