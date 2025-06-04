import { useParams ,Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {axiosInstance} from '../api/axiosInstance';
import echo from '../echo';

export const PrivateMessage=(props)=>{
    const {currentUserId} =props;
    const {targetUserId} = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const user1 = Math.min(currentUserId, targetUserId);
    const user2 = Math.max(currentUserId, targetUserId);

    useEffect(() => {
     echo.private(`chat.${user1}.${user2}`)
            .listen('.PrivateMessageSent', (e) => {
                setMessages((prev) => [...prev, e.message]);
            });

        return () => {
            echo.leave(`private-chat.${user1}.${user2}`);
        };
    }, [user1, user2]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('http://127.0.0.1:8000/api/send-private-message',{input,targetUserId});
            if (res.status === 200) {
                setInput('');
            }
        } catch (err) {
            console.error('送信失敗', err);
        }
    };

    return (
        <div>
            <h2>Chat with User {targetUserId}</h2>
            <ul>
                {messages.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="メッセージを入力"
                />
                <button type="submit">送信</button>
            </form>
        </div>
    );
}
