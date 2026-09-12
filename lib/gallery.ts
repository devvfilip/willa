export type GalleryCategory = 'Willa' | 'Pokoje' | 'Okolica'

export type GalleryItem = {
  id: string
  category: GalleryCategory
  image: string
  alt: string
}

// Edytuj tę listę, aby dodać, usunąć lub zmienić zdjęcia w galerii.
export const GALLERY: GalleryItem[] = [
  {
    id: 'willa-dom-glowna',
    category: 'Willa',
    image: '/images/zdjecia-domu/zdjecie-domu-glowne.jpg',
    alt: 'Willa pod Pilskiem w Korbielowie',
  },
  {
    id: 'altanka',
    category: 'Willa',
    image: '/images/udogodnienia/altanka.jpg',
    alt: 'Drewniana altana w ogrodzie',
  },
  {
    id: 'ogrod',
    category: 'Willa',
    image: '/images/ogrod.jpg',
    alt: 'Ogród Willi pod Pilskiem',
  },
  {
    id: 'willa-zima-2010',
    category: 'Willa',
    image: '/images/zdjecia-domu/dom2_sty2010.jpg',
    alt: 'Willa zimą',
  },
  {
    id: 'willa-lato-2003',
    category: 'Willa',
    image: '/images/zdjecia-domu/dom_latem_2003.jpg',
    alt: 'Willa latem w dawnych latach',
  },
  {
    id: 'stare-zdjecie-korbielowa',
    category: 'Okolica',
    image: '/images/zdjecia-domu/stare_zdj.jpg',
    alt: 'Historyczne zdjęcie Korbielowa',
  },
  {
    id: 'pokoj-trzyosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-trzyosobowy/pokoj-trzyosobowy.jpg',
    alt: 'Pokój trzyosobowy',
  },
  {
    id: 'pokoj-dwuosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-dwuosobowy/pokoj-dwuosobowy.jpg',
    alt: 'Pokój dwuosobowy',
  },
  {
    id: 'pokoj-dwuosobowy-podwojne-lozko',
    category: 'Pokoje',
    image: '/images/pokoj-dwuosobowy/pokoj-dwuosobowy-podwojnelozko.jpg',
    alt: 'Pokój dwuosobowy z łóżkiem podwójnym',
  },
  {
    id: 'balkon-dwuosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-dwuosobowy/balkon-dwuosobowy.jpg',
    alt: 'Balkon pokoju dwuosobowego',
  },
  {
    id: 'lazienka-dwuosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-dwuosobowy/lazienka-dwuosobowy.jpg',
    alt: 'Łazienka pokoju dwuosobowego',
  },
  {
    id: 'lazienka-trzyosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-trzyosobowy/lazienka-trzyosobowy.jpg',
    alt: 'Łazienka pokoju trzyosobowego',
  },
  {
    id: 'pokoj-czteroosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-czteroosobowy/pokoj-czteroosobowy.jpg',
    alt: 'Pokój czteroosobowy',
  },
  {
    id: 'pokoj-czteroosobowy2',
    category: 'Pokoje',
    image: '/images/pokoj-czteroosobowy/pokoj-czteroosobowy2.jpg',
    alt: 'Pokój czteroosobowy, drugi widok',
  },
  {
    id: 'balkon-czteroosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-czteroosobowy/balkon-czteroosobowy.jpg',
    alt: 'Balkon pokoju czteroosobowego',
  },
  {
    id: 'lazienka-czteroosobowy',
    category: 'Pokoje',
    image: '/images/pokoj-czteroosobowy/lazienka-czteroosobowy.jpg',
    alt: 'Łazienka pokoju czteroosobowego',
  },
  {
    id: 'jadalnia',
    category: 'Pokoje',
    image: '/images/udogodnienia/jadalnia.jpg',
    alt: 'Jadalnia z kącikiem rekreacyjnym',
  },
  {
    id: 'jadalnia-wnetrze',
    category: 'Pokoje',
    image: '/images/udogodnienia/jadalnia3.jpg',
    alt: 'Jadalnia willi',
  },
  {
    id: 'jadalnia2',
    category: 'Pokoje',
    image: '/images/udogodnienia/jadalnia2.jpg',
    alt: 'Jadalnia w Willi pod Pilskiem',
  },
  {
    id: 'aneks-kuchenny',
    category: 'Pokoje',
    image: '/images/udogodnienia/aneks-kuchenny.jpg',
    alt: 'Aneks kuchenny',
  },
  {
    id: 'kacik-rekreacyjny',
    category: 'Pokoje',
    image: '/images/udogodnienia/kacik-rekreacyjny.jpg',
    alt: 'Kącik rekreacyjny z piłkarzykami',
  },
  {
    id: 'plac-zabaw',
    category: 'Willa',
    image: '/images/udogodnienia/plac-zabaw.jpg',
    alt: 'Plac zabaw w ogrodzie',
  },
  {
    id: 'pilsko-zima',
    category: 'Okolica',
    image: '/images/widoki/widoki-zima3.jpg',
    alt: 'Zimowy widok z Pilska',
  },
  {
    id: 'gory-zima',
    category: 'Okolica',
    image: '/images/widoki/widoki-zima2.jpg',
    alt: 'Widok na góry zimą',
  },
  {
    id: 'okolice-zima',
    category: 'Okolica',
    image: '/images/okolice-zima.jpg',
    alt: 'Zimowa okolica Korbielowa',
  },
  {
    id: 'okolice3',
    category: 'Okolica',
    image: '/images/okolice3.jpg',
    alt: 'Okolica Willi pod Pilskiem',
  },
  {
    id: 'panorama-beskidow',
    category: 'Okolica',
    image: '/images/widoki/widoki-zima.jpg',
    alt: 'Panorama Beskidów zimą',
  },
  {
    id: 'willa-zima',
    category: 'Willa',
    image: '/images/zdjecia-domu/dom_sty2010.jpg',
    alt: 'Willa pod Pilskiem zimą',
  },
  {
    id: 'osniezone-gory',
    category: 'Okolica',
    image: '/images/widoki/widoki-zima3.jpg',
    alt: 'Ośnieżone góry',
  },
  {
    id: 'zima-okolice-krzyz',
    category: 'Okolica',
    image: '/images/zima-okolice-krzyz.jpg',
    alt: 'Zimowy widok z krzyżem w okolicy Pilska',
  },
]

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Willa',
  'Pokoje',
  'Okolica',
]
