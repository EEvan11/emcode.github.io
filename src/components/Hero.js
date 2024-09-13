// src/components/Hero.js
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="uppercase text-sm tracking-widest text-gray-600 mb-4">EMCodes</h2>

      <div className="relative w-full bg-black text-white py-10">
        <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.338 4.1a1 1 0 00.95.69h4.314c.969 0 1.371 1.24.588 1.81l-3.492 2.54a1 1 0 00-.363 1.118l1.337 4.1c.3.921-.755 1.688-1.54 1.118L10 14.927l-3.492 2.54c-.784.57-1.838-.197-1.539-1.118l1.338-4.1a1 1 0 00-.363-1.118L2.452 9.527c-.783-.57-.381-1.81.588-1.81h4.314a1 1 0 00.95-.69l1.337-4.1z" />
          </svg>
        </div>

        <h1 className="text-7xl md:text-8xl font-serif">
          EVAN
          <br />
          MARTINEZ
        </h1>

        <div className="absolute top-0 right-0 transform -translate-y-1/2 -translate-x-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.338 4.1a1 1 0 00.95.69h4.314c.969 0 1.371 1.24.588 1.81l-3.492 2.54a1 1 0 00-.363 1.118l1.337 4.1c.3.921-.755 1.688-1.54 1.118L10 14.927l-3.492 2.54c-.784.57-1.838-.197-1.539-1.118l1.338-4.1a1 1 0 00-.363-1.118L2.452 9.527c-.783-.57-.381-1.81.588-1.81h4.314a1 1 0 00.95-.69l1.337-4.1z" />
          </svg>
        </div>
      </div>

      <p className="mt-6 px-6 max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
      A Full Stack Developer building web experiences </p>
    </section>
  );
}
