export type Attraction = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  description: string
  distance: string
  detail: string
  images: string[]
  highlights: string[]
  mapImage?: string
  sections?: AttractionSection[]
  resources?: Array<{ label: string; url: string }>
}

export type AttractionSection = {
  title: string
  paragraphs?: string[]
  routes?: TrailRoute[]
  resources?: Array<{ label: string; url: string }>
}

export type TrailRoute = {
  color: 'czerwony' | 'zielony' | 'niebieski' | 'czarny' | 'żółty'
  description: string
}

export const ATTRACTIONS: Attraction[] = [
  {
    slug: 'pilsko',
    title: 'Pilsko',
    eyebrow: 'Najwyżej w Korbielowie',
    summary: 'Górskie widoki, beskidzkie szlaki i wyjątkowa przestrzeń na cały dzień wędrówki.',
    description: 'Pilsko ma 1557 m n.p.m. i jest jednym z najpiękniejszych punktów Beskidu Żywieckiego. Z Willi pod Pilskiem można zaplanować zarówno spokojny spacer po okolicy, jak i dłuższą wycieczkę na szczyt. Panorama wynagradza wysiłek o każdej porze roku.',
    distance: '1557 m n.p.m.',
    detail: 'Beskid Żywiecki',
    images: ['/images/widoki/widoki-zima.jpg', '/images/widoki/widoki-zima2.jpg', '/images/widoki/widoki-zima3.jpg'],
    highlights: ['Panoramiczne widoki na Beskidy i Tatry', 'Szlaki piesze o różnym poziomie trudności', 'Wyjątkowa atmosfera latem i zimą'],
  },
  {
    slug: 'trasy-narciarskie',
    title: 'Trasy narciarskie',
    eyebrow: 'Zima pod Pilskiem',
    summary: 'Ośrodek Pilsko i zimowe trasy dla osób, które chcą mieć stok blisko miejsca noclegu.',
    description: 'Korbielów to jeden z najważniejszych punktów narciarskich w Beskidzie Żywieckim. Ośrodek Pilsko oferuje trasy o różnym charakterze, dzięki czemu dobrze odnajdą się tu zarówno osoby początkujące, jak i bardziej doświadczeni narciarze. Po dniu na stoku można wrócić do spokojnej, domowej atmosfery Willi.',
    distance: 'Ośrodek Pilsko',
    detail: 'Trasy narciarskie',
    images: [],
    highlights: ['Trasy dla początkujących i zaawansowanych', 'Narciarska atmosfera Korbielowa', 'Widoki na ośnieżone Beskidy'],
    mapImage: '/images/pilsko-mapa-tras.png',
    resources: [
      { label: 'Otwórz mapę tras na Skionline', url: 'https://www.skionline.pl/stacje/polska-beskid-zywiecki-korbielow-pilsko,osrodek,8,mapa-tras-narciarskich.html' },
    ],
    sections: [
      {
        title: 'Ośrodek Narciarski Pilsko',
        paragraphs: ['Okolice Korbielowa i masyw Pilska, ze względu na liczne wyciągi narciarskie, należą do najatrakcyjniejszych terenów narciarskich w kraju. Ośrodek Narciarski Pilsko jest jednym z największych kompleksów narciarskich w Polsce i leży na zboczach Pilska, jednej z najwyżej położonych gór narciarskich w kraju.', 'Położenie wyciągów na północnych stokach Pilska sprawia, że sezon narciarski trwa tu zwykle do kwietnia. O atrakcyjności regionu stanowi także wyjątkowa różnica wzniesień między najwyżej i najniżej położonymi partiami tras, wynosząca około 770 metrów.'],
      },
      {
        title: 'Dla kogo są trasy?',
        paragraphs: ['Warto pamiętać, że w głównej części ośrodka Pilsko nie ma tras całkiem łatwych, a stopień trudności rośnie wraz z wysokością. Dla początkujących narciarzy dostępnych jest kilka wyciągów w samym Korbielowie.', 'Dużą popularnością cieszy się kolej linowa Baba, odpowiednia dla całych rodzin i narciarzy o różnym stopniu zaawansowania.'],
      },
    ],
  },
  {
    slug: 'szlaki-turystyczne',
    title: 'Szlaki turystyczne',
    eyebrow: 'Aktywnie przez cały rok',
    summary: 'Beskidzkie szlaki, leśne ścieżki i górskie widoki dla osób o różnym poziomie doświadczenia.',
    description: 'Przez Korbielów przebiegają liczne szlaki turystyczne. Najciekawszy i najbardziej urozmaicony prowadzi na Halę Miziową i Pilsko. Z Korbielowa można ruszyć także w stronę Babiej Góry, Rysianki, Hali Lipowskiej, Krawcowego Wierchu i innych beskidzkich szczytów.',
    distance: 'Górskie szlaki',
    detail: 'Pieszo',
    images: [],
    highlights: ['Trasy piesze dla różnych poziomów', 'Widoki na Beskid Żywiecki', 'Spokojne miejsca na odpoczynek po drodze'],
    sections: [
      {
        title: 'Najciekawsze przejścia',
        routes: [
          { color: 'niebieski', description: 'Korbielów (Smrek) – Hala Miziowa: około 3 godziny. Powrót szlakiem żółtym: około 1 godz. 15 min.' },
          { color: 'niebieski', description: 'Korbielów (Smrek) – Przełęcz Przysłopy (847 m n.p.m.): około 1 godziny.' },
          { color: 'zielony', description: 'Korbielów (Jontek) – Hala Miziowa: około 1 godz. 45 min.' },
          { color: 'czerwony', description: 'Korbielów – Granica – Hala Miziowa: około 1 godz. 45 min.' },
          { color: 'czerwony', description: 'Przełęcz Glinne (809 m) – Hala Miziowa (1275 m): podejście około 2 godziny, zejście około 1 godziny.' },
          { color: 'czerwony', description: 'Rysianka (1322 m) – Trzy Kopce – Palenica – Hala Miziowa: około 2 godziny w każdą stronę.' },
          { color: 'zielony', description: 'Korbielów Kamienna PKS – Buczynka – Hala Miziowa: podejście około 2 godz. 30 min, zejście około 1 godz. 45 min.' },
          { color: 'czarny', description: 'Hala Miziowa (1275 m) – Pilsko (polski wierzchołek 1534 m n.p.m.): podejście około 45 min, zejście około 25 min.' },
          { color: 'czerwony', description: 'Korbielów – Przełęcz Glinne – Markowe Szczawiny: około 7 godz. 30 min w każdą stronę.' },
          { color: 'czarny', description: 'Korbielów – Hala Kamińskiego (1118 m): podejście około 2 godz. 15–30 min, zejście około 1 godz. 45 min–2 godz.' },
          { color: 'żółty', description: 'Korbielów – Walacowa Grapa – Beskid Korbielowski: około 1 godz. 45 min w każdą stronę.' },
          { color: 'żółty', description: 'Korbielów Centrum – Krzyżowa – Przyborów: podejście około 2 godziny, zejście około 2 godz. 15 min.' },
        ],
      },
    ],
  },
  {
    slug: 'sciezki-rowerowe',
    title: 'Ścieżki rowerowe',
    eyebrow: 'Korbielów na dwóch kółkach',
    summary: 'Spokojne drogi, leśne odcinki i górskie krajobrazy do odkrywania we własnym tempie.',
    description: 'Korbielów i sąsiednie miejscowości gminy Jeleśnia są pokryte siecią ścieżek rowerowych, które pozwalają dotrzeć do najciekawszych zakątków okolicy. Część tras przebiega przez Korbielów i prowadzi przez spokojne drogi, lasy oraz górskie krajobrazy.',
    distance: 'Górskie trasy',
    detail: 'Na rowerze',
    images: [],
    highlights: ['Trasy przez Korbielów i gminę Jeleśnia', 'Leśne drogi i górskie podjazdy', 'Widoki na Beskid Żywiecki'],
    sections: [
      {
        title: 'Mapa tras rowerowych',
        resources: [
          { label: 'Mapa tras rowerowych gminy Jeleśnia', url: 'https://www.jelesnia.pl/item/9310-mapa-sciezek-rowerowych-w-gminie-jelesnia' },
        ],
      },
    ],
    resources: [
      { label: 'Mapa tras rowerowych gminy Jeleśnia', url: 'https://www.jelesnia.pl/item/9310-mapa-sciezek-rowerowych-w-gminie-jelesnia' },
    ],
  },
]

export function getAttraction(slug: string) {
  return ATTRACTIONS.find((attraction) => attraction.slug === slug)
}
