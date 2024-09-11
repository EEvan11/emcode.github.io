// src/app/layout.js
import './globals.css';  // Import your CSS or TailwindCSS
import Header from '../components/Header';  // Add your components

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my work and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />  {/* Navigation bar */}
        {children}  {/* This renders the content of the current page */}
      </body>
    </html>
  );
}
