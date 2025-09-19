import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">This is Header</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
            <li>
              <button onClick={() => router.push("/signup")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition">
                Sign Up
              </button>
            </li>
            <li>
              <button onClick={() => router.push("/login")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition">
                Log In
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
