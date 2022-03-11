import axios from "axios";
import { useDispatch } from "react-redux";


const axiosInstance = axios.create();

 
axiosInstance.interceptors.response.use(
  
  (response) => {
      
  },
  (error) => {
    console.log(error.response);
    if(error.response.status === 401) {
      // console.log("Unauthorized Error. Client is not authenticated.");
      // localStorage.clear('tokenData');
    }
    if(error.response.status === 403) {
      // console.log(`Error ${response.status}: The client does not have access rights to the content.`);
    }
  }
)



axiosInstance.interceptors.request.use(
  (config) => {
    
    const  data  = JSON.parse(localStorage.getItem('tokenData')) || null; 

    config.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
    config.headers.common['Access-Control-Allow-Origin'] = '*';

    if (data?.token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const useUnauthorized = () => {
  const dispatch = useDispatch();

  axiosInstance.interceptors.response.use(
    // (response) => console.log(response, 2222),
    (error) => {
      if(error.response.status === 401) {
        // console.log('araaaoeee')
        localStorage.clear('tokenData');
      }
    },
  );
}

export default axiosInstance