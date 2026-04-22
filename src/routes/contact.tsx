import { createFileRoute } from '@tanstack/react-router'
import { libraryInfo } from '@/data/library'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <p className="text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-2">
            Unde ne găsești
          </p>
          <h1 className="text-4xl font-bold text-[#1a3a5c] mb-4">Contact</h1>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Suntem bucuroși să vă primim și să vă ajutăm. Vizitați-ne, sunați-ne sau scrieți-ne un email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-[#1a3a5c] text-lg mb-5 flex items-center gap-2">
                <span className="text-2xl">📍</span> Adresă
              </h2>
              <address className="not-italic text-gray-700 leading-relaxed">
                <strong className="text-[#1a3a5c]">Biblioteca Municipală Mangalia</strong>
                <br />
                {libraryInfo.address}
                <br />
                <span className="text-gray-500 text-sm">România</span>
              </address>
              {/* Map placeholder */}
              <div className="mt-4 bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-500 text-sm">
                  <div className="text-3xl mb-2">🗺️</div>
                  <div>Str. Ștefan cel Mare nr. 5</div>
                  <div>Mangalia, Constanța</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-[#1a3a5c] text-lg mb-5 flex items-center gap-2">
                <span className="text-2xl">📞</span> Date de contact
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Telefon</div>
                  <a
                    href={`tel:${libraryInfo.phone}`}
                    className="font-semibold text-[#1a3a5c] hover:text-[#c9962a] transition-colors text-lg"
                  >
                    {libraryInfo.phone}
                  </a>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</div>
                  <a
                    href={`mailto:${libraryInfo.email}`}
                    className="font-semibold text-[#1a3a5c] hover:text-[#c9962a] transition-colors"
                  >
                    {libraryInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours + info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-[#1a3a5c] text-lg mb-5 flex items-center gap-2">
                <span className="text-2xl">🕘</span> Program de funcționare
              </h2>
              <div className="space-y-3">
                {libraryInfo.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium text-gray-700">{h.day}</span>
                    <span
                      className={`font-semibold px-3 py-1 rounded-full text-sm ${
                        h.interval === 'Închis'
                          ? 'bg-red-50 text-red-600'
                          : 'bg-green-50 text-green-700'
                      }`}
                    >
                      {h.interval}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                * Programul poate fi modificat în zilele de sărbătoare legală. Verificați avizierul sau contactați-ne.
              </p>
            </div>

            <div className="bg-[#1a3a5c] rounded-xl p-6 text-white">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">ℹ️</span> Informații utile
              </h2>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9962a] font-bold">✓</span>
                  <span>Înscrierea este gratuită pentru toți cetățenii.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9962a] font-bold">✓</span>
                  <span>Este necesar un act de identitate valabil (CI/pașaport).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9962a] font-bold">✓</span>
                  <span>Accesul în sala de lectură este liber, fără card de membru.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9962a] font-bold">✓</span>
                  <span>Wi-Fi gratuit disponibil în toată biblioteca.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9962a] font-bold">✓</span>
                  <span>Parcare gratuită în fața clădirii.</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-[#1a3a5c] mb-2">Înscrie-te online</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Trimite-ne un email cu datele tale și vom pregăti dosarul de înscriere înainte de vizita ta.
              </p>
              <a
                href={`mailto:${libraryInfo.email}?subject=Cerere%20%C3%AEnscriere%20bibliotec%C4%83`}
                className="inline-block bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
              >
                Trimite email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
