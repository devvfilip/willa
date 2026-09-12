import { ArrowLeft, ArrowRight, Check, ExternalLink, MapPin, Mountain, Ruler } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ATTRACTIONS, getAttraction } from '@/lib/attractions'

export function generateStaticParams() {
  return ATTRACTIONS.map((attraction) => ({ slug: attraction.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const attraction = getAttraction((await params).slug)
  return {
    title: attraction ? `${attraction.title} | Willa pod Pilskiem` : 'Okolica | Willa pod Pilskiem',
    description: attraction?.summary,
  }
}

export default async function AttractionPage({ params }: { params: Promise<{ slug: string }> }) {
  const attraction = getAttraction((await params).slug)
  if (!attraction) notFound()

  return <main className="room-detail-page attraction-detail-page">
    <header className="room-detail-header page-width"><Link href="/" className="brand"><img className="brand-logo" src="/images/logo-bg.png" alt="Willa pod Pilskiem" /></Link><Link href="/#okolica" className="room-back"><ArrowLeft size={16} /> Wróć do okolicy</Link></header>
    <div className="room-detail-hero page-width"><div><p className="eyebrow">{attraction.eyebrow}</p><h1>{attraction.title}</h1><p className="room-detail-summary">{attraction.summary}</p><div className="room-meta"><span><Mountain size={18} /> {attraction.detail}</span><span><Ruler size={18} /> {attraction.distance}</span></div></div><a href="/#kontakt" className="button button-accent">Zaplanuj pobyt <ArrowRight size={17} /></a></div>
    {attraction.images.length > 0 && <section className="room-gallery page-width"><div className="room-gallery-main" style={{ backgroundImage: `url(${attraction.images[0]})` }} role="img" aria-label={attraction.title} /><div className="room-gallery-side"><div style={{ backgroundImage: `url(${attraction.images[1]})` }} role="img" aria-label={`${attraction.title} - widok 2`} /><div style={{ backgroundImage: `url(${attraction.images[2]})` }} role="img" aria-label={`${attraction.title} - widok 3`} /></div></section>}
    {attraction.mapImage && <section className="attraction-map page-width"><div className="section-heading"><div><p className="eyebrow">Mapa tras</p><h2>Sprawdź układ<br /><em>ośrodka Pilsko.</em></h2></div><a className="text-link" href="https://www.skionline.pl/stacje/polska-beskid-zywiecki-korbielow-pilsko,osrodek,8,mapa-tras-narciarskich.html" target="_blank" rel="noreferrer">Otwórz mapę na Skionline <ExternalLink size={15} /></a></div><img src={attraction.mapImage} alt="Mapa tras narciarskich ośrodka Pilsko w Korbielowie" /></section>}
    <section className={`room-content page-width ${attraction.sections ? 'attraction-content-with-sections' : ''}`}><div className="room-content-main"><p className="eyebrow">Poznaj miejsce</p><h2>{attraction.slug === 'szlaki-i-rowery' ? <>Szlaki i rowery<br /><em>wokół Korbielowa.</em></> : <>Góry, które<br /><em>zostają w pamięci.</em></>}</h2><p className="room-description">{attraction.description}</p>{attraction.sections?.map((section) => <div className="attraction-section" key={section.title}><h3>{section.title}</h3>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.resources?.map((resource) => <a className="button button-dark attraction-section-resource" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>{resource.label} <ExternalLink size={15} /></a>)}{section.routes && <ul>{section.routes.map((route) => <li key={route.description}><span className={`trail-color trail-color-${route.color}`} aria-label={`Szlak ${route.color}`} /> <strong>Szlak {route.color}</strong> {route.description}</li>)}</ul>}</div>)}<div className="attraction-highlights"><h3>Warto wiedzieć</h3><ul>{attraction.highlights.map((highlight) => <li key={highlight}><Check size={15} /> {highlight}</li>)}</ul></div></div><aside className="room-amenities"><p className="eyebrow">Korbielów i okolica</p><h3>Odkrywaj<br /><em>po swojemu.</em></h3><p className="attraction-aside-copy">Willa pod Pilskiem jest dobrym punktem wypadowym do poznawania gór o każdej porze roku.</p>{attraction.resources?.map((resource) => <a className="button button-dark attraction-resource-link" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>{resource.label} <ExternalLink size={15} /></a>)}<a className="button button-dark" href="http://goo.gl/maps/fShkhxGhAao" target="_blank" rel="noreferrer"><MapPin size={17} /> Zobacz na mapie <ExternalLink size={15} /></a><Link className="button button-attraction-contact" href="/#kontakt">Zapytaj o szczegóły <ArrowRight size={15} /></Link></aside></section>
    <footer className="footer"><div className="page-width footer-inner"><span>© {new Date().getFullYear()} Willa pod Pilskiem</span><Link href="/#okolica">Wróć do okolicy <ArrowRight size={15} /></Link></div></footer>
  </main>
}
