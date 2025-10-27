import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Violet Noir',
    note: 'Blackcurrant • Iris • Amber',
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5adbd4b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Gilded Dawn',
    note: 'Bergamot • Neroli • Musk',
    badge: 'Signature',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Amethyst Muse',
    note: 'Lavender • Vanilla • Tonka',
    badge: 'Exclusive',
    image:
      'https://images.unsplash.com/photo-1613243555978-c093ac5a1c38?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-purple-200/70">Curated Selection</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Featured Scents</h2>
        </div>
        <a
          href="#"
          className="hidden rounded-full border border-purple-300/30 px-4 py-2 text-sm text-purple-100/90 hover:border-purple-300/60 md:inline-block"
        >
          View all
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-xl shadow-purple-950/20 transition"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full border border-yellow-400/30 bg-black/60 px-3 py-1 text-xs font-medium text-yellow-300/90 backdrop-blur">
                {p.badge}
              </span>
            </div>
            <div className="flex items-start justify-between p-5">
              <div>
                <h3 className="text-lg font-medium text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-purple-100/70">{p.note}</p>
              </div>
              <div className="flex items-center gap-1 text-yellow-300">
                <Star className="h-4 w-4 fill-yellow-300" />
                <Star className="h-4 w-4 fill-yellow-300" />
                <Star className="h-4 w-4 fill-yellow-300" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
              </div>
            </div>
            <div className="px-5 pb-5">
              <button className="w-full rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
                Add to bag
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
