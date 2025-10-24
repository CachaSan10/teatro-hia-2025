import Navbar from './Navbar';
import Hero from './Hero';

export default function Header() {
  return (
    <header className="relative w-full">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
    </header>
  );
}