import { axiosPublic } from './axios';
const getVersion = () => {
  return axiosPublic.get('/');
};

export default getVersion;