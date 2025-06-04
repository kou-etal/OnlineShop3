import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';

export function AdminLink() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get('http://127.0.0.1:8000/api/user');
        setUser(res.data);
      } catch (error) {
        console.error('ユーザー情報取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return null;
  if (!user || !user.is_admin) return null;

  return (
    <Link to="/admin/dashboard" className="text-red-500">
      管理者ページ
    </Link>
  );
}
