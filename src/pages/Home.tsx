import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0f2a17]">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1800&h=1200&fit=crop&auto=format"
            alt="Mercado de frutas y verduras colorido"
            className="w-full h-full object-cover opacity-60"
            style={{ mixBlendMode: 'luminosity' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(15,42,23,0.2) 0%, rgba(15,42,23,0.6) 50%, #0f2a17 100%)' }} />
        </div>

        {/* Decorative large number */}
        <div className="absolute top-32 right-8 md:right-16 select-none pointer-events-none"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(8rem, 20vw, 18rem)', fontWeight: 700, color: 'rgba(168,201,126,0.07)', lineHeight: 1, letterSpacing: '-0.04em' }}>
          01
        </div>

        {/* Floating badge top-right */}
        <div className="absolute top-28 right-4 md:right-16 hidden sm:flex items-center gap-2.5 px-4 py-2.5"
          style={{ backgroundColor: 'rgba(251,245,234,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(251,245,234,0.18)', borderRadius: '999px' }}>
          <span className="w-2 h-2 rounded-full bg-[#a8c97e] animate-pulse" />
          <span className="text-xs font-medium text-[#fbf5ea]/80 tracking-wider">Abierto hoy · 9:00–21:00</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pb-16 md:pb-28 pt-28 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="block h-px w-12" style={{ backgroundColor: '#a8c97e' }} />
                <span style={{ color: '#a8c97e', fontSize: '0.68rem', letterSpacing: '0.32em', fontWeight: 600, textTransform: 'uppercase' }}>
                  Frutería del Barri · Sabadell
                </span>
              </div>

              <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", lineHeight: 0.88, fontWeight: 700, letterSpacing: '-0.02em' }}
                className="text-[clamp(3.5rem,9vw,7.5rem)] text-[#fbf5ea] mb-8">
                Producto<br />
                <em className="font-normal italic" style={{ color: '#f5c07a' }}>fresco,</em><br />
                del campo<br />
                a tu casa.
              </h1>
            </div>

            <div className="lg:pb-4">
              <p style={{ color: 'rgba(251,245,234,0.72)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.7, maxWidth: '420px', marginBottom: '2.5rem' }}>
                Frutas tropicales, exóticas y verduras frescas de alta calidad — con todo el sabor latino que nos hace únicos en Avinguda Matadepera nº49.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/productos"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-4 transition-all duration-300"
                  style={{ backgroundColor: '#e8601c', color: '#fbf5ea', borderRadius: '4px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f5915a'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#e8601c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  Ver productos
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-4 transition-all duration-300"
                  style={{ border: '1px solid rgba(251,245,234,0.35)', color: '#fbf5ea', borderRadius: '4px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(251,245,234,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.6)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.35)' }}
                >
                  Encargar cesta
                </Link>
              </div>

              {/* Stat strip */}
              <div className="flex flex-wrap gap-6 md:gap-8 pt-8" style={{ borderTop: '1px solid rgba(251,245,234,0.12)' }}>
                {[
                  { num: 'Diario', label: 'Género fresco cada mañana' },
                  { num: '+15', label: 'Variedades de fruta tropical' },
                  { num: '100%', label: 'Producto de proximidad' },
                ].map((s) => (
                  <div key={s.num}>
                    <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.35rem', fontWeight: 700, color: '#fbf5ea', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(251,245,234,0.5)', letterSpacing: '0.1em', marginTop: '0.4rem', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(251,245,234,0.35)]" />
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.28em', color: 'rgba(251,245,234,0.35)', textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </section>

      {/* ═══ TICKER ═══ */}
      <div style={{ backgroundColor: '#1d4a2a', borderTop: '1px solid rgba(168,201,126,0.2)' }} className="py-4 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 36s linear infinite' }}>
          {Array(4).fill([
            'Melón Manchego', 'Sandía de La Mancha', 'Melocotón', 'Plátano Canario',
            'Calabacín', 'Pimientos del Campo', 'Tomates del Campo', 'Mango Tropical',
            'Maracuyá', 'Producto de Proximidad',
          ]).flat().map((item, i) => (
            <span key={i} className="flex items-center text-xs font-medium tracking-[0.2em] uppercase mr-8" style={{ color: '#a8c97e' }}>
              <span className="w-1 h-1 rounded-full mr-8 shrink-0" style={{ backgroundColor: '#a8c97e', opacity: 0.5 }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ EDITORIAL QUOTE BAND ═══ */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: '#fbf5ea' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.15, fontWeight: 400, color: '#1a1209', fontStyle: 'italic' }}>
                "La frescura del campo<br />
                <span style={{ color: '#1d4a2a', fontWeight: 700, fontStyle: 'normal' }}>directa a tu mesa,</span><br />
                cada día, en tu barrio."
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:border-l lg:pl-12" style={{ borderColor: '#e8d9b8' }}>
              {[
                { num: 'Cada mañana', label: 'Recibimos género fresco del productor directo' },
                { num: 'Sin intermediarios', label: 'La mejor calidad al mejor precio del barrio' },
              ].map((s) => (
                <div key={s.num} className="flex flex-col gap-1.5">
                  <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: '#1d4a2a' }}>{s.num}</div>
                  <div style={{ fontSize: '0.82rem', color: '#1a1209aa', lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3 PROMO BANNERS — ASYMMETRIC ═══ */}
      <section className="pb-12 md:pb-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 md:gap-4 h-auto lg:h-[580px]">

            {/* Large left card */}
            <div className="lg:col-span-3 relative overflow-hidden group" style={{ borderRadius: '12px', minHeight: '340px' }}>
              <img
                src="https://images.unsplash.com/photo-1487376480913-24046456a727?w=900&h=700&fit=crop&auto=format"
                alt="Frutas tropicales de temporada"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,42,23,0.95) 0%, rgba(15,42,23,0.4) 50%, transparent 100%)' }} />
              <div className="absolute top-6 left-6">
                <span className="text-xs font-semibold px-3 py-1.5 tracking-widest uppercase"
                  style={{ backgroundColor: '#e8601c', color: '#fbf5ea', borderRadius: '3px' }}>
                  Esta semana
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", color: '#fbf5ea', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.75rem' }}>
                  Ofertas de<br />Temporada
                </h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(251,245,234,0.7)', maxWidth: '340px', lineHeight: 1.6 }}>
                  Frutas, verduras y patatas frescas al mejor precio. Directo del productor, cada semana.
                </p>
                <Link to="/productos"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 transition-all duration-200"
                  style={{ backgroundColor: '#fbf5ea', color: '#1d4a2a', borderRadius: '3px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#a8c97e' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#fbf5ea' }}
                >
                  Ver Productos
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* Two stacked right cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Mayorista */}
              <div className="relative overflow-hidden group flex-1" style={{ borderRadius: '12px', minHeight: '200px' }}>
                <img
                  src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=700&h=400&fit=crop&auto=format"
                  alt="Frutas al por mayor"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(232,96,28,0.95) 0%, rgba(232,96,28,0.45) 55%, transparent 100%)' }} />
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold px-3 py-1.5 tracking-widest uppercase"
                    style={{ backgroundColor: '#1d4a2a', color: '#fbf5ea', borderRadius: '3px' }}>
                    Al por menor
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", color: '#fbf5ea', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Al por menor
                  </h3>
                  <p className="text-xs mb-4" style={{ color: 'rgba(251,245,234,0.82)', lineHeight: 1.6 }}>
                    Para comercios, restaurantes y eventos.
                  </p>
                  <Link to="/mayorista"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                    style={{ color: '#fbf5ea' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Más información
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>

              {/* Contacto */}
              <div className="relative overflow-hidden group flex-1" style={{ borderRadius: '12px', minHeight: '200px' }}>
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&h=400&fit=crop&auto=format"
                  alt="Tienda de frutas y verduras"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,42,23,0.95) 0%, rgba(15,42,23,0.45) 55%, transparent 100%)' }} />
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold px-3 py-1.5 tracking-widest uppercase"
                    style={{ backgroundColor: '#f5c07a', color: '#1a1209', borderRadius: '3px' }}>
                    Visítanos
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", color: '#fbf5ea', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Encarga tu cesta
                  </h3>
                  <p className="text-xs mb-4" style={{ color: 'rgba(251,245,234,0.82)', lineHeight: 1.6 }}>
                    Llámanos o escríbenos y lo preparamos.
                  </p>
                  <Link to="/contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                    style={{ color: '#f5c07a' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Contactar
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOTO STRIP — 4 panels ═══ */}
      <div className="px-4 md:px-12 mb-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 h-48 sm:h-64 md:h-80">
          {[
            { img: 'https://images.unsplash.com/photo-1568391047493-d859d5ddb509?w=500&h=600&fit=crop&auto=format', label: 'Frutas', alt: 'Frutas frescas coloridas' },
            { img: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=500&h=600&fit=crop&auto=format', label: 'Verduras', alt: 'Verduras frescas del campo' },
            { img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&h=600&fit=crop&auto=format', label: 'Tropical', alt: 'Frutas tropicales' },
            { img: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&h=600&fit=crop&auto=format', label: 'Mango', alt: 'Mango tropical' },
          ].map((item, i) => (
            <div key={item.label} className="relative overflow-hidden group" style={{ borderRadius: '8px' }}>
              <img src={item.img} alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,42,23,0.75) 0%, transparent 50%)' }} />
              <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: 'rgba(251,245,234,0.85)', fontFamily: "'Outfit', sans-serif" }}>
                {item.label}
              </span>
              {i === 0 && (
                <span className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1"
                  style={{ backgroundColor: '#a8c97e', color: '#0f2a17', borderRadius: '3px', letterSpacing: '0.1em' }}>
                  Fresco
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA BOTTOM STRIP ═══ */}
      <section className="py-20 px-6 md:px-12 mb-0" style={{ backgroundColor: '#1d4a2a' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fbf5ea', fontWeight: 700, lineHeight: 1.2 }}>
              ¿Quieres encargar tu<br />
              <em className="font-normal italic" style={{ color: '#f5c07a' }}>cesta semanal?</em>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+34633095615"
              className="inline-flex items-center gap-2.5 text-sm font-semibold px-7 py-4 transition-all duration-200"
              style={{ backgroundColor: '#fbf5ea', color: '#1d4a2a', borderRadius: '4px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#a8c97e' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#fbf5ea' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              Llámanos
            </a>
            <Link to="/contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-4 transition-all duration-200"
              style={{ border: '1px solid rgba(251,245,234,0.3)', color: '#fbf5ea', borderRadius: '4px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(251,245,234,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.6)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.3)' }}
            >
              Escribirnos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
