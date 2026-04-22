import { jsx, jsxs } from "react/jsx-runtime";
import { e as events } from "./router-BewpGiho.js";
import "@tanstack/react-router";
function EventsPage() {
  return /* @__PURE__ */ jsx("div", { className: "py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[#c9962a] font-semibold text-sm uppercase tracking-widest mb-2", children: "Viața culturală" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-[#1a3a5c] mb-4", children: "Evenimente" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-xl mx-auto leading-relaxed", children: "Biblioteca Municipală Mangalia organizează în mod regulat activități culturale, educative și de recreere pentru toți membrii comunității." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-16", children: events.map((ev) => /* @__PURE__ */ jsx("article", { className: "bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1a3a5c] text-white p-6 flex flex-col items-center justify-center min-w-[140px] text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-[#c9962a] font-bold text-sm uppercase tracking-wide mb-1", children: [
          ev.date.split(" ")[1] ?? "Mai",
          " ",
          ev.date.split(" ")[2] ?? "2026"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold leading-none", children: ev.date.split(" ")[0] }),
        /* @__PURE__ */ jsx("div", { className: "text-white/70 text-xs mt-2", children: ev.time })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-[#1a3a5c] text-xl", children: ev.title }),
          /* @__PURE__ */ jsx("span", { className: `flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${ev.typeColor}`, children: ev.type })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed mb-4", children: ev.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { children: "📍" }),
            ev.location
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { children: "🕐" }),
            ev.time
          ] })
        ] })
      ] })
    ] }) }, ev.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl mb-3", children: "📬" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[#1a3a5c] mb-2", children: "Fii la curent cu evenimentele" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-4 max-w-md mx-auto", children: "Pentru informații despre evenimentele viitoare, contactează-ne sau urmărește avizierul bibliotecii." }),
      /* @__PURE__ */ jsx("a", { href: "mailto:biblioteca@mangalia.ro", className: "inline-block bg-[#c9962a] hover:bg-[#b8851f] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors", children: "Contactează-ne" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 bg-[#1a3a5c] rounded-2xl p-8 text-white", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-xl mb-4 text-[#c9962a]", children: "Programe permanente" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/80", children: [{
        icon: "📖",
        title: "Club de lectură pentru adulți",
        desc: "Ultima joi a fiecărei luni, ora 17:00"
      }, {
        icon: "✏️",
        title: "Ateliere pentru copii",
        desc: "În fiecare sâmbătă, ora 10:00"
      }, {
        icon: "🎭",
        title: "Ora poveștilor",
        desc: "Miercuri și vineri pentru copii 4–8 ani, ora 11:00"
      }, {
        icon: "🔬",
        title: "Cerc de informatică",
        desc: "Joi, ora 16:00 – pentru elevi"
      }].map((p) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xl flex-shrink-0", children: p.icon }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-white", children: p.title }),
          /* @__PURE__ */ jsx("div", { className: "text-white/60 text-xs mt-0.5", children: p.desc })
        ] })
      ] }, p.title)) })
    ] })
  ] }) });
}
export {
  EventsPage as component
};
