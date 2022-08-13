import React, { useEffect } from 'react';
import axios from 'axios';

export const Del: React.FC = () => {
  const login = async (email: string, password: string) => {
    const resp = await axios.post('http://localhost:5000/api/user/login', { email, password });
    //console.log(resp.data);
    return resp.data;
  };

  useEffect(() => {
    login('lognafrd1994@gmail.com', '7822448qwe')
      .then((data) => console.log(data))
      .catch((e) => console.log(e.response.data));
  }, []);

  return <>Hello</>;
};
