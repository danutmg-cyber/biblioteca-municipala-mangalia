import { jsx, jsxs } from "react/jsx-runtime";
import { c as collections } from "./router-BewpGiho.js";
import "@tanstack/react-router";
function CollectionsPage() {
  return /* @__PURE__ */ jsx("div", { className: "py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-2", children: "Fondul de carte" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-[#1a3a5c] mb-4", children: "Colecțiile noastre" }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-600 max-w-2xl mx-auto leading-relaxed", children: [
        "Cu peste ",
        /* @__PURE__ */ jsx("strong", { children: "50.000 de volume" }),
        ", Biblioteca Municipală Mangalia pune la dispoziția cititorilor o colecție vastă și diversificată, acoperind toate domeniile cunoașterii umane."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: [{
      value: "50.000+",
      label: "Volume totale"
    }, {
      value: "1954",
      label: "Anul înființării"
    }, {
      value: "6",
      label: "Categorii principale"
    }, {
      value: "Gratuit",
      label: "Acces membri"
    }].map((stat) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#c9962a] mb-1", children: stat.value }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: stat.label })
    ] }, stat.label)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: collections.map((col) => /* @__PURE__ */ jsxs("div", { className: `rounded-xl p-6 border ${col.color} hover:shadow-lg transition-shadow`, children: [
      /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-xl ${col.iconBg} flex items-center justify-center text-3xl mb-5`, children: col.icon }),
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-[#1a3a5c] text-xl mb-1", children: col.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm mb-2", children: col.subtitle }),
      /* @__PURE__ */ jsx("div", { className: "inline-block bg-[#1a3a5c] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4", children: col.count }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm leading-relaxed", children: col.description })
    ] }, col.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 bg-[#1a3a5c] rounded-2xl p-8 md:p-12 text-white", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Cum accesezi colecțiile?" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-white/80 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#c9962a] font-bold mt-0.5", children: "1." }),
            /* @__PURE__ */ jsx("span", { children: "Înscrie-te gratuit la recepție cu un act de identitate valabil." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#c9962a] font-bold mt-0.5", children: "2." }),
            /* @__PURE__ */ jsx("span", { children: "Primești cardul de bibliotecar și poți împrumuta imediat cărți." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#c9962a] font-bold mt-0.5", children: "3." }),
            /* @__PURE__ */ jsx("span", { children: "Termenul de împrumut este de 14 zile, cu posibilitate de prelungire." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#c9962a] font-bold mt-0.5", children: "4." }),
            /* @__PURE__ */ jsx("span", { children: "Poți împrumuta până la 5 cărți simultan." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-[#c9962a] mb-3", children: "Catalog online" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm leading-relaxed mb-4", children: "Verifică disponibilitatea titlurilor dorite înainte de a veni la bibliotecă. Catalogul nostru online este actualizat în permanență." }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-white/60", children: [
          "Catalog disponibil la recepție sau contactează-ne la",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:biblioteca@mangalia.ro", className: "text-[#c9962a] hover:underline", children: "biblioteca@mangalia.ro" })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  CollectionsPage as component
};
