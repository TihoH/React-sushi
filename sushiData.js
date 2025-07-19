const sushiData = [
  {
    name: "Сет Хокку 32 шт",
    description:
      "Запечений з крабовим міксом, Каліфорнія з крабовим міксом в кунжуті, Макі з лососем, Рол Філадельфія дует. 🎁РОЛ У ПОДАРУНОК: Каліфорнія Чікен. Соєвий соус – 120 мл (3 шт). Імбир – 40 г. Васабі – 20 г.",
    price: 669,
    category: "sets",
    weight: 1160,
    id: 1,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-set-hokku-32-sht-we.jpg?&w=991&h=700&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з лососем",
    description: "Рис, лосось, крем сир, авокадо, огірок, норі",
    price: 329,
    category: "rols",
    weight: 270,
    id: 2,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-lososem-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія дует",
    description:
      "Рис, лосось, тунець, крем сир, огірок, соус горіховий унагі, норі, кунжут",
    price: 299,
    category: "rols",
    weight: 280,
    id: 3,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0001-filadelfiya-duet-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з тунцем",
    description: "Рис, тунець, крем сир, авокадо, огірок, норі",
    price: 299,
    category: "rols",
    weight: 270,
    id: 4,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0001-rol-filadelfiya-z-tuncem-we.png?&w=650&format=auto&mode=fit&q=80",
  },

  {
    name: "Філадельфія з вугрем",
    description:
      "Рис, вугор, авокадо, крем сир, огірок, соус унагі, кунжут, норі",
    price: 399,
    category: "rols",
    weight: 280,
    id: 5,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-vugrem-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з копченим лососем",
    description: "Рис, копчений лосось, крем сир, авокадо, огірок, норі",
    price: 319,
    category: "rols",
    weight: 260,
    id: 6,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-kopchenim-lososem-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з тунцем в кунжуті",
    description: "Рис, тунець, крем сир,авокадо, кунжут, огірок, норі",
    price: 239,
    category: "rols",
    weight: 260,
    id: 7,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-tuncem-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з лососем в кунжуті",
    description: "Рис, лосось, крем сир, авокадо, кунжут, огірок, норі",
    price: 249,
    category: "rols",
    weight: 260,
    id: 8,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-lososem-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з копченим лососем в кунжуті",
    description:
      "Рис, копчений лосось, крем сир, авокадо, кунжут, огірок, норі",
    price: 239,
    category: "rols",
    weight: 250,
    id: 9,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-kopchenim-lososem-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з вугрем в кунжуті",
    description: "Рис, вугор, крем сир, авокадо, кунжут, огірок, норі",
    price: 299,
    category: "rols",
    weight: 250,
    id: 10,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-vugrem-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Філадельфія з креветкою в кунжуті",
    description:
      "Рис, креветка темпура, крем сир, авокадо, огірок, кунжут, норі",
    price: 219,
    category: "",
    weight: 250,
    id: 11,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-filadelfiya-z-krevetkoyu-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Каліфорнія з лососем в кунжуті",
    description: "Рис, лосось, авокадо, огірок, кунжут, норі",
    price: 219,
    category: "rols",
    weight: 230,
    id: 12,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-kaliforniya-z-lososem-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Каліфорнія з крабовим міксом в кунжуті",
    description: "Рис, крабовий мікс, авокадо, огірок, кунжут, норі",
    price: 139,
    category: "rols",
    weight: 230,
    id: 13,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-kaliforniya-z-krabovim-miksom-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Каліфорнія з копченим лососем в кунжуті",
    description: "Рис, копчений лосось, авокадо, огірок, кунжут, норі",
    price: 229,
    category: "rols",
    weight: 220,
    id: 14,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-kaliforniya-z-kopchenim-lososem-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },

  {
    name: "Каліфорнія з крабовим міксом в ікрі",
    description: "Рис, крабовий мікс, авокадо, огірок, ікра тобіко, норі",
    price: 229,
    category: "rols",
    weight: 230,
    id: 15,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-kaliforniya-z-krabovim-miksom-v-ikri-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Каліфорнія з лососем в ікрі",
    description: "Рис, лосось, авокадо, огірок, ікра тобіко, норі",
    price: 279,
    category: "rols",
    weight: 230,
    id: 16,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-kaliforniya-z-lososem-v-ikri-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Каліфорнія Чікен",
    description:
      "Рис, копчена курка, омлет, огірок, кунжут, соус горіховий унагі, норі",
    price: 149,
    category: "rols",
    weight: 240,
    id: 17,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-kaliforniya-chiken-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  {
    name: "Каліфорнія з креветкою в кунжуті",
    description: "Рис, креветка, омлет, огірок, кунжут, соус унагі, норі",
    price: 199,
    category: "rols",
    weight: 240,
    id: 18,
    imageUrl:
      "https://cdn.wesushi.com.ua/ws-ukr/products/0002-kaliforniya-z-krevetkoyu-v-kunzhuti-we.jpg?&w=650&format=auto&mode=fit&q=80",
  },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  //   {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
  // {
  //   name: "",
  //   description: "",
  //   price: ,
  //   category: "",
  //   weight:  ,
  //   id ,
  //   imageUrl: "",
  // },
];

module.exports = sushiData;