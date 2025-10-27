export default function BrandStory() {
  return (
    <section id="story" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-200/70">Our Philosophy</p>
          <h3 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Minimal form, maximal emotion
          </h3>
          <p className="mt-4 text-purple-100/80">
            We design modern fragrances like architecture — clean lines, rich textures, and unexpected light. 
            Each bottle is an expression of contrast: the softness of lavender against the glow of amber, 
            the hush of iris with the spark of citrus. Purple for mystery, gold for warmth, black for depth.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">
              Cruelty-free
            </span>
            <span className="rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-100">
              Long-lasting
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
              Genderless
            </span>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-2 md:order-2">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1563170423-18f482d82cc8?q=80&w=1200&auto=format&fit=crop"
              alt="Minimalist perfume bottles on gradient background"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
