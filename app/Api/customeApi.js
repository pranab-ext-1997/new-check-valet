

import axios from 'axios';

const API_BASE_URL = 'http://3.133.110.173/api/'; 

const customeApiFunction = async (method, path, data) => {
  const url = `${API_BASE_URL}${path}`;

  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
     
      },
    });

    return response.data; 
  } catch (error) {
    console.error('API request failed:', error);
    throw error; 
  }
};

export default customeApiFunction;
