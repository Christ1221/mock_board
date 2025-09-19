export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8">
          Discover powerful tools and features to boost your productivity and grow your business.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
