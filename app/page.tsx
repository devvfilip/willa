'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from '@/lib/gallery'
import { ROOMS } from '@/lib/rooms'
import {
  ArrowDown,
  ArrowRight,
  Award,
  BedDouble,
  Bike,
  Coffee,
  ExternalLink,
  House,
  Landmark,
  MapPin,
  Menu,
  Mountain,
  ParkingCircle,
  Phone,
  Snowflake,
  Star,
  TreePine,
  Utensils,
  X,
  type LucideIcon,
} from 'lucide-react'

const amenities: Array<[LucideIcon, string]> = [
  [BedDouble, 'Pokoje z łazienkami, TV i balkonem'],
  [Utensils, 'Kompletnie wyposażony aneks kuchenny'],
  [ParkingCircle, 'Zamykany, bezpłatny parking'],
  [Snowflake, 'Narciarnia z suszarkami butów'],
  [TreePine, 'Duży ogród, altana i miejsce na ognisko'],
  [House, 'Multimedialna sala dla 40 osób'],
]

const awards = [
  { year: '2016', title: 'Guest Review Awards', description: 'Wyróżnienie przyznane przez serwis Booking.com za wysokie oceny i zaufanie naszych Gości.' },
  { year: '2011', title: 'Polecany Nocleg', description: 'Prestiżowa nagroda dla obiektów, które wyróżniają się jakością pobytu i gościnnością.' },
  { year: '—', title: 'Dyplom Uznania', description: 'Wyróżnienie portalu Narciarz.pl dla jednego z najlepiej ocenianych przez narciarzy obiektów turystycznych.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeGallery, setActiveGallery] = useState<GalleryCategory>('Willa')
  const [showAllGallery, setShowAllGallery] = useState(false)
  const filteredGallery = GALLERY.filter((item) => item.category === activeGallery)
  const visibleGallery = !showAllGallery ? filteredGallery.slice(0, 5) : filteredGallery

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <header className={isScrolled ? 'site-header is-scrolled' : 'site-header'}>
        <a href="#start" className="brand" onClick={() => setMenuOpen(false)}>
          <img className="brand-logo" src="/images/logo-bg.png" alt="Willa pod Pilskiem" />
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Główna nawigacja">
          <a href="#willa" onClick={() => setMenuOpen(false)}>Willa</a>
          <a href="#pokoje" onClick={() => setMenuOpen(false)}>Pokoje</a>
          <a href="#okolica" onClick={() => setMenuOpen(false)}>Okolica</a>
          <Link href="/wyroznienia" onClick={() => setMenuOpen(false)}>Wyróżnienia</Link>
          <a href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </nav>
        <a className="header-booking" href="#kontakt">Zarezerwuj pobyt <ArrowRight size={16} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="start">
        <div className="hero-image" />
        <div className="hero-content page-width">
          <p className="eyebrow light">Rodzinny pensjonat w Korbielowie <span>•</span> od 1990 roku</p>
          <h1>Willa<br /><em>pod Pilskiem</em></h1>
          <p className="hero-copy">Górski wypoczynek z historią, spokojem i domową atmosferą. Zatrzymaj się u podnóża Pilska.</p>
          <div className="hero-actions">
            <a className="button button-accent" href="#pokoje">Sprawdź pokoje <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="#kontakt">Skontaktuj się z nami</a>
          </div>
        </div>
        <a href="#willa" className="scroll-hint"><ArrowDown size={16} /> Poznaj Willę pod Pilskiem</a>
        <div className="hero-stamp"><span>30+</span><small>lat gościnności<br />u podnóża Pilska</small></div>
      </section>

      <section className="intro section page-width" id="willa">
        <div className="intro-copy">
          <p className="eyebrow">O nas</p>
          <h2>Willa, która ma<br /><em>swoją historię.</em></h2>
          <p className="lead">Willa pod Pilskiem to miejsce szczególne, cieszące się dobrą opinią i wyjątkową gościnnością.</p>
          <p>Od 1990 roku jesteśmy w Korbielowie. Przez te wszystkie lata nasz dom zmieniał się razem z Wami, ale jedno pozostało bez zmian — otwartość i chęć, by nasi goście czuli się tutaj jak u siebie.</p>
          <a className="text-link" href="#historia">Poznaj naszą historię <ArrowRight size={16} /></a>
        </div>
        <div className="intro-visual">
          <div className="image-card intro-main-image" role="img" aria-label="Willa w górach" />
          <div className="image-card intro-small-image" role="img" aria-label="Widok na góry" />
          <div className="year-card"><span>od</span><strong>1990</strong><span>roku</span></div>
        </div>
      </section>

      <section className="story section" id="historia">
        <div className="page-width story-grid">
          <div className="story-heading"><p className="eyebrow">Nasza opowieść</p><h2>Dom budowany<br /><em>z sercem.</em></h2><div className="story-rule"><span>1983</span><i></i><span>2008</span><i></i><span>dziś</span></div><p className="story-intro">Każdy etap tej historii wyrastał z potrzeby stworzenia miejsca, do którego chce się wracać.</p></div>
          <div className="story-text"><p>W latach 1983–1987 realizowaliśmy swoje marzenie budując rodzinny dom w Korbielowie. Tradycja „Willi pod Pilskiem” sięga 1990 roku, kiedy to z myślą o chętnie odwiedzających nas przyjaciołach i znajomych przygotowaliśmy 3 pokoje gościnne.</p><p>Chcieliśmy by goście dobrze się u nas czuli dlatego z czasem udostępniliśmy dla nich świetlicę z telewizorem wraz z pełni wyposażonym aneksem kuchennym co w tamtych czasach wyróżniało nasz dom od innych.</p><p>Z czasem przybywało nam przyjaciół i znajomych ... goście wracali z dziećmi, a później z wnukami i liczba oferowanych pokoi gościnnych była niewystarczająca. Stąd też zdecydowaliśmy się na modernizację domu.</p><p>W 2008 roku zakończyliśmy przebudowę obiektu. Podnieśliśmy standard pokoi gościnnych, zmieniając ich wygląd i wyposażenie. Biorąc pod uwagę różnorodność organizowanych u nas imprez do przygotowaliśmy nowoczesną salę integracyjno-szkoleniową.</p><p>Dzisiaj już tylko część pokoi jest wynajmowana. Korbielów także wygląda inaczej… ale jedno pozostało bez zmian — nasza otwartość i chęć by nasi goście czuli się tutaj jak u siebie.</p><p>Zapraszamy wszystkich na wypoczynek do Willi pod Pilskiem — latem na górskie wędrówki, zimą na narty, a przez cały rok na chwilę odpoczynku od codziennego pośpiechu. </p><p className="quote">„Dzisiaj Korbielów wygląda inaczej, ale nasza otwartość pozostała taka sama.”</p></div>
        </div>
      </section>

      <section className="offer section page-width">
        <div className="section-heading"><div><p className="eyebrow">Wszystko, czego potrzebujesz</p><h2>Wypoczywaj<br /><em>po swojemu.</em></h2></div><p className="section-note">Zadbaliśmy o to, aby w Willi pod Pilskiem czekało na Was wszystko, co sprawia, że górski wyjazd jest naprawdę udany.</p></div>
        <div className="amenities-grid">{amenities.map(([Icon, text]) => <div className="amenity" key={text}><span className="amenity-icon"><Icon size={21} /></span><span>{text}</span></div>)}<div className="offer-details"><strong>Do dyspozycji gości</strong><div className="offer-list"><p>• pokoje 2,3 i 4-osobowe z łazienkami, TV i balkonem</p><p>• pokoje 2-osobowe zarówno z łóżkami pojedynczymi, jak i małżeńskimi</p><p>• kompletnie wyposażony aneks kuchenny: kuchenka elektryczna, kuchenka mikrofalowa, lodówka i naczynia</p><p>• multimedialna sala konferencyjna dla 40 osób</p><p>• zamykany bezpłatny parking</p><p>• narciarnia z suszarkami butów narciarskich</p><p>• zadaszona altana ogrodowa</p><p>• duży ogród: grill, ławki ogrodowe i leżaki</p><p>• plac zabaw dla dzieci</p><p>• miejsce na ognisko</p></div><strong className="offer-subheading">Dodatkowe informacje</strong><p>Cena noclegu zależy od długości pobytu oraz ilości osób w pokoju.</p><p>Doba noclegowa zaczyna się o godz. 13:00 a kończy o godz. 10:00.</p></div></div>
      </section>

      <section className="rooms section" id="pokoje">
        <div className="page-width"><div className="section-heading rooms-heading"><div><p className="eyebrow">Zatrzymaj się na dłużej</p><h2>Pokoje z widokiem<br /><em>na dobry dzień.</em></h2></div><a className="text-link" href="#kontakt">Zapytaj o dostępność <ArrowRight size={16} /></a></div><div className="rooms-grid">{ROOMS.map((room) => <article className="room-card" key={room.slug}><div className="room-image" style={{ backgroundImage: `url(${room.images[0]})` }}></div><div className="room-info"><h3>{room.title}</h3><p>{room.guests} gości · {room.size} · {room.beds}</p><Link className="room-card-link" href={`/pokoje/${room.slug}`}>Zobacz pokój <ArrowRight size={15} /></Link></div></article>)}</div></div>
      </section>

      <section className="location section page-width" id="okolica">
        <div className="location-image" role="img" aria-label="Zimowe widoki z Pilska"></div>
        <div className="location-copy"><p className="eyebrow">Korbielów i okolica</p><h2>Góry zaczynają się<br /><em>tuż za progiem.</em></h2><p>Latem na górskie wędrówki, zimą na narty, a przez cały rok na chwilę odpoczynku od codziennego pośpiechu.</p><div className="location-list"><Link href="/okolica/pilsko"><Mountain size={20} /><strong>Pilsko</strong><span>1557 m n.p.m.</span><ArrowRight size={16} /></Link><Link href="/okolica/trasy-narciarskie"><Snowflake size={20} /><strong>Trasy narciarskie</strong><span>Ośrodek Pilsko</span><ArrowRight size={16} /></Link><Link href="/okolica/szlaki-turystyczne"><TreePine size={20} /><strong>Szlaki turystyczne</strong><span>Górskie ścieżki</span><ArrowRight size={16} /></Link><Link href="/okolica/sciezki-rowerowe"><Bike size={20} /><strong>Ścieżki rowerowe</strong><span>Trasy przez Korbielów</span><ArrowRight size={16} /></Link></div></div>
      </section>

      <section className="gallery section page-width" id="galeria">
        <div className="section-heading"><div><p className="eyebrow">Zobacz więcej</p><h2>Chwile, do których<br /><em>chce się wracać.</em></h2></div><div className="gallery-tabs">{GALLERY_CATEGORIES.map((tab) => <button className={activeGallery === tab ? 'active' : ''} key={tab} onClick={() => { setActiveGallery(tab); setShowAllGallery(false) }}>{tab}</button>)}</div></div><div className={`gallery-grid ${visibleGallery.length < 5 ? 'gallery-grid-compact' : ''} ${showAllGallery ? 'gallery-expanded' : ''}`}>{visibleGallery.map((item, i) => <div key={item.id} className={`gallery-item gallery-${(i % 5) + 1}`} role="img" aria-label={item.alt} style={{ backgroundImage: `url(${item.image})` }}><span>{item.category}</span></div>)}</div>{filteredGallery.length > 5 && <button className="gallery-more" onClick={() => setShowAllGallery(!showAllGallery)}>{showAllGallery ? 'Pokaż mniej' : `Zobacz wszystkie (${filteredGallery.length})`} <ArrowRight size={15} /></button>}
      </section>

      <section className="home-awards section"><div className="page-width"><div className="section-heading home-awards-heading"><div><p className="eyebrow">Docenieni przez Gości</p><h2>Wyróżnienia,<br /><em>które cieszą.</em></h2></div><p className="section-note">Zaufanie naszych Gości jest dla nas najważniejszą nagrodą. Te wyróżnienia są piękną pamiątką wspólnej historii.</p></div><div className="awards-grid">{awards.map((award) => <article className="award-card" key={award.title}><div className="award-card-top"><span className="award-icon"><Award size={22} /></span><span className="award-year">{award.year}</span></div><h3>{award.title}</h3><p>{award.description}</p><div className="award-stars" aria-label="Wyróżnienie"><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /></div></article>)}</div><a className="room-google-rating home-google-rating" href="http://goo.gl/maps/fShkhxGhAao" target="_blank" rel="noreferrer" aria-label="Zobacz opinie Google o Willi pod Pilskiem"><span className="google-rating-brand">Google</span><span className="google-rating-stars"><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /></span><span className="google-rating-copy">Zobacz aktualne opinie naszych Gości</span><ExternalLink size={15} /></a><Link className="text-link home-awards-link" href="/wyroznienia">Czytaj więcej... <ArrowRight size={16} /></Link></div></section>

      <section className="contact section page-width" id="kontakt"><div className="contact-intro"><p className="eyebrow">Zaplanuj swój pobyt</p><h2>Do zobaczenia<br /><em>w Korbielowie.</em></h2><p>Jeśli macie pytania dotyczące pobytu, pokoi lub dostępnych terminów — skontaktujcie się z nami. Chętnie podpowiemy i pomożemy wybrać najlepszy pokój. Najprościej zarezerwować pobyt telefonicznie. Porozmawiamy, odpowiemy na pytania i potwierdzimy termin.</p></div><div className="contact-details"><p className="contact-label">Dane kontaktowe:</p><strong>Krystyna Malinowska</strong><span><MapPin size={18} /> ul. Beskidzka 114, 34-335 Korbielów</span><a href="tel:+48338636552"><Phone size={18} /> 33 863 65 52</a><a href="tel:+48602174343"><Phone size={18} /> tel. kom. 602 174 343</a><a href="mailto:malinowscy.noclegi@wp.pl"><Coffee size={18} /> malinowscy.noclegi@wp.pl</a><p className="contact-label contact-label-bank">Dane do przelewów (mbank):</p><span className="bank-account"><Landmark size={18} /> 05 1140 2004 0000 3102 7555 5787</span><a className="contact-action" href="http://goo.gl/maps/fShkhxGhAao" target="_blank" rel="noreferrer"><MapPin size={18} /> Mapa Google <ExternalLink size={14} /></a><a className="button button-booking" href="https://www.booking.com/Share-mTQu04T" target="_blank" rel="noreferrer">Zarezerwuj pobyt poprzez Booking.com <ExternalLink size={15} /></a></div><div className="contact-map"><iframe title="Willa pod Pilskiem na mapie Google" src="https://www.google.com/maps?q=Willa+pod+Pilskiem,+Beskidzka+114,+34-335+Korbiel%C3%B3w&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

      <footer className="footer home-footer"><div className="page-width home-footer-inner"><div className="home-footer-brand"><a href="#start" className="brand"><img className="brand-logo" src="/images/logo-bg.png" alt="Willa pod Pilskiem" /></a><p>Rodzinny pensjonat w Korbielowie od 1990 roku.</p></div><nav className="footer-nav" aria-label="Linki w stopce"><a href="#willa">Willa</a><a href="#pokoje">Pokoje</a><a href="#okolica">Okolica</a><a href="#galeria">Galeria</a><a href="#kontakt">Kontakt</a></nav><div className="footer-contact"><span>Zapraszamy do Korbielowa</span><a href="tel:+48602174343">602 174 343</a><a className="footer-booking" href="#kontakt">Zarezerwuj pobyt <ArrowRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Willa pod Pilskiem</span><span>ul. Beskidzka 114 · Korbielów</span></div></div></footer>
    </main>
  )
}
