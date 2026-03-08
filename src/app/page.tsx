import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <div className="flex flex-col gap-32 py-24">
      <Hero />

      {/* Additional sections would go here (Features, Pricing, etc.) */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Everything you need to ship.</h2>
          <p className="text-lg text-muted-foreground">Built for performance, scalability, and developer experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {['Database', 'Auth', 'ORM'].map((tech) => (
            <div key={tech} className="p-10 glass rounded-3xl text-left space-y-6 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-full border-2 border-current" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{tech}</h3>
                <p className="text-muted-foreground leading-relaxed">Seamlessly integrated and configured for maximum performance and type-safety.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
