// src/components/Hero.js
export default function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">Hi, I'm Evans</h1>
        <p className="text-xl mt-4">A Full Stack Developer building web experiences</p>
        <a href="#contact" className="mt-8 bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
  Contact Me
</a>

      </section>
    );
  }
  