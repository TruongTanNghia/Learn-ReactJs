// ReactJS
import { useEffect, useState } from 'react';

import axios from 'axios';

const Index = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    // return axios
    //   .get(`https://jsonplaceholder.typicode.com/users`)
    //   .then((rs) => {
    //     setData(rs.data);
    //     setIsLoading(false);
    //   })
    try {
      const rs = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setData(rs.data);
      setIsLoading(false);
    } catch (error) {
      setError('Khong lay duoc data');
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filtereData = data
    .sort((a, b) => b.name.localeCompare(a.name)) // Muốn chuyển từ z-a thì đổi thành b.name.localeCompare(a.name))
    .filter((item) => {
      const searchValue = (search || '').toLowerCase();
      const nameMatch = (item.name || '').toLowerCase().includes(searchValue);
      const titleMatch = (item.email || '').toLowerCase().includes(searchValue);
      return nameMatch || titleMatch;
    });
  const handeChange = (e) => {
    setSearch(e.target.value);
  };
  const handelClearSearch = () => {
    setSearch('');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <input type="text" placeholder="Search" value={search} onChange={handeChange} />
      <ul>
        {filtereData.map((item) => (
          <li key={item.id}>
            Name: {item.name}
            <br />
            Email: {item.email}
          </li>
        ))}
      </ul>
      <button onClick={handelClearSearch}>Clear Search</button>
      {/* {filtereData.map} */}
    </div>
  );
};

export default Index;
