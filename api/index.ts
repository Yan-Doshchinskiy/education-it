import axios from 'axios';

export const getPosts = async ():Promise<any> => {
  const res = await axios.get('http://localhost:5000/api/v1/getTest');
  return res.data.result;
};
