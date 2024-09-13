// src/components/Contact.js
export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <p className="text-center text-lg mb-8">
            I'd love to hear from you! Feel free to reach out via the form below or send me an email at
            <span className="text-blue-400"> eevanmartinez@gmail.com</span>.
          </p>
          <form className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  