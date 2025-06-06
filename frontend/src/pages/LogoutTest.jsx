import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {axiosInstance} from '../api/axiosInstance';


export function LogoutTest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axiosInstance.post('http://127.0.0.1:8000/logout');
        setMessage('ログアウト成功');
      } catch (err) {
        console.error('ログアウト失敗', err.response?.data);
        setMessage('ログアウト失敗');
      }
    };

    logoutUser();
  }, []);

  return (
    <div>
      <p>{message}</p>
      <Link to="/">トップページ</Link>
    </div>
  );
}
