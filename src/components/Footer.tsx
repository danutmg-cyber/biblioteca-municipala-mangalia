import { libraryInfo } from '@/data/library'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#c9962a] flex items-center justify-center font-bold text-sm">
              B
            </div>
            <span className="font-bold text-base">Biblioteca Municipală Mangalia</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Înființată în {libraryInfo.founded}, biblioteca servește comunitatea Mangaliei cu peste{' '}
            {libraryInfo.collectionSize.toLocaleString('ro-RO')} de volume.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#c9962a] mb-3 uppercase text-xs tracking-widest">
            Program
          </h3>
          <ul className="space-y-1 text-sm text-white/80">
            {libraryInfo.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className={h.interval === 'Închis' ? 'text-red-300' : 'text-white'}>{h.interval}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#c9962a] mb-3 uppercase text-xs tracking-widest">
            Contact
          </h3>
          <address className="not-italic text-sm text-white/80 space-y-1">
            <p>{libraryInfo.address}</p>
            <p>
              <a href={`tel:${libraryInfo.phone}`} className="hover:text-[#c9962a] transition-colors">
                {libraryInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${libraryInfo.email}`} className="hover:text-[#c9962a] transition-colors">
                {libraryInfo.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Biblioteca Municipală Mangalia. Toate drepturile rezervate.</span>
          <nav className="flex gap-4">
            <Link to="/" className="hover:text-white transition-colors">Acasă</Link>
            <Link to="/collections" className="hover:text-white transition-colors">Colecții</Link>
            <Link to="/events" className="hover:text-white transition-colors">Evenimente</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
