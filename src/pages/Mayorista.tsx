import { Link } from 'react-router'

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/>
      </svg>
    ),
    num: '01',
    title: 'Elige tus productos',
    body: 'Dinos qué frutas y verduras necesitas y las cantidades aproximadas.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    num: '02',
    title: 'Envíanos el pedido',
    body: 'Rellena un formulario breve desde el móvil. Solo necesitamos tus datos y tu lista.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    num: '03',
    title: 'Te lo confirmamos',
    body: 'Te contactamos para confirmar disponibilidad, precio y la mejor hora de recogida.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    num: '04',
    title: 'Recoge sin esperas',
    body: 'Tu pedido estará preparado en Avinguda Matadepera 49, Sabadell.',
  },
]

export default function Mayorista() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0f2a17', minHeight: '70vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&h=900&fit=crop&auto=format"
            alt="Frutas y verduras preparadas para pedidos"
            className="w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f2a17 30%, rgba(15,42,23,0.5) 70%, rgba(15,42,23,0.15) 100%)' }} />
        </div>

        {/* Decorative number */}
        <div className="absolute top-24 right-10 select-none pointer-events-none"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(8rem, 18vw, 16rem)', fontWeight: 700, color: 'rgba(168,201,126,0.06)', lineHeight: 1, letterSpacing: '-0.04em' }}>
          02
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full pb-14 md:pb-28 pt-28 md:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10" style={{ backgroundColor: '#a8c97e' }} />
                <span style={{ color: '#a8c97e', fontSize: '0.68rem', letterSpacing: '0.32em', fontWeight: 600, textTransform: 'uppercase' }}>
                  Fácil · Rápido · Sin esperas
                </span>
              </div>
              <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.9, color: '#fbf5ea', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Haz tu pedido<br />
                <em style={{ color: '#f5c07a', fontStyle: 'italic', fontWeight: 400 }}>fácil y rápido</em>
              </h1>
            </div>
            <div className="lg:pb-2">
              <p style={{ color: 'rgba(251,245,234,0.7)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Cuéntanos qué necesitas desde el móvil. Te confirmamos la disponibilidad y lo dejamos preparado para recoger en tienda.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contacto#pedido"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-4 transition-all duration-200"
                  style={{ backgroundColor: '#e8601c', color: '#fbf5ea', borderRadius: '4px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f5915a'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#e8601c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  Empezar pedido
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="tel:+34633095615"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold px-7 py-4 transition-all duration-200"
                  style={{ border: '1px solid rgba(251,245,234,0.3)', color: '#fbf5ea', borderRadius: '4px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.7)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(251,245,234,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.3)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                  +34 633 09 56 15
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-14 md:py-24 px-4 md:px-12" style={{ backgroundColor: '#fbf5ea' }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-10" style={{ backgroundColor: '#e8601c' }} />
            <span style={{ color: '#e8601c', fontSize: '0.68rem', letterSpacing: '0.28em', fontWeight: 600, textTransform: 'uppercase' }}>
              Pedir es muy fácil
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: '#e8d9b8' }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="p-10 flex gap-8 items-start" style={{ backgroundColor: '#fbf5ea' }}>
                <div className="shrink-0 mt-1 p-3" style={{ backgroundColor: '#e8f5ec', borderRadius: '8px' }}>
                  {f.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '0.72rem', fontWeight: 700, color: '#e8601c', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                    {f.num}
                  </p>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: '1.25rem', color: '#1a1209', marginBottom: '0.6rem', lineHeight: 1.2 }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#1a1209', opacity: 0.6 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHOTO + QUOTE ═══ */}
      <section className="px-4 md:px-12 pb-14 md:pb-24" style={{ backgroundColor: '#fbf5ea' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Photo */}
          <div className="lg:col-span-3 overflow-hidden" style={{ borderRadius: '10px', height: '400px' }}>
            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1000&h=600&fit=crop&auto=format"
              alt="Mercado de frutas y verduras frescas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote + CTA */}
          <div className="lg:col-span-2 flex flex-col justify-center p-10 md:p-12"
            style={{ backgroundColor: '#1d4a2a', borderRadius: '10px' }}>
            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', color: '#fbf5ea', fontStyle: 'italic', lineHeight: 1.4, marginBottom: '2rem' }}>
              "Producto fresco, precios justos y un trato personal que ya no se encuentra en muchos sitios."
            </p>
            <p className="text-xs font-medium mb-10" style={{ color: '#a8c97e', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              — Clientes habituales, Sabadell
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/contacto"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-4 transition-all duration-200"
                style={{ backgroundColor: '#e8601c', color: '#fbf5ea', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f5915a' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#e8601c' }}
              >
                Contactar ahora
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="mailto:fruteriadelbarri@gmail.com"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-4 transition-all duration-200"
                style={{ border: '1px solid rgba(251,245,234,0.25)', color: 'rgba(251,245,234,0.75)', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.6)'; (e.currentTarget as HTMLElement).style.color = '#fbf5ea' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,245,234,0.25)'; (e.currentTarget as HTMLElement).style.color = 'rgba(251,245,234,0.75)' }}
              >
                fruteriadelbarri@gmail.com
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
