// components/BoardCard.jsx
import Link from 'next/link';

export default function BoardCard({ board }) {
  return (
    <Link href={`/board/${board._id}`}>
      <div className="bg-white shadow-lg p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition ease-in-out">
        <h3 className="text-xl font-semibold text-gray-800">{board.name}</h3>
        <p className="text-sm text-gray-600">{board.description}</p>
      </div>
    </Link>
  );
}
