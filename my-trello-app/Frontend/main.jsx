// pages/boards.jsx
import { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';
import Main from '../components/Main';
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
    <Main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <BoardCard key={board._id} board={board} />
        ))}
      </div>
    </Main>
  );
}
