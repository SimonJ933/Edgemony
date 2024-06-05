const wishlist = [
  {
    id: 1,
    img: "./img/yoshi.jpg",
    name: "Peluche Yoshi Giallo 20cm",
    description: "Il fedele amico di Mario in versione peluche, alto 20 cm.",
    price: "10,99€",
    category: "merch",
  },
  {
    id: 4,
    img: "./img/pikmin.jpg",
    name: "Pikmin 4",
    description: "Esplora un misterioso pianeta abitato da minuscole creature simili a piante",
    price: "59,99€",
    category: "games",
  },
  {
    id: 3,
    img: "./img/asd.jpg",
    name: "Set di giocattoli da spiaggia di Super Mario",
    description: "Con questo set, i bambini possono passare ore a rastrellare, scavare e costruire castelli di sabbia.",
    price: "7,99€",
    category: "merch",
  },
];

const newWishlistItems = [
  {
    id: 1,
    img: "./img/yoshi.jpg",
    name: "Peluche Yoshi Giallo 20cm",
    description: "Il fedele amico di Mario in versione peluche, alto 20 cm.",
    price: "10,99€",
  },

  { id: 2, img: "./img/mariofuoco.jpg", name: "Peluche di Mario Fuoco, 20cm", description: "Mario in versione peluche, alto 20 cm.", price: "10,99€" },

  {
    id: 6,
    img: "./img/portacolori-peach.jpg",
    name: "Custodia da viaggio deluxe per Nintendo Switch (Princess Peach: Showtime!)",
    description: "Con questa custodia puoi giocare con il tuo Nintendo Switch sempre e ovunque con stile.",
    price: "9,99€",
  },

  {
    id: 6,
    img: "./img/mariodk.jpg",
    name: "Mario vs. Donkey Kong",
    description: "La rivalità che ha infiammato il Game Boy Advance si riaccende in Mario vs Donkey Kong.",
    price: "59,99€",
  },
];
const categories = ["games", "merch"];

export { wishlist, newWishlistItems, categories };
