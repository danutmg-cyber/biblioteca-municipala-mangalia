import { createFileRoute } from '@tanstack/react-router'
import { events } from '@/data/library'

export const Route = createFileRoute('/events/')({
  component: EventsPage,
})

function EventsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <p className="text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-2">
            Viața culturală
          </p>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mb-4">Evenimente</h1>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Biblioteca Municipală Mangalia organizează în mod regulat activități culturale, educative și de recreere pentru toți membrii comunității.
          </p>
        </div>

        {/* Events list */}
        <div className="space-y-6 mb-16">
          {events.map((ev) => (
            <article
              key={ev.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Date sidebar */}
                <div className="bg-[#1a3a5c] text-white p-6 flex flex-col items-center justify-center min-w-[140px] text-center">
                  <div className="text-[#c9962a] font-bold text-sm uppercase tracking-wide mb-1">
                    {ev.date.split(' ')[1] ?? 'Mai'}{' '}
                    {ev.date.split(' ')[2] ?? '2026'}
                  </div>
                  <div className="text-3xl font-bold leading-none">
                    {ev.date.split(' ')[0]}
                  </div>
                  <div className="text-white/70 text-xs mt-2">{ev.time}</div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="font-bold text-[#1a3a5c] text-xl">{ev.title}</h2>
                    <span
                      className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${ev.typeColor}`}
                    >
                      {ev.type}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{ev.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span>📍</span>
                      {ev.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span>🕐</span>
                      {ev.time}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stay updated */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">📬</div>
          <h2 className="text-xl font-bold text-[#1a3a5c] mb-2">Fii la curent cu evenimentele</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md mx-auto">
            Pentru informații despre evenimentele viitoare, contactează-ne sau urmărește avizierul bibliotecii.
          </p>
          <a
            href="mailto:biblioteca@mangalia.ro"
            className="inline-block bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Contactează-ne
          </a>
        </div>

        {/* Note about recurring programs */}
        <div className="mt-10 bg-[#1a3a5c] rounded-2xl p-8 text-white">
          <h2 className="font-bold text-xl mb-4 text-[#c9962a]">Programe permanente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/80">
            {[
              { icon: '📖', title: 'Club de lectură pentru adulți', desc: 'Ultima joi a fiecărei luni, ora 17:00' },
              { icon: '✏️', title: 'Ateliere pentru copii', desc: 'În fiecare sâmbătă, ora 10:00' },
              { icon: '🎭', title: 'Ora poveștilor', desc: 'Miercuri și vineri pentru copii 4–8 ani, ora 11:00' },
              { icon: '🔬', title: 'Cerc de informatică', desc: 'Joi, ora 16:00 – pentru elevi' },
            ].map((p) => (
              <div key={p.title} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{p.icon}</span>
                <div>
                  <div className="font-semibold text-white">{p.title}</div>
                  <div className="text-white/60 text-xs mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
