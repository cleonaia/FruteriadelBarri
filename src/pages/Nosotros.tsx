import { Link } from 'react-router'
import { IconInstagram } from '../components/Icons'

const VALORES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Sabor Auténtico',
    body: 'Frutas tropicales seleccionadas en su punto óptimo de maduración, traídas directamente del productor.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Tu Barrio',
    body: 'Somos parte del barrio de Sabadell y queremos ser tu frutería de confianza día a día.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    title: 'Frescura Diaria',
    body: 'Recibimos género fresco cada mañana directamente del campo para garantizar la mejor calidad.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="1"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      </svg>
    ),
    title: 'Entrega a Domicilio',
    body: '¿No puedes venir? Te llevamos la frescura a casa, lunes a sábado.',
    extra: 'Contacta por Instagram o al +34 633 09 56 15',
  },
]

export default function Nosotros() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0f2a17', minHeight: '60vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600&h=800&fit=crop&auto=format"
            alt="Mercado de frutas"
            className="w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f2a17 30%, rgba(15,42,23,0.5) 70%, transparent 100%)' }} />
        </div>

        <div className="absolute top-24 right-10 select-none pointer-events-none"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(8rem, 18vw, 16rem)', fontWeight: 700, color: 'rgba(168,201,126,0.06)', lineHeight: 1, letterSpacing: '-0.04em' }}>
          04
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full pb-14 md:pb-28 pt-28 md:pt-40">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10" style={{ backgroundColor: '#a8c97e' }} />
            <span style={{ color: '#a8c97e', fontSize: '0.68rem', letterSpacing: '0.32em', fontWeight: 600, textTransform: 'uppercase' }}>
              Nuestra Historia
            </span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.9, color: '#fbf5ea', fontWeight: 700, letterSpacing: '-0.02em', maxWidth: '700px' }}>
            El sabor latino<br />
            <em style={{ color: '#f5c07a', fontStyle: 'italic', fontWeight: 400 }}>en tu barrio.</em>
          </h1>
        </div>
      </section>

      {/* ═══ HISTORIA ═══ */}
      <section className="py-14 md:py-24 px-4 md:px-12" style={{ backgroundColor: '#fbf5ea' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Text */}
          <div>
            <div className="h-px w-12 mb-10" style={{ backgroundColor: '#e8601c' }} />
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#1a1209', opacity: 0.7, marginBottom: '1.5rem' }}>
              Somos la Frutería del Barri, tu tienda de frutas tropicales, verduras y patatas de confianza en Sabadell. Traemos los mejores sabores de Latinoamérica directamente a tu barrio: lulo, maracuyá, guanábana, mango, kiwi y mucho más.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#1a1209', opacity: 0.6, marginBottom: '3rem' }}>
              Además preparamos batidos tropicales frescos al momento y ofrecemos verduras, tubérculos, productos a granel, legumbres, miel natural, yerba mate y bebidas. Ven a visitarnos en Avinguda Matadepera 49.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: '#e8d9b8' }}>
              {VALORES.map((v) => (
                <div key={v.title} className="p-6" style={{ backgroundColor: '#fbf5ea' }}>
                  <span className="block mb-3">{v.icon}</span>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: '1rem', color: '#1a1209', marginBottom: '0.4rem' }}>
                    {v.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#1a1209', opacity: 0.55 }}>{v.body}</p>
                  {v.extra && <p className="text-xs mt-2 font-medium" style={{ color: '#1d4a2a' }}>{v.extra}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Photo with floating elements */}
          <div className="relative mt-8 lg:mt-0">
            <div className="overflow-hidden" style={{ borderRadius: '10px', aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1000&fit=crop&auto=format"
                alt="Frutas y verduras variadas en el mercado"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-3 md:-right-6 p-6 text-center"
              style={{ backgroundColor: '#e8601c', borderRadius: '10px' }}>
              <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '2.2rem', color: '#fbf5ea', lineHeight: 1, fontWeight: 700 }}>100%</div>
              <div style={{ fontSize: '0.65rem', marginTop: '0.3rem', fontWeight: 600, color: 'rgba(251,245,234,0.85)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Natural</div>
            </div>
            {/* Instagram pill */}
            <a href="https://instagram.com/fruteria_del_barri" target="_blank" rel="noreferrer"
              className="absolute -bottom-4 left-0 md:-left-5 flex items-center gap-2.5 px-5 py-3.5 transition-opacity duration-200 hover:opacity-80"
              style={{ backgroundColor: '#fbf5ea', borderRadius: '8px', boxShadow: '0 6px 24px rgba(0,0,0,0.12)' }}>
              <span style={{ color: '#1a1209' }}><IconInstagram size={20} /></span>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1a1209', lineHeight: 1 }}>@fruteria_del_barri</p>
                <p style={{ fontSize: '0.68rem', marginTop: '0.2rem', color: '#1a1209', opacity: 0.55 }}>Síguenos en Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOTO STRIP ═══ */}
      <div className="px-4 md:px-12 mb-0 max-w-7xl mx-auto pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 overflow-hidden" style={{ height: 'auto', minHeight: '180px', borderRadius: '10px' }}>

          {[
            { img: 'https://images.unsplash.com/photo-1560761098-21f5722ecb14?w=600&h=400&fit=crop&auto=format', label: 'Frutas del campo', alt: 'Frutas' },
            { img: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=600&h=400&fit=crop&auto=format', label: 'Verduras frescas', alt: 'Verduras' },
            { img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=400&fit=crop&auto=format', label: 'Batidos naturales', alt: 'Batidos' },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden group" style={{ borderRadius: '8px', height: '200px' }}>
              <img src={item.img} alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-end p-5"
                style={{ background: 'linear-gradient(to top, rgba(15,42,23,0.85), transparent 55%)' }}>
                <span style={{ fontFamily: "'Fraunces', Georgia, serif", color: '#fbf5ea', fontSize: 'clamp(0.8rem, 2vw, 1.1rem)', fontStyle: 'italic' }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <section className="py-14 md:py-24 px-4 md:px-12" style={{ backgroundColor: '#fbf5ea' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-10" style={{ borderTop: '1px solid #e8d9b8' }}>
          <div>
            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1a1209', fontWeight: 700, lineHeight: 1.2 }}>
              ¿Quieres conocernos<br />
              <em className="font-normal italic" style={{ color: '#1d4a2a' }}>mejor?</em>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-4 transition-all duration-200"
              style={{ backgroundColor: '#1d4a2a', color: '#fbf5ea', borderRadius: '4px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2d6b3f' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1d4a2a' }}
            >
              Contactar
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/productos"
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-4 transition-all duration-200"
              style={{ border: '1.5px solid #1d4a2a', color: '#1d4a2a', borderRadius: '4px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1d4a2a'; (e.currentTarget as HTMLElement).style.color = '#fbf5ea' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#1d4a2a' }}
            >
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
