// pages/boards.jsx
import { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';
import Navbar from '../components/Navbar';
import BoardCard from '../components/BoardCard';

export default function Boards() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await axios.get('/api/boards');
        setBoards(res.data);
      } catch (err) {
        console.error('Failed to fetch boards:', err);
      }
    };

    fetchBoards();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <BoardCard key={board._id} board={board} />
        ))}
      </div>
    </div>
  );
}
