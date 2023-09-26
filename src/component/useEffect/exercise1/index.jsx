import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchApi = (param) => {
    setLoading(true);
    return axios
      .get(`https://jsonplaceholder.typicode.com/${param}`)
      .then((rs) => {
        setData(rs.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  useEffect(() => {
    handleFetchApi('users');
  }, []);

  return (
    <>
      <button onClick={() => handleFetchApi('users')}> Users </button>
      <button onClick={() => handleFetchApi('comments')}> Comments </button>
      <button onClick={() => handleFetchApi('posts')}> Posts</button>
      <button onClick={() => handleFetchApi('todos')}> Todos</button>
      <button onClick={() => handleFetchApi('albums')}> albums</button>
      {loading ? (
        // <h1>.....Loading.....</h1>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/37516c77392207.5c869a30b1ffb.gif"
          alt=""
        />
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name || item.title} </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Index;
