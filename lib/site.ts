export const site = {
  name: "Pool Builder Web Design",
  domain: "poolbuilderwebdesign.com",
  url: "https://poolbuilderwebdesign.com",
  parent: "cantandoDigital",
  parentUrl: "https://cantandodigital.com",
  phone: "610-764-3857",
  phoneHref: "tel:+16107643857",
  email: "stevenJohn@cantandoDigital.com",
  location: "Newtown Square, PA",
  description:
    "Website design, SEO and digital marketing built only for pool builders. Better websites, stronger search visibility and more estimate requests from homeowners ready to build a backyard pool.",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

/** Free-license Unsplash photos (images.unsplash.com hotlinking is permitted by the Unsplash License). */
const u = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${w}${h ? `&h=${h}` : ""}`;

type Img = (w?: number, h?: number) => string;
const p = (id: string): Img => (w, h) => u(`photo-${id}`, w, h);

export const img = {
  // Crews and pools under construction
  excavatorDig: p("1785484267832-55ca462c2ecd"),
  excavatorBackyard: p("1785484267789-d61879b463f9"),
  excavatorsSite: p("1785484267797-64b07f6d542a"),
  excavatorTrench: p("1785484267483-a61168355677"),
  digSite: p("1610164989165-0c4701bc4ce2"),
  concretePour: p("1574757987642-5755f0839101"),
  rebarCrew: p("1582540730843-f4418d96ccbe"),
  rebarTwo: p("1667207591431-0366faabde1a"),
  concreteRake: p("1685464196387-854858ce0f4f"),
  emptyPoolTile: p("1681864143679-e2f031338615"),
  // Finished pools and homes
  sunsetPool: p("1634923295030-730da9900a2d"),
  duskSpa: p("1657383543368-7d929944be6a"),
  freeformHome: p("1635108201418-0996823f4cc3"),
  whiteHomeKidney: p("1786051385612-5fac26efaf88"),
  modernHomePool: p("1564013799919-ab600027ffc6"),
  resortPool: p("1534009502677-4e5080efa8c6"),
  patioPool: p("1635108201275-f2858f087bd9"),
  glassHome: p("1706808849780-7a04fbac83ef"),
  nightPool: p("1762811054950-b74e0a055c80"),
  pergolaPool: p("1635111300299-e6e677daf7b7"),
  outdoorKitchen: p("1694885161486-6390b35de012"),
  fencedPool: p("1725320571987-396323fa5c30"),
  plungePool: p("1602774895945-a4983ccb137b"),
  gardenPool: p("1782203601219-c772fac676dc"),
  waterFeature: p("1749224725848-a450483cd75d"),
  aerialPool: p("1587870306141-4f19861e6c73"),
  brickPool: p("1622085354806-80fcdcd4ef4a"),
  planterPool: p("1771317778033-3473a576c5e9"),
  tileEdge: p("1597126730312-2109e5db11fa"),
  modernVilla: p("1613490493576-7fde63acd811"),
};
