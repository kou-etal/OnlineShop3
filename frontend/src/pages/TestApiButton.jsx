import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {axiosInstance} from '../api/axiosInstance';

export function TestApiButton() {
    const handleClick = async () => {
        try {
            const res = await axiosInstance.get('http://127.0.0.1:8000/api/user');
            console.log('ユーザー情報:', res.data);
        } catch (err) {
            console.error('APIエラー:', err.response?.data);
        }
    };

    return <button onClick={handleClick}>APIテスト</button>;
}