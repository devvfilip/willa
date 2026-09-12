import { ArrowLeft, ArrowRight, BedDouble, Check, ChevronRight, ExternalLink, House, Mountain, Phone, Ruler, Star, Users } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getRoom, ROOMS } from '@/lib/rooms'

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const room = getRoom((await params).slug)
  return { title: room ? `${room.title} | Willa pod Pilskiem` : 'Pokój | Willa pod Pilskiem', description: room?.summary }
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const room = getRoom((await params).slug)
  if (!room) notFound()

  return <main className="room-detail-page">
    <header className="room-detail-header page-width"><Link href="/" className="brand"><img className="brand-logo" src="/images/logo-bg.png" alt="Willa pod Pilskiem" /></Link><Link href="/#pokoje" className="room-back"><ArrowLeft size={16} /> Wszystkie pokoje</Link></header>
    <div className="room-detail-hero page-width"><div><p className="eyebrow">Willa pod Pilskiem · Korbielów</p><h1>{room.title}</h1><p className="room-detail-summary">{room.summary}</p><div className="room-meta"><span><Users size={18} /> {room.guests} gości</span><span><BedDouble size={18} /> {room.beds}</span><span><Ruler size={18} /> {room.size}</span></div></div><a href="/#kontakt" className="button button-accent">Zapytaj o termin <ArrowRight size={17} /></a></div>
    <section className="room-gallery page-width"><div className="room-gallery-main" style={{ backgroundImage: `url(${room.images[0]})` }} /><div className="room-gallery-side"><div style={{ backgroundImage: `url(${room.images[1]})` }} /><div style={{ backgroundImage: `url(${room.images[2]})` }} /></div>{room.images[3] && <div className="room-gallery-extra" style={{ backgroundImage: `url(${room.images[3]})` }} />}</section>
    <section className="room-content page-width"><div className="room-content-main"><p className="eyebrow">O pokoju</p><h2>Wygoda, spokój<br /><em>i górski widok.</em></h2><p className="room-description">{room.description}</p><a className="room-google-rating" href="http://goo.gl/maps/fShkhxGhAao" target="_blank" rel="noreferrer"><span className="google-rating-brand">Google</span><span className="google-rating-stars"><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /></span><span className="google-rating-copy">Zobacz aktualne opinie i ocenę</span><ExternalLink size={15} /></a><div className="room-section-grid"><div><h3><House size={19} /> Kuchnia</h3><ul>{room.kitchen.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul></div><div><h3><ChevronRight size={19} /> Prywatna łazienka</h3><ul>{room.bathroom.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul></div></div></div><aside className="room-amenities"><p className="eyebrow">Na wyposażeniu</p><h3>Wszystko,<br /><em>czego potrzebujesz.</em></h3><ul>{room.amenities.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul><div className="room-booking-actions"><a href="https://www.booking.com/Share-mTQu04T" className="button button-dark booking-detail-button" target="_blank" rel="noreferrer"><img src="/Booking.com_Icon_2022.svg" alt="" className="booking-icon" /> Zarezerwuj <ExternalLink size={15} /></a><a href="/#kontakt" className="button booking-phone-button"><span><Phone size={17} /> Zarezerwuj telefonicznie</span><small>Zalecane</small></a></div></aside></section>
    <footer className="footer"><div className="page-width footer-inner"><span>© {new Date().getFullYear()} Willa pod Pilskiem</span><Link href="/">Wróć na stronę główną <ArrowRight size={15} /></Link></div></footer>
  </main>
}
