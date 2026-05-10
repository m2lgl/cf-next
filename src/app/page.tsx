'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-400 font-sans selection:bg-blue-500/30">
      
      <main className="max-w-xl mx-auto px-8 py-24 md:py-32">
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-2xl font-semibold text-zinc-100 tracking-tight">
            Manzz<span className="text-blue-500">.</span>
          </h1>
          <p className="text-xs uppercase tracking-widest text-zinc-600 mt-2">
            Learning Process — 2026
          </p>
        </header>

        {/* About Section */}
        <section className="space-y-8 text-[15px] leading-relaxed">
          <p>
            Halo, namaku <span className="text-zinc-200">Manzz</span>. Cuma seorang programmer pemula yang lagi seneng-senengnya belajar koding. Saat ini fokus gw lagi banyak di <span className="text-zinc-200 font-medium">JavaScript</span> dan pengembangan database sederhana pake Node.js.
          </p>

          <p>
            Gw mulai belajar ini semua karena hobi. Kadang masih pusing sama error sih, tapi itu yang bikin seru. Selain koding, gw juga masih harus bagi waktu sama tugas-tugas sekolah.
          </p>
          <p>
          Ngoding itu susah? Iya klo gamau belajar. Buat yang mau belajar mah, gas gas aja. Meski troubleshooting seharian, tapi disitulah letak asiknya. Wkwkwk
          </p>

          <div className="pt-8 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Target Belajar:</h2>
            <ul className="grid grid-cols-2 gap-3 text-xs uppercase tracking-wider font-medium text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Database (SQL)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Automation
              </li>
              <li className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Next.js
              </li>
            </ul>
          </div>
        </section>

        {/* Simple Note */}
        <section className="mt-20 p-6 bg-zinc-900/40 rounded-lg border border-zinc-800/50">
          <p className="text-sm italic opacity-70">
            "Gausah buru-buru jadi sepuh. Yang terpenting itu prosesnya. Bukan hasil."
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-zinc-900 text-[10px] tracking-widest uppercase text-zinc-600 text-center">
          &copy; 2026 Manzz Development
        </footer>

      </main>
    </div>
  );
}
