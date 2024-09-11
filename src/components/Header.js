// src/components/Header.js
export default function Header() {
    return (
      <header className="bg-gray-800 p-6">
        <nav className="flex justify-between text-white">
          <div className="font-bold">EMCodes</div>
          <div className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>
    );
  }
  