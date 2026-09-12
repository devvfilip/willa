import Link from 'next/link'
import { ArrowLeft, ArrowRight, Award, Star } from 'lucide-react'

const awards = [
  { year: '2016', title: 'Guest Review Awards', description: 'Wyróżnienie przyznane przez serwis Booking.com za wysokie oceny i zaufanie naszych Gości.' },
  { year: '2011', title: 'Polecany Nocleg', description: 'Prestiżowa nagroda dla obiektów, które wyróżniają się jakością pobytu i gościnnością.' },
  { year: '—', title: 'Dyplom Uznania', description: 'Wyróżnienie portalu Narciarz.pl dla jednego z najlepiej ocenianych przez narciarzy obiektów turystycznych.' },
]

export default function AwardsPage() {
  return (
    <main className="awards-page">
      <header className="subpage-header page-width">
        <Link href="/" className="brand" aria-label="Willa pod Pilskiem, strona główna"><img className="brand-logo" src="/images/logo-bg.png" alt="Willa pod Pilskiem" /></Link>
        <Link href="/" className="subpage-back"><ArrowLeft size={16} /> Wróć do strony głównej</Link>
      </header>

      <section className="awards-hero"><div className="page-width awards-hero-inner"><div><p className="eyebrow light">Willa pod Pilskiem</p><h1>Nasze<br /><em>wyróżnienia.</em></h1><p className="awards-hero-copy">Dobre słowo Gości jest dla nas najważniejszą nagrodą. Przez lata otrzymaliśmy także kilka wyróżnień, które są dla nas pięknym potwierdzeniem wspólnej pracy.</p></div><div className="awards-hero-mark"><Award size={34} /><span>Docenieni<br />przez Gości</span></div></div></section>

      <section className="awards-intro section page-width"><div><p className="eyebrow">Szanowni Państwo</p><h2>Miło nam<br /><em>się podzielić.</em></h2></div><div className="awards-intro-copy"><p>Miło nam poinformować, że zostaliśmy wyróżnieni nagrodą „Guest Review Awards” za 2016 rok przez serwis Booking.com.</p><p>Pensjonat „Willa pod Pilskiem” otrzymał również prestiżową nagrodę „Polecany Nocleg 2011”. Otrzymaliśmy także „Dyplom Uznania” portalu Narciarz.pl dla jednego z najlepiej ocenianych przez narciarzy obiektów turystycznych.</p></div></section>

      <section className="awards-list section"><div className="page-width"><div className="section-heading awards-heading"><div><p className="eyebrow">Powody do dumy</p><h2>To zostaje<br /><em>z nami na dłużej.</em></h2></div><p className="section-note">Każde wyróżnienie przypomina nam, że warto tworzyć miejsce, do którego chce się wracać.</p></div><div className="awards-grid">{awards.map((award) => <article className="award-card" key={award.title}><div className="award-card-top"><span className="award-icon"><Award size={22} /></span><span className="award-year">{award.year}</span></div><h3>{award.title}</h3><p>{award.description}</p><div className="award-stars" aria-label="Wyróżnienie"><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /></div></article>)}</div></div></section>


      <section className="awards-thanks"><div className="page-width awards-thanks-inner p-10"><div className="stars"><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /></div><blockquote>Dziękujemy Państwu serdecznie za zaufanie i docenienie jakości naszych usług.</blockquote><Link className="button button-accent" href="/#kontakt">Zaplanuj swój pobyt <ArrowRight size={16} /></Link></div></section>

      <footer className="footer"><div className="page-width footer-inner"><Link href="/" className="brand"><img className="brand-logo" src="/images/logo-bg.png" alt="Willa pod Pilskiem" /></Link><p>Rodzinny pensjonat w Korbielowie od 1990 roku.</p><span>© {new Date().getFullYear()} Willa pod Pilskiem</span></div></footer>
    </main>
  )
}