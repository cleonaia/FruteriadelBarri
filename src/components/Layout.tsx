import { useState, useEffect } from 'react'
import { Link, useLocation, Outlet } from 'react-router'
import { IconInstagram } from './Icons'

const NAV = [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Pedidos', to: '/pedidos' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    setScrolled(window.scrollY > 60)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  const navBg = isHome
    ? scrolled ? 'rgba(251,245,234,0.96)' : 'transparent'
    : 'rgba(251,245,234,0.98)'

  const navBorder = isHome
    ? scrolled ? '1px solid #e8d9b8' : '1px solid transparent'
    : '1px solid #e8d9b8'

  const logoColor = isHome && !scrolled ? '#fbf5ea' : '#1d4a2a'
  const logoSub = isHome && !scrolled ? 'rgba(168,201,126,0.9)' : '#e8601c'
  const linkColor = isHome && !scrolled ? 'rgba(251,245,234,0.85)' : '#1a1209bb'
  const linkHover = isHome && !scrolled ? '#f5c07a' : '#e8601c'
  const igBorder = isHome && !scrolled ? 'rgba(251,245,234,0.5)' : '#1d4a2a'
  const igColor = isHome && !scrolled ? '#fbf5ea' : '#1d4a2a'
  const igHoverBg = isHome && !scrolled ? 'rgba(251,245,234,0.15)' : '#1d4a2a'
  const igHoverColor = isHome && !scrolled ? '#fbf5ea' : '#fbf5ea'
  const burgerColor = isHome && !scrolled ? '#fbf5ea' : '#1d4a2a'

  return (
    <div style={{ fontFamily: "'Outfit', system-ui, sans-serif", backgroundColor: '#fbf5ea', color: '#1a1209', minHeight: '100vh' }}>
      {/* ─── NAV ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: navBg,
          backdropFilter: scrolled || !isHome ? 'blur(14px)' : 'none',
          borderBottom: navBorder,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between py-4 md:py-5">
          <Link to="/" className="flex flex-col leading-none">
            <span style={{ fontFamily: "'Fraunces', Georgia, serif", color: logoColor, fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.02em', transition: 'color 0.3s' }}>
              Frutería del Barri
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((l) => {
              const active = location.pathname === l.to
              return (
                <Link key={l.label} to={l.to}
                  className="text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{ color: active ? '#e8601c' : linkColor, fontWeight: active ? 600 : 500 }}
                  onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                  onMouseLeave={e => (e.currentTarget.style.color = active ? '#e8601c' : linkColor)}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          <a href="https://instagram.com/fruteria_del_barri" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 transition-all duration-200"
            style={{ color: igColor, border: `1.5px solid ${igBorder}`, borderRadius: '4px', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = igHoverBg; (e.currentTarget as HTMLElement).style.color = igHoverColor }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = igColor }}
          >
            <IconInstagram size={15} /> @fruteria_del_barri
          </a>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: burgerColor }} />
              <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: burgerColor }} />
              <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: burgerColor }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7" style={{ backgroundColor: '#fbf5ea' }}>
          <button className="absolute top-5 right-6 text-2xl font-light text-[#1d4a2a]" onClick={() => setMenuOpen(false)}>✕</button>
          {NAV.map((l) => (
            <Link key={l.label} to={l.to}
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                color: l.label === 'Pedidos' ? '#fbf5ea' : '#1d4a2a',
                fontSize: l.label === 'Pedidos' ? '1.6rem' : '2.2rem',
                fontStyle: l.label === 'Pedidos' ? 'normal' : 'italic',
                fontWeight: l.label === 'Pedidos' ? 700 : 400,
                textDecoration: 'none',
                backgroundColor: l.label === 'Pedidos' ? '#e8601c' : 'transparent',
                borderRadius: l.label === 'Pedidos' ? '6px' : '0',
              }}
              className={`transition-colors duration-200 ${l.label === 'Pedidos' ? 'w-[calc(100%-2rem)] max-w-sm py-4 text-center shadow-lg' : 'hover:text-[#e8601c]'}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://instagram.com/fruteria_del_barri" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 mt-2 text-sm font-semibold px-5 py-3"
            style={{ backgroundColor: '#1d4a2a', color: '#fbf5ea', borderRadius: '999px' }}
          >
            <IconInstagram size={15} /> @fruteria_del_barri
          </a>
        </div>
      )}

      {/* Page content */}
      <Outlet />

      {/* Mobile quick order action */}
      {location.pathname !== '/contacto' && (
        <Link
          to="/contacto#pedido"
          className="md:hidden fixed bottom-4 left-4 right-4 z-30 flex items-center justify-center gap-2 py-4 text-sm font-semibold shadow-xl"
          style={{ backgroundColor: '#e8601c', color: '#fbf5ea', borderRadius: '8px' }}
        >
          Hacer un pedido
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      )}

      {/* ─── FOOTER ─── */}
      <footer style={{ backgroundColor: '#1d4a2a' }} className="px-4 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Top: brand statement */}
          <div className="py-16 md:py-20" style={{ borderBottom: '1px solid rgba(251,245,234,0.1)' }}>
            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: '#fbf5ea', fontWeight: 700, lineHeight: 1.15, maxWidth: '600px', marginBottom: '1rem' }}>
              Frutería del Barri
            </p>
            <p style={{ color: '#a8c97e', fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              fruteriadelbarri.online
            </p>
            <p style={{ color: 'rgba(251,245,234,0.5)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '400px' }}>
              Frutas tropicales, exóticas y verduras frescas con todo el sabor latino en Sabadell.
            </p>
          </div>

          {/* Middle: contact + hours in a 4-col grid */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" style={{ borderBottom: '1px solid rgba(251,245,234,0.1)' }}>

            {/* Instagram */}
            <div>
              <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a8c97e', marginBottom: '1rem' }}>Instagram</p>
              <a href="https://instagram.com/fruteria_del_barri" target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(251,245,234,0.75)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fbf5ea')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,245,234,0.75)')}
              >
                <IconInstagram size={15} />
                @fruteria_del_barri
              </a>
            </div>

            {/* Dirección */}
            <div>
              <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a8c97e', marginBottom: '1rem' }}>Dirección</p>
              <a href="https://maps.google.com/?q=Avinguda+Matadepera+49+Sabadell" target="_blank" rel="noreferrer"
                className="flex items-start gap-2.5 text-sm transition-colors duration-200 leading-relaxed"
                style={{ color: 'rgba(251,245,234,0.75)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fbf5ea')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,245,234,0.75)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"/><circle cx="12" cy="9" r="2.5"/></svg>
                Avinguda Matadepera 49,<br />Sabadell
              </a>
              <a href="tel:+34633095615" className="flex items-center gap-2.5 text-sm mt-3 transition-colors duration-200"
                style={{ color: 'rgba(251,245,234,0.75)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fbf5ea')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,245,234,0.75)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                +34 633 09 56 15
              </a>
              <a href="mailto:fruteriadelbarri@gmail.com" className="flex items-center gap-2.5 text-sm mt-3 transition-colors duration-200"
                style={{ color: 'rgba(251,245,234,0.75)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fbf5ea')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,245,234,0.75)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                fruteriadelbarri@gmail.com
              </a>
            </div>

            {/* Horario */}
            <div className="lg:col-span-2">
              <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a8c97e', marginBottom: '1rem' }}>Horario</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                {[
                  { day: 'Lunes – Viernes', hours: '9:00–15:00 / 17:00–21:00', closed: false },
                  { day: 'Sábado', hours: '9:00–21:00 continuo', closed: false },
                  { day: 'Domingo', hours: 'Cerrado', closed: true },
                  { day: 'Festivos', hours: '9:00–15:00', closed: false },
                ].map((h) => (
                  <div key={h.day}>
                    <p style={{ color: 'rgba(251,245,234,0.45)', fontSize: '0.72rem', marginBottom: '0.2rem' }}>{h.day}</p>
                    <p style={{ color: h.closed ? '#e8601c' : '#fbf5ea', fontWeight: 500 }}>{h.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p style={{ fontSize: '0.75rem', color: 'rgba(251,245,234,0.3)' }}>
              © 2026 Frutería del Barri. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {[
                { label: 'Productos', to: '/productos' },
                { label: 'Pedidos', to: '/pedidos' },
                { label: 'Contacto', to: '/contacto' },
              ].map((l) => (
                <a key={l.label} href={l.to}
                  className="text-xs transition-colors duration-200"
                  style={{ color: 'rgba(251,245,234,0.35)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(251,245,234,0.7)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,245,234,0.35)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        input::placeholder, textarea::placeholder { color: rgba(26,18,9,0.3); }
      `}</style>
    </div>
  )
}
