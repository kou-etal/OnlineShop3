import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AdminLink} from '../components/AdminLink';
import axios from 'axios';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/products');
        setProducts(res.data.products);
        setWeather(res.data.weather);
      } catch (error) {
        console.error('データ取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex justify-center text-center items-center">
  <p className="text-3xl font-light tracking-widest uppercase text-gray-500 animate-pulse">読み込み中...</p>
  </div>
);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">商品一覧</h1>
      <div className="h-px bg-gray-300 mb-16"/>
      <p className="mb-4">天気: {weather.weather[0].description} / 気温: {weather.main.temp}°C</p>
<ul className="grid grid-cols-3 gap-4">
  {products.map(product => (
    <li key={product.id} className="border p-4">
      <h2 className="font-semibold"><Link to={`/products/${product.id}`}>{product.name}</Link></h2>
      <p className="text-gray-700">￥{product.price}</p>
    </li>
  ))}
</ul>
   <Link to="/register">新規登録</Link>
   <Link to="/login">ログイン</Link>
   <Link to="/logout">ログアウト</Link>
   <Link to="/cart">カート</Link>
   <Link to="/chat">チャット</Link>
   <Link to="/users">個人チャット</Link>
   <AdminLink></AdminLink>
    </div>
  );
}

