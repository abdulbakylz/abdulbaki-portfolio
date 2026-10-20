
export default function Hero() {
    return (
      <section
        id="home"
        className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:px-12"
      >
        <div className="mb-8 w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Yazılım Geliştirme • Bilişim Sistemleri
        </div>
  
        <p className="mb-4 text-lg text-zinc-400">
          Merhaba, ben
        </p>
  
        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
          Abdülbaki
          <br />
          <span className="text-blue-500">Yıldız.</span>
        </h1>
  
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Bilişim Sistemleri ve Teknolojileri öğrencisiyim.
          Yazılım geliştirme, web teknolojileri ve modern dijital
          çözümler üzerine kendimi geliştiriyorum.
        </p>
  
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-7 py-4 font-medium transition hover:bg-blue-500"
          >
            Projelerimi İncele →
          </a>
  
          <a
            href="#about"
            className="rounded-full border border-zinc-700 px-7 py-4 font-medium transition hover:border-zinc-400"
          >
            Hakkımda
          </a>
        </div>
  
        <div className="mt-20 flex flex-wrap gap-8 border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Web Development</span>
          <span>Software Engineering</span>
        </div>
      </section>
    );
  }
  