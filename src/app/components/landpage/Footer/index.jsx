export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-xl font-semibold mb-4">This is Footer</h1>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
