# Biblioteca Municipală Mangalia

Website oficial al Bibliotecii Municipale Mangalia, România.

## Descriere

Aplicație web modernă construită cu TanStack Start pentru prezentarea și promovarea serviciilor Bibliotecii Municipale Mangalia. Site-ul oferă informații despre colecții, evenimente culturale, program și date de contact.

## Pagini

| Pagina | Rută | Descriere |
|--------|------|-----------|
| Acasă | `/` | Hero, servicii, colecții și evenimente în evidență |
| Colecții | `/collections` | Categoriile fondului de carte (~50.000 volume) |
| Evenimente | `/events` | Activități culturale planificate |
| Contact | `/contact` | Adresă, program, telefon, email |

## Stack tehnologic

| Strat | Tehnologie |
|-------|-----------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Stilizare | Tailwind CSS 4 |
| Limbaj | TypeScript 5.7 (strict mode) |
| Deploy | Netlify |

## Structura proiectului

```
src/
├── components/
│   ├── Header.tsx       # Antet cu logo și navigare
│   └── Footer.tsx       # Subsol cu adresă și linkuri
├── data/
│   └── library.ts       # Date bibliotecă: ore, colecții, evenimente
├── routes/
│   ├── __root.tsx       # Layout rădăcină (Header + Footer)
│   ├── index.tsx        # Pagina principală
│   ├── collections/
│   │   └── index.tsx    # Pagina colecții
│   ├── events/
│   │   └── index.tsx    # Pagina evenimente
│   └── contact.tsx      # Pagina contact
└── styles.css           # Stiluri globale + variabile CSS
```

## Informații bibliotecă

- **Adresă:** Str. Ștefan cel Mare nr. 5, Mangalia, județul Constanța
- **Telefon:** 0241 752 340
- **Email:** biblioteca@mangalia.ro
- **Program:** Luni–Vineri 09:00–18:00, Sâmbătă 10:00–14:00
- **Înființată:** 1954
- **Fond:** ~50.000 volume

## Paletă de culori

| Culoare | Valoare | Utilizare |
|---------|---------|-----------|
| Navy | `#1a3a5c` | Antet, secțiuni principale, text titluri |
| Auriu | `#c9962a` | Accente, butoane CTA, detalii |

## Comenzi de dezvoltare

```bash
npm run dev      # Server de dezvoltare (port 3000)
npm run build    # Build de producție
```

## Variabile de mediu

Nu sunt necesare variabile de mediu pentru funcționalitatea de bază. Dacă se adaugă funcționalități AI în viitor, vor fi necesare cheile API corespunzătoare.

## Deploy pe Netlify

Proiectul este configurat pentru deploy automat pe Netlify prin `netlify.toml`. Comanda de build este `vite build`, iar directorul de publicare este `dist/client`.
