

import axios from 'axios';

const API_BASE_URL = 'http://3.133.110.173/checkvalet/wp-json/checkvalet/v2'; 

const apiRequest = async (method, path, data = null) => {
  const url = `${API_BASE_URL}${path}`;

  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
        // You can add other headers like Authorization here if needed
      },
    });

    return response.data; // Axios automatically parses the response JSON
  } catch (error) {
    console.error('API request failed:', error);
    throw error; // Re-throw the error to handle it elsewhere
  }
};

export default apiRequest;
