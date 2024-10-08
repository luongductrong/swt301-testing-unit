import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data'); // Gọi API
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
