import Hero from './components/Hero.jsx';
import Collections from './components/Collections.jsx';
import BrandStory from './components/BrandStory.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Accent glow backgrounds */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <Hero />
      <Collections />
      <BrandStory />
      <SiteFooter />
    </div>
  );
}

export default App;
