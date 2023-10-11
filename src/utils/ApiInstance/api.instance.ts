import axios from 'axios';

export const makeInstance = (baseURL: string, multipart?: boolean) => {
  const instance = axios.create({
    headers: {
      'Content-Type': `${multipart ? 'multipart/form-data' : 'application/json'
        }`,
    },
    baseURL: baseURL,
    timeout: 60000,
  });

  instance.interceptors.request.use(
    async function (config: any) {
      return { ...config };
    },
    function (error: any) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response: any) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error: any) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return instance;
};
