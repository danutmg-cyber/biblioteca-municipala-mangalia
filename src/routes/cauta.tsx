import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

type Book = {
  autor: string
  titlu: string
  locAparitie: string
  anulAparitiei: string
  totalExemplare: number
  exemplareDisponibile: number
  esteDisponibila: boolean
  mesaj: string
}

export const Route = createFileRoute('/cauta')({
  component: CautaCartePage,
})

function CautaCartePage() {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState<'toate' | 'titlu' | 'autor'>('toate')
  const [results, setResults] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const run = async () => {
      if (!query.trim()) {
        setResults([])
        setSearched(false)
        return
      }

      setLoading(true)
      setSearched(true)

      try {
        const res = await fetch(
          `/api/carti?q=${encodeURIComponent(query)}&mode=${mode}`,
          { signal: controller.signal }
        )
        const data = await res.json()
        setResults(data.results || [])
      } catch {
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    const t = setTimeout(run, 300)
    return () => {
      clearTimeout(t)
      controller.abort()
    }
  }, [query, mode])

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-[#1a3a5c]">
        Caută o carte în catalog
      </h1>

      <div className="grid gap-4 md:grid-cols-[1fr_220px] mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Scrie titlul, autorul sau un cuvânt..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3"
        />

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as 'toate' | 'titlu' | 'autor')}
          className="rounded-lg border border-slate-300 px-4 py-3"
        >
          <option value="toate">Titlu sau autor</option>
          <option value="titlu">Doar titlu</option>
          <option value="autor">Doar autor</option>
        </select>
      </div>

      {loading && <p>Se caută în catalog...</p>}

      {!loading && searched && results.length === 0 && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
          Cartea nu a fost găsită în catalog.
        </div>
      )}

      <div className="space-y-4">
        {results.map((book, index) => (
          <article
            key={`${book.titlu}-${book.autor}-${index}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1a3a5c]">{book.titlu}</h2>
            <p className="mt-1 text-slate-700">
              <strong>Autor:</strong> {book.autor}
            </p>
            <p className="mt-1 text-slate-700">
              <strong>Loc apariție:</strong> {book.locAparitie}
            </p>
            <p className="mt-1 text-slate-700">
              <strong>Anul apariției:</strong> {book.anulAparitiei}
            </p>
            <p className="mt-1 text-slate-700">
              <strong>Număr total de exemplare:</strong> {book.totalExemplare}
            </p>
            <p className="mt-1 text-slate-700">
              <strong>Exemplare disponibile:</strong> {book.exemplareDisponibile}
            </p>
            <p className="mt-1 text-slate-700">
              <strong>Disponibilă:</strong> {book.esteDisponibila ? 'Da' : 'Nu'}
            </p>
            <p
              className={`mt-3 font-medium ${
                book.esteDisponibila ? 'text-green-700' : 'text-red-700'
              }`}
            >
              {book.mesaj}
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}
