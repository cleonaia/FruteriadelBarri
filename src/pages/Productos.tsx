import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router'
import { FRUTAS, VERDURAS, BATIDOS } from '../data'
import { IconInstagram } from '../components/Icons'

type Tab = 'frutas' | 'verduras' | 'batidos'

const LeafIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

function ProductCard({ p }: { p: { name: string; desc: string; tag: string; origin: string; img: string; alt: string } }) {
  return (
    <div
      className="group overflow-hidden transition-all duration-300 flex flex-col"
      style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #ede6d6' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(29,74,42,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
    >
      <div className="relative overflow-hidden" style={{ height: '210px', backgroundColor: '#e8d9b8' }}>
        <img src={p.img} alt={p.alt}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1"
            style={{ backgroundColor: 'rgba(251,245,234,0.95)', color: '#1d4a2a', borderRadius: '3px', backdropFilter: 'blur(4px)' }}>
            <LeafIcon /> {p.tag}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.08rem', color: '#1a1209', lineHeight: 1.2 }}>
          {p.name}
        </h3>
        <p className="text-xs leading-relaxed flex-1" style={{ color: '#1a1209', opacity: 0.55 }}>{p.desc}</p>
        <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid #f0e8d8' }}>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium" style={{ color: '#1d4a2a' }}>Fresco hoy</span>
            <span className="text-xs" style={{ color: '#1a1209', opacity: 0.4 }}>Origen: {p.origin}</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#a8c97e]" />
        </div>
      </div>
    </div>
  )
}

const TAB_ICONS = {
  frutas: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
    </svg>
  ),
  verduras: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  batidos: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l1 7H7L8 2z"/><path d="M7 9l1.5 11h7L17 9"/><path d="M9 13h6"/>
    </svg>
  ),
}

export default function Productos() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab') as Tab | null
  const [activeTab, setActiveTab] = useState<Tab>(tabParam === 'batidos' ? 'batidos' : tabParam === 'verduras' ? 'verduras' : 'frutas')

  useEffect(() => {
    if (tabParam && ['frutas', 'verduras', 'batidos'].includes(tabParam)) {
      setActiveTab(tabParam as Tab)
    }
  }, [tabParam])

  const handleTab = (tab: Tab) => {
    setActiveTab(tab)
    setSearchParams(tab === 'frutas' ? {} : { tab })
  }

  const products = activeTab === 'frutas' ? FRUTAS : activeTab === 'verduras' ? VERDURAS : BATIDOS

  return (
    <>
      {/* Header hero */}
      <section className="pt-24 md:pt-36 pb-10 md:pb-14 px-4 md:px-12" style={{ backgroundColor: '#fbf5ea', borderBottom: '1px solid #ede6d6' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e8601c]" />
              <span style={{ color: '#e8601c', fontSize: '0.68rem', letterSpacing: '0.28em', fontWeight: 600, textTransform: 'uppercase' }}>
                Del campo · Todo de proximidad
              </span>
            </div>
            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.0, letterSpacing: '-0.02em', color: '#1a1209' }}>
              Nuestros <em style={{ color: '#1d4a2a', fontStyle: 'italic', fontWeight: 400 }}>productos</em>
            </h1>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#1a1209', opacity: 0.55 }}>
            Género fresco cada mañana. Sin intermediarios, con toda la calidad del productor directo.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-12" style={{ backgroundColor: '#fff8f2', minHeight: '60vh' }}>
        <div className="max-w-7xl mx-auto">

          {/* Tabs */}
          <div className="flex gap-1.5 mb-10 p-1.5 w-fit overflow-x-auto max-w-full" style={{ backgroundColor: '#ede6d6', borderRadius: '6px' }}>
            {([
              { key: 'frutas' as Tab, label: 'Frutas', count: FRUTAS.length },
              { key: 'verduras' as Tab, label: 'Verduras', count: VERDURAS.length },
              { key: 'batidos' as Tab, label: 'Batidos', count: BATIDOS.length },
            ]).map((tab) => (
              <button key={tab.key} onClick={() => handleTab(tab.key)}
                className="px-5 py-2.5 text-sm font-medium transition-all duration-200 flex items-center gap-2"
                style={{
                  borderRadius: '4px',
                  backgroundColor: activeTab === tab.key ? '#1d4a2a' : 'transparent',
                  color: activeTab === tab.key ? '#fbf5ea' : '#1a1209aa',
                  border: 'none', cursor: 'pointer',
                  boxShadow: activeTab === tab.key ? '0 2px 8px rgba(29,74,42,0.25)' : 'none',
                }}
              >
                {TAB_ICONS[tab.key]}
                {tab.label}
                <span className="text-xs px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: activeTab === tab.key ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.07)',
                    color: activeTab === tab.key ? 'rgba(251,245,234,0.8)' : '#1a1209aa',
                  }}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p) => <ProductCard key={p.name} p={p} />)}
          </div>

          {/* CTA */}
          <div className="mt-20 pt-12 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderTop: '1px solid #ede6d6' }}>
            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.3rem', color: '#1a1209', fontStyle: 'italic' }}>
              ¿Quieres hacer un pedido o encargar tu cesta semanal?
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+34633095615"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 transition-all duration-200"
                style={{ backgroundColor: '#1d4a2a', color: '#fbf5ea', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2d6b3f' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1d4a2a' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                Llamar para encargar
              </a>
              <Link to="/mayorista"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 transition-all duration-200"
                style={{ border: '1.5px solid #e8601c', color: '#e8601c', borderRadius: '4px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#e8601c'; (e.currentTarget as HTMLElement).style.color = '#fbf5ea' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#e8601c' }}
              >
                Pedido al por menor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
