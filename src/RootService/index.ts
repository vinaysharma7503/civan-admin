import Dev from './dev';
import Prod from './prod';
import axios from 'axios';

const RootService: any = (env = 'dev') => env === 'dev' ? Dev : Prod;

// ENVIRONMENT CHANGE
const { BASEURL = '' } = RootService(process.env.NODE_ENV?.trim());

(()=> {

    axios.interceptors.request.use(function (config) {
        console.log('token here',localStorage.getItem('token'));
        config.headers= {"Authorization" : `Bearer ${localStorage.getItem('token')}`} 
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    
    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });




})();



export const getReq = async (url: string) => {
console.log('BASEURL',BASEURL + url);

    return axios.get(BASEURL + url)
        .catch((e: any) => console.log(e));
}

export const postReq = async (url: string, data: any) => {

    return axios.post(BASEURL + url, data)
        .catch((e: any) => console.log(e))
}