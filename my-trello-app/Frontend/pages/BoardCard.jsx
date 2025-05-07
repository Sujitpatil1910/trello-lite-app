import Link from 'next/link';

export default function BoardCard({ board }) {
  return (
    <Link href={`/board/${board._id}`}>
      <div className="bg-white shadow p-4 rounded hover:bg-gray-100 cursor-pointer">
        <h3 className="text-lg font-semibold">{board.name}</h3>
        <p className="text-sm text-gray-600">{board.description}</p>
      </div>
    </Link>
  );
}