

// components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Trello-lite</h1>
        <div>
          <a href="/boards" className="mr-4 hover:underline">Boards</a>
          <a href="/login" className="hover:underline">Logout</a>
        </div>
      </nav>
    );
  }
  