import { createFileRoute } from '@tanstack/react-router'
import { collections } from '@/data/library'

export const Route = createFileRoute('/collections/')({
  component: CollectionsPage,
})

function CollectionsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <p className="text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-2">
            Fondul de carte
          </p>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mb-4">Colecțiile noastre</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cu peste <strong>50.000 de volume</strong>, Biblioteca Municipală Mangalia pune la dispoziția cititorilor o colecție vastă și diversificată, acoperind toate domeniile cunoașterii umane.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { value: '50.000+', label: 'Volume totale' },
            { value: '1954', label: 'Anul înființării' },
            { value: '6', label: 'Categorii principale' },
            { value: 'Gratuit', label: 'Acces membri' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center"
            >
              <div className="text-2xl font-bold text-[#c9962a] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              className={`rounded-xl p-6 border ${col.color} hover:shadow-lg transition-shadow`}
            >
              <div className={`w-14 h-14 rounded-xl ${col.iconBg} flex items-center justify-center text-3xl mb-5`}>
                {col.icon}
              </div>
              <h2 className="font-bold text-[#1a3a5c] text-xl mb-1">{col.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{col.subtitle}</p>
              <div className="inline-block bg-[#1a3a5c] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {col.count}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{col.description}</p>
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="mt-16 bg-[#1a3a5c] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Cum accesezi colecțiile?</h2>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-[#c9962a] font-bold mt-0.5">1.</span>
                  <span>Înscrie-te gratuit la recepție cu un act de identitate valabil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9962a] font-bold mt-0.5">2.</span>
                  <span>Primești cardul de bibliotecar și poți împrumuta imediat cărți.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9962a] font-bold mt-0.5">3.</span>
                  <span>Termenul de împrumut este de 14 zile, cu posibilitate de prelungire.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9962a] font-bold mt-0.5">4.</span>
                  <span>Poți împrumuta până la 5 cărți simultan.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-[#c9962a] mb-3">Catalog online</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Verifică disponibilitatea titlurilor dorite înainte de a veni la bibliotecă. Catalogul nostru online este actualizat în permanență.
              </p>
              <div className="text-sm text-white/60">
                Catalog disponibil la recepție sau contactează-ne la{' '}
                <a href="mailto:biblioteca@mangalia.ro" className="text-[#c9962a] hover:underline">
                  biblioteca@mangalia.ro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
