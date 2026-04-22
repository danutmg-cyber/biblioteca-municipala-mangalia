import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const navLinks = [
  { to: "/", label: "Acasă" },
  { to: "/collections", label: "Colecții" },
  { to: "/events", label: "Evenimente" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-[#1a3a5c] text-white shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-[#c9962a] flex items-center justify-center text-white font-bold text-lg flex-shrink-0", children: "B" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg leading-tight group-hover:text-[#c9962a] transition-colors", children: "Biblioteca Municipală" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#c9962a] text-sm font-semibold tracking-wide", children: "Mangalia" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: link.to,
        className: "px-4 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-[#c9962a] transition-colors [&.active]:text-[#c9962a] [&.active]:bg-white/10",
        children: link.label
      },
      link.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden flex items-center gap-1", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: link.to,
        className: "px-2 py-1 rounded text-xs font-medium hover:bg-white/10 hover:text-[#c9962a] transition-colors [&.active]:text-[#c9962a]",
        children: link.label
      },
      link.to
    )) })
  ] }) });
}
const libraryInfo = {
  founded: 1954,
  collectionSize: 5e4,
  address: "Str. Ștefan cel Mare nr. 5, Mangalia, județul Constanța",
  phone: "0241 752 340",
  email: "biblioteca@mangalia.ro",
  hours: [
    { day: "Luni – Vineri", interval: "09:00 – 18:00" },
    { day: "Sâmbătă", interval: "10:00 – 14:00" },
    { day: "Duminică", interval: "Închis" }
  ]
};
const collections = [
  {
    id: "beletristica",
    title: "Beletristică",
    subtitle: "Ficțiune",
    count: "~15.000 titluri",
    description: "Romane, nuvele, poezie și dramaturgie din literatura română și universală. Autori clasici și contemporani pentru toate gusturile.",
    icon: "📖",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100"
  },
  {
    id: "non-fictiune",
    title: "Non-ficțiune",
    subtitle: "Cunoaștere și știință",
    count: "~12.000 titluri",
    description: "Istorie, știință, filozofie, biografie, călătorii și mult mai mult. Resurse valoroase pentru studiu și dezvoltare personală.",
    icon: "🔬",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100"
  },
  {
    id: "copii",
    title: "Colecția pentru copii",
    subtitle: "Lectură pentru cei mici",
    count: "~8.000 titluri",
    description: "Povești, basme, benzi desenate și cărți educative pentru copii de toate vârstele. Un spațiu special dedicat micilor cititori.",
    icon: "🌟",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100"
  },
  {
    id: "periodice",
    title: "Periodice",
    subtitle: "Ziare și reviste",
    count: "Colecție curentă",
    description: "Abonamente la principalele ziare și reviste naționale și internaționale. Sala de lectură pentru periodice este disponibilă zilnic.",
    icon: "📰",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100"
  },
  {
    id: "digital",
    title: "Resurse digitale",
    subtitle: "Acces online",
    count: "Baze de date online",
    description: "Acces la baze de date electronice, cărți digitale și resurse academice. Disponibil în biblioteca și de la distanță pentru membri.",
    icon: "💻",
    color: "bg-cyan-50 border-cyan-200",
    iconBg: "bg-cyan-100"
  },
  {
    id: "istorie-locala",
    title: "Istorie locală",
    subtitle: "Dobrogea și Mangalia",
    count: "Fond special",
    description: "Documente rare, monografii, fotografii și cărți despre istoria Mangaliei și a zonei Dobrogei. Fond de patrimoniu de neprețuit.",
    icon: "🏛️",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100"
  }
];
const events = [
  {
    id: 1,
    title: "Club de lectură pentru adulți",
    date: "24 Aprilie 2026",
    time: "17:00",
    type: "Club",
    typeColor: "bg-blue-100 text-blue-800",
    description: 'Discutăm împreună romanul „Moromeții" de Marin Preda. Participarea este liberă, înscrierile se fac la recepție.',
    location: "Sala de lectură, etaj 1"
  },
  {
    id: 2,
    title: "Atelier de creație pentru copii",
    date: "26 Aprilie 2026",
    time: "10:00",
    type: "Atelier",
    typeColor: "bg-green-100 text-green-800",
    description: 'Atelier creativ cu tema „Primăvara în culori". Copiii între 6-12 ani sunt invitați să creeze ilustrații inspirate din cărțile preferate.',
    location: "Sala copiilor, parter"
  },
  {
    id: 3,
    title: "Expoziție: Mangalia de altădată",
    date: "1 – 15 Mai 2026",
    time: "Pe toată durata programului",
    type: "Expoziție",
    typeColor: "bg-amber-100 text-amber-800",
    description: "Fotografii și documente istorice care redau viața orașului Mangalia de-a lungul deceniilor. Intrare liberă.",
    location: "Holul principal"
  },
  {
    id: 4,
    title: "Întâlnire cu autorul Ion Călin",
    date: "8 Mai 2026",
    time: "16:00",
    type: "Eveniment",
    typeColor: "bg-purple-100 text-purple-800",
    description: "Scriitorul Ion Călin prezintă cel mai recent roman și discută cu cititorii. Autografe după eveniment. Locuri limitate.",
    location: "Sala de conferințe"
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-[#1a3a5c] text-white mt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-[#c9962a] flex items-center justify-center font-bold text-sm", children: "B" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base", children: "Biblioteca Municipală Mangalia" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-sm leading-relaxed", children: [
          "Înființată în ",
          libraryInfo.founded,
          ", biblioteca servește comunitatea Mangaliei cu peste",
          " ",
          libraryInfo.collectionSize.toLocaleString("ro-RO"),
          " de volume."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-[#c9962a] mb-3 uppercase text-xs tracking-widest", children: "Program" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-sm text-white/80", children: libraryInfo.hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h.day }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: h.interval === "Închis" ? "text-red-300" : "text-white", children: h.interval })
        ] }, h.day)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-[#c9962a] mb-3 uppercase text-xs tracking-widest", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-sm text-white/80 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: libraryInfo.address }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${libraryInfo.phone}`, className: "hover:text-[#c9962a] transition-colors", children: libraryInfo.phone }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${libraryInfo.email}`, className: "hover:text-[#c9962a] transition-colors", children: libraryInfo.email }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Biblioteca Municipală Mangalia. Toate drepturile rezervate."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Acasă" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/collections", className: "hover:text-white transition-colors", children: "Colecții" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "hover:text-white transition-colors", children: "Evenimente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "Contact" })
      ] })
    ] }) })
  ] });
}
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Biblioteca Municipală Mangalia" },
      {
        name: "description",
        content: "Biblioteca Municipală Mangalia – Cunoaștere, cultură și comunitate din 1954."
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "ro", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "min-h-screen flex flex-col bg-gray-50 text-gray-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./contact-CXpNfvr2.mjs");
const Route$3 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-CZLvrpaB.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-T1Ezo0tz.mjs");
const Route$1 = createFileRoute("/events/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CgJabz-h.mjs");
const Route = createFileRoute("/collections/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const EventsIndexRoute = Route$1.update({
  id: "/events/",
  path: "/events/",
  getParentRoute: () => Route$4
});
const CollectionsIndexRoute = Route.update({
  id: "/collections/",
  path: "/collections/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  CollectionsIndexRoute,
  EventsIndexRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  collections as c,
  events as e,
  libraryInfo as l,
  router as r
};
