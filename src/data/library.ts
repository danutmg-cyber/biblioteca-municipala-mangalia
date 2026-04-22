export const libraryInfo = {
  name: 'Biblioteca Municipală Mangalia',
  founded: 1954,
  collectionSize: 50000,
  address: 'Str. Ștefan cel Mare nr. 5, Mangalia, județul Constanța',
  phone: '0241 752 340',
  email: 'biblioteca@mangalia.ro',
  hours: [
    { day: 'Luni – Vineri', interval: '09:00 – 18:00' },
    { day: 'Sâmbătă', interval: '10:00 – 14:00' },
    { day: 'Duminică', interval: 'Închis' },
  ],
}

export const collections = [
  {
    id: 'beletristica',
    title: 'Beletristică',
    subtitle: 'Ficțiune',
    count: '~15.000 titluri',
    description:
      'Romane, nuvele, poezie și dramaturgie din literatura română și universală. Autori clasici și contemporani pentru toate gusturile.',
    icon: '📖',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 'non-fictiune',
    title: 'Non-ficțiune',
    subtitle: 'Cunoaștere și știință',
    count: '~12.000 titluri',
    description:
      'Istorie, știință, filozofie, biografie, călătorii și mult mai mult. Resurse valoroase pentru studiu și dezvoltare personală.',
    icon: '🔬',
    color: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    id: 'copii',
    title: 'Colecția pentru copii',
    subtitle: 'Lectură pentru cei mici',
    count: '~8.000 titluri',
    description:
      'Povești, basme, benzi desenate și cărți educative pentru copii de toate vârstele. Un spațiu special dedicat micilor cititori.',
    icon: '🌟',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
  },
  {
    id: 'periodice',
    title: 'Periodice',
    subtitle: 'Ziare și reviste',
    count: 'Colecție curentă',
    description:
      'Abonamente la principalele ziare și reviste naționale și internaționale. Sala de lectură pentru periodice este disponibilă zilnic.',
    icon: '📰',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100',
  },
  {
    id: 'digital',
    title: 'Resurse digitale',
    subtitle: 'Acces online',
    count: 'Baze de date online',
    description:
      'Acces la baze de date electronice, cărți digitale și resurse academice. Disponibil în biblioteca și de la distanță pentru membri.',
    icon: '💻',
    color: 'bg-cyan-50 border-cyan-200',
    iconBg: 'bg-cyan-100',
  },
  {
    id: 'istorie-locala',
    title: 'Istorie locală',
    subtitle: 'Dobrogea și Mangalia',
    count: 'Fond special',
    description:
      'Documente rare, monografii, fotografii și cărți despre istoria Mangaliei și a zonei Dobrogei. Fond de patrimoniu de neprețuit.',
    icon: '🏛️',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
]

export const events = [
  {
    id: 1,
    title: 'Club de lectură pentru adulți',
    date: '24 Aprilie 2026',
    time: '17:00',
    type: 'Club',
    typeColor: 'bg-blue-100 text-blue-800',
    description:
      'Discutăm împreună romanul „Moromeții" de Marin Preda. Participarea este liberă, înscrierile se fac la recepție.',
    location: 'Sala de lectură, etaj 1',
  },
  {
    id: 2,
    title: 'Atelier de creație pentru copii',
    date: '26 Aprilie 2026',
    time: '10:00',
    type: 'Atelier',
    typeColor: 'bg-green-100 text-green-800',
    description:
      'Atelier creativ cu tema „Primăvara în culori". Copiii între 6-12 ani sunt invitați să creeze ilustrații inspirate din cărțile preferate.',
    location: 'Sala copiilor, parter',
  },
  {
    id: 3,
    title: 'Expoziție: Mangalia de altădată',
    date: '1 – 15 Mai 2026',
    time: 'Pe toată durata programului',
    type: 'Expoziție',
    typeColor: 'bg-amber-100 text-amber-800',
    description:
      'Fotografii și documente istorice care redau viața orașului Mangalia de-a lungul deceniilor. Intrare liberă.',
    location: 'Holul principal',
  },
  {
    id: 4,
    title: 'Întâlnire cu autorul Ion Călin',
    date: '8 Mai 2026',
    time: '16:00',
    type: 'Eveniment',
    typeColor: 'bg-purple-100 text-purple-800',
    description:
      'Scriitorul Ion Călin prezintă cel mai recent roman și discută cu cititorii. Autografe după eveniment. Locuri limitate.',
    location: 'Sala de conferințe',
  },
]
