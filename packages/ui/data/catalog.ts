export type ProductPrice = {
  amount: number;
  compareAt?: number;
};

export type CatalogProduct = {
  slug: string;
  name: string;
  subtitle?: string;
  category: string;
  cloth?: string;
  price: ProductPrice;
  imageUrl: string;
  isNew?: boolean;
  detail?: string;
};

const asset = (id: string) =>
  `https://app.paper.design/file-assets/01M4QSKKY6N27929BKX69BP2PZ/${id}`;

export const heroCoatImage = asset("01M4QXY4X4VSPQ8ARHECXHYF2Q.png");

export const landingNewProducts: CatalogProduct[] = [
  {
    slug: "rain-mac",
    name: "Rain mac",
    category: "Outerwear",
    price: { amount: 298 },
    imageUrl: asset("01M4QXVSSZCB81DK0ZVVAQBTQA.png"),
    isNew: true,
  },
  {
    slug: "cotton-drill-overshirt",
    name: "Cotton drill overshirt",
    category: "Shirting",
    price: { amount: 312, compareAt: 390 },
    imageUrl: asset("01M4QXY4XAQJ5B3CNAVJDR2EDJ.png"),
  },
  {
    slug: "merino-crew",
    name: "Merino crew",
    category: "Knitwear",
    cloth: "Olive",
    price: { amount: 168 },
    imageUrl: asset("01M4QXY4XEXRD6XPQVHSZ5HVN1.png"),
  },
  {
    slug: "wool-overshirt",
    name: "Wool overshirt",
    category: "Outerwear",
    cloth: "Bark",
    price: { amount: 358 },
    imageUrl: asset("01M4QXVSSXKE32ZVG03KX3C8C1.png"),
  },
];

export const listingProducts: CatalogProduct[] = [
  {
    slug: "wool-field-coat",
    name: "Wool field coat",
    cloth: "Charcoal",
    category: "Outerwear",
    price: { amount: 428 },
    imageUrl: asset("01M4QXY4X1KF5K1TEMRETYAMA9.png"),
    isNew: true,
  },
  {
    slug: "cotton-drill-overshirt",
    name: "Cotton drill overshirt",
    cloth: "Oatmeal · 2 cloths",
    category: "Shirting",
    price: { amount: 312, compareAt: 390 },
    imageUrl: asset("01M4QXVSSQ2J1KMMSWKB7RJMPM.png"),
  },
  {
    slug: "merino-crew",
    name: "Merino crew",
    cloth: "Olive · 3 cloths",
    category: "Knitwear",
    price: { amount: 168 },
    imageUrl: asset("01M4QXVSSSS8YXM59MXJ1ESRZG.png"),
  },
  {
    slug: "washed-cotton-shirt",
    name: "Washed cotton shirt",
    cloth: "Sand",
    category: "Shirting",
    price: { amount: 148 },
    imageUrl: asset("01M4QXVSSW2FF185XA26FNDSY7.png"),
    isNew: true,
  },
  {
    slug: "wool-overshirt",
    name: "Wool overshirt",
    cloth: "Bark",
    category: "Outerwear",
    price: { amount: 358 },
    imageUrl: asset("01M4QXVSSXKE32ZVG03KX3C8C1.png"),
  },
  {
    slug: "rain-mac",
    name: "Rain mac",
    cloth: "Sage · Only S and M left",
    category: "Outerwear",
    price: { amount: 298 },
    imageUrl: asset("01M4QXVSSZCB81DK0ZVVAQBTQA.png"),
  },
];

export const featuredProduct: CatalogProduct = {
  slug: "wool-field-coat",
  name: "Wool field coat",
  subtitle: "Charcoal · Double-faced wool",
  category: "Outerwear / Coats",
  cloth: "Charcoal",
  price: { amount: 428 },
  imageUrl: asset("01M4QXY4X1KF5K1TEMRETYAMA9.png"),
  isNew: true,
  detail:
    "Double-faced wool, unlined through the sleeve. Two interior pockets. Horn buttons. Charcoal only.",
};

export const productGalleryImages = [
  asset("01M4QXVSSDJ7WC115338P9KKXH.png"),
  asset("01M4QXVSSKGW28GKYZ7SX7K6G3.png"),
  asset("01M4QXVSSND4PNDK6WQVKE40VN.png"),
  asset("01M4QXY4X8QFTDFDA620B4K29V.png"),
];

export const relatedProducts: CatalogProduct[] = [
  {
    slug: "wool-field-coat",
    name: "Wool field coat",
    cloth: "Charcoal",
    category: "Outerwear",
    price: { amount: 428 },
    imageUrl: asset("01M4QXY4X1KF5K1TEMRETYAMA9.png"),
    isNew: true,
  },
  {
    slug: "cotton-drill-overshirt",
    name: "Cotton drill overshirt",
    category: "Shirting",
    price: { amount: 312, compareAt: 390 },
    imageUrl: asset("01M4QXVSSQ2J1KMMSWKB7RJMPM.png"),
  },
  {
    slug: "merino-crew",
    name: "Merino crew",
    cloth: "Olive",
    category: "Knitwear",
    price: { amount: 168 },
    imageUrl: asset("01M4QXVSSSS8YXM59MXJ1ESRZG.png"),
  },
  {
    slug: "washed-cotton-shirt",
    name: "Washed cotton shirt",
    cloth: "Sand",
    category: "Shirting",
    price: { amount: 148 },
    imageUrl: asset("01M4QXVSSW2FF185XA26FNDSY7.png"),
    isNew: true,
  },
];

export const clothTiles = [
  {
    name: "Wool",
    count: "6 pieces",
    imageUrl: asset("01M4QXVSSKGW28GKYZ7SX7K6G3.png"),
  },
  {
    name: "Cotton drill",
    count: "5 pieces",
    imageUrl: asset("01M4QXVSSQ2J1KMMSWKB7RJMPM.png"),
  },
  {
    name: "Merino",
    count: "3 pieces",
    imageUrl: asset("01M4QXVSSSS8YXM59MXJ1ESRZG.png"),
  },
];

export function formatPrice(price: ProductPrice): string {
  return `$${price.amount}`;
}
