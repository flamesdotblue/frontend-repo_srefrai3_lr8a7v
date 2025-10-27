import Spline from '@splinetool/react-spline';
import { Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to match theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-black/30 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-xs uppercase tracking-[0.2em] text-purple-200/90">Purple • Gold • Black</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-purple-200 via-purple-100 to-yellow-300 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl">
          The Fragrance of Creativity
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-purple-100/80 md:text-lg">
          Modern. Minimal. Magnetic. Curated scents crafted for presence and poise — bottled elegance for the bold.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#collections"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-800/30 transition hover:scale-[1.02] hover:shadow-purple-700/40"
          >
            Explore Collection
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center rounded-full border border-yellow-400/30 bg-black/50 px-6 py-3 text-sm font-medium text-yellow-300/90 backdrop-blur transition hover:border-yellow-300/60 hover:text-yellow-200"
          >
            <Star className="mr-2 h-4 w-4" />
            Our Philosophy
          </a>
        </div>
      </div>
    </section>
  );
}
