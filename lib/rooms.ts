export type Room = {
  slug: string
  title: string
  guests: number
  beds: string
  size: string
  summary: string
  description: string
  images: string[]
  kitchen: string[]
  bathroom: string[]
  amenities: string[]
}

const commonAmenities = ['Balkon', 'Widok na ogród', 'Widok na góry', 'TV z płaskim ekranem', 'Wygłuszenie', 'Grill', 'Bezpłatne Wi-Fi', 'Pościel', 'Ogrzewanie', 'Czajnik elektryczny', 'Meble ogrodowe', 'Gry planszowe / puzzle', 'Palenie zabronione']
const commonKitchen = ['Krzesełko do karmienia', 'Lodówka', 'Kuchenka mikrofalowa', 'Przybory kuchenne', 'Czajnik elektryczny', 'Piekarnik', 'Płyta kuchenna', 'Toster', 'Stół']
const commonBathroom = ['Prysznic', 'Toaleta', 'Papier toaletowy']

export const ROOMS: Room[] = [
  {
    slug: 'pokoj-dwuosobowy', title: 'Pokój dwuosobowy', guests: 2, beds: '1 łóżko podwójne lub 2 oddzielne łóżka', size: '15 m²',
    summary: 'Przytulny pokój z balkonem i widokiem na góry.',
    description: 'Goście znajdą tu w pełni wyposażoną kuchnię. Pokój oferuje także prywatną łazienkę, telewizor z płaskim ekranem oraz balkon z widokiem na ogród.',
    images: ['/images/pokoj-dwuosobowy/pokoj-dwuosobowy.jpg', '/images/pokoj-dwuosobowy/pokoj-dwuosobowy-podwojnelozko.jpg', '/images/pokoj-dwuosobowy/balkon-dwuosobowy.jpg', '/images/pokoj-dwuosobowy/lazienka-dwuosobowy.jpg'],
    kitchen: commonKitchen, bathroom: commonBathroom, amenities: ['Prywatna kuchnia', 'Prywatna łazienka', ...commonAmenities]
  },
  {
    slug: 'pokoj-trzyosobowy', title: 'Pokój trzyosobowy', guests: 3, beds: '2 łóżka pojedyncze i 1 łóżko podwójne', size: '20 m²',
    summary: 'Wygodna przestrzeń dla małej rodziny lub grupy przyjaciół.',
    description: 'Pokój trzyosobowy z balkonem, telewizorem i odtwarzaczem CD. W pokoju znajduje się łazienka z prysznicem oraz czajnik. Goście mają dostęp do w pełni wyposażonej kuchni i jadalni.',
    images: ['/images/pokoj-trzyosobowy/pokoj-trzyosobowy.jpg', '/images/pokoj-trzyosobowy/lazienka-trzyosobowy.jpg', '/images/pokoj-trzyosobowy/lazienka-trzyosobowy2.jpg'],
    kitchen: commonKitchen, bathroom: commonBathroom, amenities: ['Wspólna kuchnia', 'Prywatna łazienka', 'Sofa', ...commonAmenities]
  },
  {
    slug: 'pokoj-czteroosobowy', title: 'Pokój czteroosobowy', guests: 4, beds: '4 łóżka pojedyncze', size: '25 m²',
    summary: 'Najwięcej miejsca dla rodziny lub większej grupy.',
    description: 'Pokój czteroosobowy z balkonem, telewizorem i odtwarzaczem CD. W pokoju znajduje się łazienka z prysznicem oraz czajnik. Goście mają dostęp do pełni wyposażonej kuchni i jadalni',
    images: ['/images/pokoj-czteroosobowy/pokoj-czteroosobowy.jpg', '/images/pokoj-czteroosobowy/pokoj-czteroosobowy2.jpg', '/images/pokoj-czteroosobowy/balkon-czteroosobowy.jpg', '/images/pokoj-czteroosobowy/lazienka-czteroosobowy.jpg'],
    kitchen: commonKitchen, bathroom: commonBathroom, amenities: ['Wspólna kuchnia', 'Prywatna łazienka', ...commonAmenities]
  },
]

export function getRoom(slug: string) {
  return ROOMS.find((room) => room.slug === slug)
}
