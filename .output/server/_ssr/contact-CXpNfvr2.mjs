import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as libraryInfo } from "./router-b81OVmMZ.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-2", children: "Unde ne găsești" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-[#1a3a5c] mb-4", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 max-w-xl mx-auto leading-relaxed", children: "Suntem bucuroși să vă primim și să vă ajutăm. Vizitați-ne, sunați-ne sau scrieți-ne un email." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-100 shadow-sm p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-[#1a3a5c] text-lg mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📍" }),
            " Adresă"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-gray-700 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#1a3a5c]", children: "Biblioteca Municipală Mangalia" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            libraryInfo.address,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 text-sm", children: "România" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-gray-500 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "🗺️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Str. Ștefan cel Mare nr. 5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Mangalia, Constanța" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-100 shadow-sm p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-[#1a3a5c] text-lg mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📞" }),
            " Date de contact"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 uppercase tracking-wide mb-1", children: "Telefon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${libraryInfo.phone}`, className: "font-semibold text-[#1a3a5c] hover:text-[#c9962a] transition-colors text-lg", children: libraryInfo.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 uppercase tracking-wide mb-1", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${libraryInfo.email}`, className: "font-semibold text-[#1a3a5c] hover:text-[#c9962a] transition-colors", children: libraryInfo.email })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-100 shadow-sm p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-[#1a3a5c] text-lg mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🕘" }),
            " Program de funcționare"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: libraryInfo.hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: h.day }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold px-3 py-1 rounded-full text-sm ${h.interval === "Închis" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`, children: h.interval })
          ] }, h.day)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-gray-500", children: "* Programul poate fi modificat în zilele de sărbătoare legală. Verificați avizierul sau contactați-ne." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1a3a5c] rounded-xl p-6 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "ℹ️" }),
            " Informații utile"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-white/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9962a] font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Înscrierea este gratuită pentru toți cetățenii." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9962a] font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Este necesar un act de identitate valabil (CI/pașaport)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9962a] font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Accesul în sala de lectură este liber, fără card de membru." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9962a] font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Wi-Fi gratuit disponibil în toată biblioteca." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9962a] font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Parcare gratuită în fața clădirii." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-[#1a3a5c] mb-2", children: "Înscrie-te online" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mb-3", children: "Trimite-ne un email cu datele tale și vom pregăti dosarul de înscriere înainte de vizita ta." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${libraryInfo.email}?subject=Cerere%20%C3%AEnscriere%20bibliotec%C4%83`, className: "inline-block bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors", children: "Trimite email" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
