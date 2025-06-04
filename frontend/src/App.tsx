import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ProductList} from './pages/ProductList';
import {RegisterForm} from './pages/RegisterForm';
import {LoginForm} from './pages/LoginForm';
import {Logout} from './pages/Logout';
import {LogoutTest} from './pages/LogoutTest';
import {LoginFormTest} from './pages/LoginFormTest';
import {TestApiButton} from './pages/TestApiButton';
import {ProductDetails} from './pages/ProductDetails';
import {CartList} from './pages/CartList';
import {DashBoard} from './pages/DashBoard';
import {UserData} from './pages/UserData';
import {GroupMessage} from './pages/GroupMessage';
import {PrivateMessage} from './pages/PrivateMessage';
import {User} from './pages/User';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartList/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/login" element={<LoginFormTest/>} />
        <Route path="/logout" element={<LogoutTest/>} />
        <Route path="/user" element={<TestApiButton/>} />
        <Route path="/users" element={<User/>} />
        <Route path="/chat" element={<GroupMessage/>} />
        <Route path="/privatechat/:targetUserId" element={<PrivateMessage/>} />
        <Route path="/admin/dashboard" element={<DashBoard/>} />
        <Route path="/admin/users" element={<UserData/>} />
        </Routes>
    </BrowserRouter>
  );
}
//<<Route path="/" element={<RegisterForm />} />

