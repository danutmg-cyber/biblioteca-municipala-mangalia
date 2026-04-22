import { createFileRoute, Link } from '@tanstack/react-router'
import { libraryInfo, events, collections } from '@/data/library'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const upcomingEvents = events.slice(0, 3)
  const featuredCollections = collections.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a5c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-4">
            Înființată în {libraryInfo.founded}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Biblioteca Municipală{' '}
            <span className="text-[#c9962a]">Mangalia</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Cunoaștere, cultură și comunitate. Peste{' '}
            <strong className="text-white">
              {libraryInfo.collectionSize.toLocaleString('ro-RO')} de volume
            </strong>{' '}
            vă așteaptă în inima orașului Mangalia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/collections"
              className="bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explorează colecțiile
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              Vizitează-ne
            </Link>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="bg-[#c9962a] text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span>🕘</span>
            <span>Luni–Vineri: 09:00–18:00</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/40" />
          <div className="flex items-center gap-2">
            <span>🕙</span>
            <span>Sâmbătă: 10:00–14:00</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/40" />
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a href={`tel:${libraryInfo.phone}`} className="hover:underline">
              {libraryInfo.phone}
            </a>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/40" />
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{libraryInfo.address}</span>
          </div>
        </div>
      </section>

      {/* Services / Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-3">Serviciile noastre</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Biblioteca Municipală Mangalia oferă o gamă completă de servicii pentru toți membrii comunității.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📚',
                title: 'Împrumut de carte',
                desc: 'Împrumutați cărți gratuit cu cardul de bibliotecar. Termen standard: 14 zile, cu posibilitate de prelungire.',
              },
              {
                icon: '🖥️',
                title: 'Acces internet',
                desc: 'Stații de calculator și Wi-Fi gratuit disponibile în sala de lectură pentru membrii bibliotecii.',
              },
              {
                icon: '👶',
                title: 'Colț pentru copii',
                desc: 'Spațiu special amenajat pentru micii cititori, cu activități educative și de lectură organizate săptămânal.',
              },
              {
                icon: '🔍',
                title: 'Catalog online',
                desc: 'Căutați titluri în catalogul nostru electronic și verificați disponibilitatea înainte de a veni la bibliotecă.',
              },
              {
                icon: '📋',
                title: 'Sală de studiu',
                desc: 'Locuri de studiu individual și în grup, perfecte pentru elevi, studenți și cercetători.',
              },
              {
                icon: '🏛️',
                title: 'Fond patrimoniu',
                desc: 'Acces la documente și publicații rare despre istoria Mangaliei și a zonei Dobrogei.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#1a3a5c] text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a5c] mb-2">Colecțiile noastre</h2>
              <p className="text-gray-600">Descoperă bogăția fondului nostru de carte</p>
            </div>
            <Link
              to="/collections"
              className="text-[#c9962a] hover:text-[#b8851f] font-semibold text-sm transition-colors hidden md:block"
            >
              Vezi toate →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCollections.map((col) => (
              <div
                key={col.id}
                className={`rounded-xl p-6 border ${col.color} hover:shadow-md transition-shadow`}
              >
                <div className={`w-12 h-12 rounded-xl ${col.iconBg} flex items-center justify-center text-2xl mb-4`}>
                  {col.icon}
                </div>
                <h3 className="font-bold text-[#1a3a5c] text-lg mb-1">{col.title}</h3>
                <p className="text-[#c9962a] font-semibold text-sm mb-3">{col.count}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{col.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/collections" className="text-[#c9962a] font-semibold text-sm">
              Vezi toate colecțiile →
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a5c] mb-2">Evenimente viitoare</h2>
              <p className="text-gray-600">Activități culturale pentru toată familia</p>
            </div>
            <Link
              to="/events"
              className="text-[#c9962a] hover:text-[#b8851f] font-semibold text-sm transition-colors hidden md:block"
            >
              Toate evenimentele →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="bg-[#1a3a5c] px-4 py-3">
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${ev.typeColor}`}
                  >
                    {ev.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a3a5c] text-base mb-2">{ev.title}</h3>
                  <p className="text-[#c9962a] font-semibold text-sm mb-1">
                    📅 {ev.date}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">🕐 {ev.time}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/events" className="text-[#c9962a] font-semibold text-sm">
              Toate evenimentele →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1a3a5c]">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Devino membru astăzi!</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Înscrierea la Biblioteca Municipală Mangalia este gratuită. Ai nevoie doar de un act de identitate valabil. Vino să ne cunoști!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Cum ne găsești
          </Link>
        </div>
      </section>
    </div>
  )
}
