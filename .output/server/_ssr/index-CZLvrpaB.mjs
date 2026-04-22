import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as libraryInfo, c as collections, e as events } from "./router-b81OVmMZ.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function HomePage() {
  const upcomingEvents = events.slice(0, 3);
  const featuredCollections = collections.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#1a3a5c] text-white py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-4", children: [
        "Înființată în ",
        libraryInfo.founded
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold leading-tight mb-6", children: [
        "Biblioteca Municipală",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9962a]", children: "Mangalia" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8", children: [
        "Cunoaștere, cultură și comunitate. Peste",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-white", children: [
          libraryInfo.collectionSize.toLocaleString("ro-RO"),
          " de volume"
        ] }),
        " ",
        "vă așteaptă în inima orașului Mangalia."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/collections", className: "bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-6 py-3 rounded-lg transition-colors", children: "Explorează colecțiile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20", children: "Vizitează-ne" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#c9962a] text-white py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🕘" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Luni–Vineri: 09:00–18:00" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-px h-4 bg-white/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🕙" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sâmbătă: 10:00–14:00" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-px h-4 bg-white/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📞" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${libraryInfo.phone}`, className: "hover:underline", children: libraryInfo.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-px h-4 bg-white/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📍" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: libraryInfo.address })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-[#1a3a5c] mb-3", children: "Serviciile noastre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 max-w-xl mx-auto", children: "Biblioteca Municipală Mangalia oferă o gamă completă de servicii pentru toți membrii comunității." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [{
        icon: "📚",
        title: "Împrumut de carte",
        desc: "Împrumutați cărți gratuit cu cardul de bibliotecar. Termen standard: 14 zile, cu posibilitate de prelungire."
      }, {
        icon: "🖥️",
        title: "Acces internet",
        desc: "Stații de calculator și Wi-Fi gratuit disponibile în sala de lectură pentru membrii bibliotecii."
      }, {
        icon: "👶",
        title: "Colț pentru copii",
        desc: "Spațiu special amenajat pentru micii cititori, cu activități educative și de lectură organizate săptămânal."
      }, {
        icon: "🔍",
        title: "Catalog online",
        desc: "Căutați titluri în catalogul nostru electronic și verificați disponibilitatea înainte de a veni la bibliotecă."
      }, {
        icon: "📋",
        title: "Sală de studiu",
        desc: "Locuri de studiu individual și în grup, perfecte pentru elevi, studenți și cercetători."
      }, {
        icon: "🏛️",
        title: "Fond patrimoniu",
        desc: "Acces la documente și publicații rare despre istoria Mangaliei și a zonei Dobrogei."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-[#1a3a5c] text-lg mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-[#1a3a5c] mb-2", children: "Colecțiile noastre" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Descoperă bogăția fondului nostru de carte" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/collections", className: "text-[#c9962a] hover:text-[#b8851f] font-semibold text-sm transition-colors hidden md:block", children: "Vezi toate →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: featuredCollections.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl p-6 border ${col.color} hover:shadow-md transition-shadow`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl ${col.iconBg} flex items-center justify-center text-2xl mb-4`, children: col.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-[#1a3a5c] text-lg mb-1", children: col.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#c9962a] font-semibold text-sm mb-3", children: col.count }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: col.description })
      ] }, col.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/collections", className: "text-[#c9962a] font-semibold text-sm", children: "Vezi toate colecțiile →" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-[#1a3a5c] mb-2", children: "Evenimente viitoare" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Activități culturale pentru toată familia" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "text-[#c9962a] hover:text-[#b8851f] font-semibold text-sm transition-colors hidden md:block", children: "Toate evenimentele →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: upcomingEvents.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#1a3a5c] px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${ev.typeColor}`, children: ev.type }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-[#1a3a5c] text-base mb-2", children: ev.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[#c9962a] font-semibold text-sm mb-1", children: [
            "📅 ",
            ev.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-sm mb-3", children: [
            "🕐 ",
            ev.time
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm leading-relaxed line-clamp-3", children: ev.description })
        ] })
      ] }, ev.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "text-[#c9962a] font-semibold text-sm", children: "Toate evenimentele →" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-[#1a3a5c]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Devino membru astăzi!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 leading-relaxed mb-6", children: "Înscrierea la Biblioteca Municipală Mangalia este gratuită. Ai nevoie doar de un act de identitate valabil. Vino să ne cunoști!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-block bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-8 py-3 rounded-lg transition-colors", children: "Cum ne găsești" })
    ] }) })
  ] });
}
export {
  HomePage as component
};
