// pages/board/[id].jsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../../utils/axiosInstance';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import DnDWrapper from '../../components/DnDWrapper';

export default function BoardPage() {
  const [board, setBoard] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchBoard = async () => {
        try {
          const res = await axios.get(`/api/boards/${id}`);
          setBoard(res.data);
        } catch (err) {
          console.error('Failed to fetch board:', err);
        }
      };

      fetchBoard();
    }
  }, [id]);

  const handleDragEnd = (result) => {
    // Handle drag-and-drop logic here
  };

  if (!board) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-semibold text-center p-4">{board.name}</h1>
      <DnDWrapper onDragEnd={handleDragEnd}>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {board.lists.map((list, index) => (
            <List key={list._id} list={list} index={index} />
          ))}
        </div>
      </DnDWrapper>
    </div>
  );
}
