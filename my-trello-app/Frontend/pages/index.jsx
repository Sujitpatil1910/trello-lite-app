// pages/index.jsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Trello-lite</h1>
        <p className="mb-6">A simple project management app</p>
        <Link href="/login">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
