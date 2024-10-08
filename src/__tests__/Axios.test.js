import axios from 'axios';
import { fetchData } from '../components/AxiosDemo';

jest.mock('axios'); // Mock thư viện axios

test('should fetch data successfully', async () => {
  const mockData = { data: 'Hello' };
  axios.get.mockResolvedValue(mockData); // Giả lập phản hồi API

  const data = await fetchData(); // Gọi hàm thực tế
  expect(data).toEqual('Hello'); // Kiểm tra kết quả trả về
});

//chạy lệnh npm test -- src/__tests__/Axios.test.js để kiểm tra kết quả.//