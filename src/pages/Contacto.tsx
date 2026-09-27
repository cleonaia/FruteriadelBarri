import { useState, type ReactNode } from 'react'
import { IconInstagram } from '../components/Icons'

type FormState = { name: string; email: string; phone: string; message: string }
type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contacto() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      Nombre: form.name,
      Email: form.email,
      Teléfono: form.phone || 'No indicado',
      Pedido: form.message,
      _subject: `Nuevo pedido web de ${form.name}`,
      _template: 'table',
      _captcha: 'false',
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/fruteriadelbarri@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('No se pudo enviar el pedido')

      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      const fallbackBody = [
        `Nombre: ${form.name}`,
        `Email: ${form.email}`,
        `Teléfono: ${form.phone || 'No indicado'}`,
        '',
        'Pedido:',
        form.message,
      ].join('\n')

      const fallbackMailto = `mailto:fruteriadelbarri@gmail.com?subject=${encodeURIComponent(`Nuevo pedido web de ${form.name}`)}&body=${encodeURIComponent(fallbackBody)}`

      window.location.href = fallbackMailto
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    }
  }

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="pt-24 md:pt-36 pb-10 md:pb-16 px-4 md:px-12" style={{ backgroundColor: '#fbf5ea', borderBottom: '1px solid #e8d9b8' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8" style={{ backgroundColor: '#e8601c' }} />
              <span style={{ color: '#e8601c', fontSize: '0.68rem', letterSpacing: '0.28em', fontWeight: 600, textTransform: 'uppercase' }}>
                Estamos aquí para ti
              </span>
            </div>
            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.0, letterSpacing: '-0.02em', color: '#1a1209' }}>
              Pedidos y <em style={{ color: '#1d4a2a', fontStyle: 'italic', fontWeight: 400 }}>contacto</em>
            </h1>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#1a1209', opacity: 0.55 }}>
            Cuéntanos qué necesitas y te confirmaremos el pedido lo antes posible.
          </p>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="py-8 md:py-16 px-4 md:px-12" style={{ backgroundColor: '#fff8f2' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Info column */}
          <div className="order-2 lg:order-1 flex flex-col gap-4">

            {/* Contact cards — 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: '#e8d9b8', borderRadius: '10px', overflow: 'hidden' }}>
              {([
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                  title: 'Dirección',
                  content: 'Avinguda Matadepera 49, Sabadell',
                  href: 'https://maps.google.com/?q=Avinguda+Matadepera+49+Sabadell',
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>,
                  title: 'Teléfono',
                  content: '+34 633 09 56 15',
                  href: 'tel:+34633095615',
                },
                {
                  icon: <span style={{ color: '#1d4a2a' }}><IconInstagram size={20} /></span>,
                  title: 'Instagram',
                  content: '@fruteria_del_barri',
                  href: 'https://instagram.com/fruteria_del_barri',
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                  title: 'Email',
                  content: 'fruteriadelbarri@gmail.com',
                  href: 'mailto:fruteriadelbarri@gmail.com',
                },
              ] as { icon: ReactNode; title: string; content: string; href: string }[]).map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-6" style={{ backgroundColor: '#fbf5ea' }}>
                  <span className="shrink-0 mt-0.5">{c.icon}</span>
                  <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d4a2a', marginBottom: '0.3rem' }}>{c.title}</p>
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="text-sm font-medium transition-colors duration-200"
                      style={{ color: '#1a1209' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#e8601c')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#1a1209')}
                    >
                      {c.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Horario */}
            <div style={{ backgroundColor: '#1d4a2a', borderRadius: '10px', overflow: 'hidden' }}>
              <div className="px-8 pt-8 pb-2 flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8c97e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <h3 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a8c97e' }}>Horario</h3>
              </div>
              <div className="px-8 pb-8 space-y-0">
                {[
                  { day: 'Lunes a Viernes', lines: ['Mañana: 9:00 - 15:00', 'Tarde: 17:00 - 21:00'], closed: false },
                  { day: 'Sábado', lines: ['9:00 - 21:00 (horario continuo)'], closed: false },
                  { day: 'Domingo', lines: ['Cerrado'], closed: true },
                  { day: 'Festivos', lines: ['9:00 - 15:00'], closed: false },
                ].map((h, i, arr) => (
                  <div key={h.day} className="py-4" style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(251,245,234,0.08)' : 'none' }}>
                    <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1rem', color: '#fbf5ea', marginBottom: '0.3rem' }}>{h.day}</p>
                    {h.lines.map((line) => (
                      <p key={line} style={{ fontSize: '0.82rem', color: h.closed ? '#e8601c' : 'rgba(251,245,234,0.55)' }}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="pedido" className="order-1 lg:order-2 scroll-mt-24" style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #e8d9b8', overflow: 'hidden' }}>
            <div className="px-5 md:px-8 pt-6 md:pt-8 pb-5 md:pb-6" style={{ borderBottom: '1px solid #f0e8d8' }}>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#1a1209', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                Haz tu <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#1d4a2a' }}>pedido</em>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#1a1209', opacity: 0.55 }}>
                Indica los productos y cantidades. Te contactaremos para confirmar disponibilidad y recogida.
              </p>
            </div>

            <div className="p-5 md:p-8">
              {status === 'success' ? (
                <div className="text-center py-10 md:py-14" role="status">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: '#e8f5ec' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.5rem', color: '#1d4a2a', fontWeight: 700 }}>
                    ¡Pedido enviado!
                  </p>
                  <p className="text-sm mt-2 mb-6" style={{ color: '#1a1209', opacity: 0.55 }}>Lo hemos recibido y te responderemos lo antes posible.</p>
                  <button onClick={() => setStatus('idle')}
                    className="text-sm font-semibold px-5 py-2.5 transition-all duration-200"
                    style={{ border: '1.5px solid #1d4a2a', color: '#1d4a2a', borderRadius: '4px', background: 'none', cursor: 'pointer' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1d4a2a'; (e.currentTarget as HTMLElement).style.color = '#fbf5ea' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#1d4a2a' }}
                  >
                    Hacer otro pedido
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForm} className="flex flex-col gap-5">
                  {[
                    { label: 'Nombre', key: 'name' as const, type: 'text', placeholder: 'María García', required: true },
                    { label: 'Email', key: 'email' as const, type: 'email', placeholder: 'maria@email.com', required: true },
                    { label: 'Teléfono (opcional)', key: 'phone' as const, type: 'tel', placeholder: '+34 600 000 000', required: false },
                  ].map((field) => (
                    <div key={field.key} className="flex flex-col gap-1.5">
                      <label htmlFor={field.key} style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1209', opacity: 0.5 }}>
                        {field.label}
                      </label>
                      <input id={field.key} name={field.key} type={field.type} required={field.required}
                        autoComplete={field.key === 'name' ? 'name' : field.key === 'email' ? 'email' : 'tel'}
                        value={form[field.key]} onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="px-4 py-3 text-sm focus:outline-none transition-all duration-200"
                        style={{ border: '1.5px solid #e8d9b8', borderRadius: '6px', backgroundColor: '#fbf5ea', color: '#1a1209' }}
                        onFocus={e => (e.currentTarget.style.borderColor = '#1d4a2a')}
                        onBlur={e => (e.currentTarget.style.borderColor = '#e8d9b8')}
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1209', opacity: 0.5 }}>¿Qué necesitas?</label>
                    <textarea id="message" name="message" required rows={5}
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Ej.: 2 kg de naranjas, 1 kg de tomates y una col. Lo recogería el sábado por la mañana."
                      className="px-4 py-3 text-sm focus:outline-none transition-all duration-200 resize-none"
                      style={{ border: '1.5px solid #e8d9b8', borderRadius: '6px', backgroundColor: '#fbf5ea', color: '#1a1209' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#1d4a2a')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#e8d9b8')}
                    />
                  </div>
                  {status === 'error' && (
                    <div role="alert" className="text-sm p-4" style={{ backgroundColor: '#fff1e8', color: '#9a3c0d', borderRadius: '6px' }}>
                      No hemos podido enviar el pedido. Inténtalo de nuevo o llámanos al{' '}
                      <a href="tel:+34633095615" className="font-semibold underline">+34 633 09 56 15</a>.
                    </div>
                  )}
                  <button type="submit" disabled={status === 'sending'}
                    className="w-full py-4 text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#1d4a2a', color: '#fbf5ea', borderRadius: '6px', border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer', marginTop: '0.5rem', opacity: status === 'sending' ? 0.7 : 1 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2d6b3f' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1d4a2a' }}
                  >
                    {status === 'sending' ? 'Enviando pedido…' : 'Enviar pedido'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
