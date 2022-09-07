import bcrypt from "bcryptjs";
const ProductData = {
  users: [
    {
      name: "Ifedayo",
      email: "admin@email.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Samuel",
      email: "user@email.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: 1,
      name: "Lenovo Yoga",
      model: "U76789I3HE",
      image: ["../assets/products/1646_Lenovo-Yoga-3-Pro-Repair_1.jpg", "../assets/products/lenoYOGApro3_2.jpg"],
      price: 120000,
      rating: 1.5,
      initialPrice: "124,000",
      quantityInStock: "24",
      config: "256GB SSD/ 8GB RAM, intel core i9, 2.43 GHz processor speed...",
      brief:
        "The Lenovo Yoga 13.3 (2GB RAM, 500GB HDD) Laptop is a sleek lightweight laptop that delivers value at an amazing price. Running on Windows 10 and equipped with a 2GHz Quad-Core processor, the Viao 13.3 Laptop is your best bet for work and entertainment. Get the Sony Vaio Laptop online from Jumia at the best price in Nigeria",
      desc: "ProcessorThe Lenovo Yoga Laptop features an Intel Core i3 Laptop at a speed of 2.5GHz so you are assured of super fast processing while you run multiple applications. Open multiple web pages, create documents and spreadsheets, play games and do so much more with a processor that can handle it.HD Screen. View everything in crystal clear resolution with the HD Screen. The Sony Vaio HD is perfect for entertainment, multimedia and work. Watch videos, video call, create slides and view memories all in life like clarity.). Retina display size: 9.7-inch (diagonal) LED-backlit Multi-Touch display resolution:2048-by-1536 resolution at 264 pixels per inch (ppi), Wide color display, True Tone display, Fingerprint-resistant oleophobic coating, Fully laminated display, Antireflective coating Chip, A9X chip with 64-bit architecture, M9 coprocessor",
      condition: "New",
      availability: "In stock",
      category: "work station",
      size: "13 inches",
      color: "black",
      reviews: "23",
      brand: "Lenovo",
    },
    {
      id: 2,
      name: "Macbook 2021 M1",
      model: "U76789I3HE",
      image: ["../assets/products/macbook2.png", "../assets/products/macbook1.jpeg"],
      price: 682000,
      rating: "5",
      initialPrice: "685,000",
      quantityInStock: 0,
      config: "256GB SSD/ 8GB RAM, intel core i9, 2.43 GHz processor speed...",
      brief:
        "The Macbook 2021 M1 13.3 (2GB RAM, 500GB HDD) Laptop is a sleek lightweight laptop that delivers value at an amazing price. Running on Windows 10 and equipped with a 2GHz Quad-Core processor, the Viao 13.3 Laptop is your best bet for work and entertainment. Get the Sony Vaio Laptop online from Jumia at the best price in Nigeria",
      desc: "The macbook 2021 M1 Laptop features an M1 chip at a speed of 2.5GHz so you are assured of super fast processing while you run multiple applications. Open multiple web pages, create documents and spreadsheets, play games and do so much more with a processor that can handle it.HD Screen. View everything in crystal clear resolution with the HD Screen. The Sony Vaio HD is perfect for entertainment, multimedia and work. Watch videos, video call, create slides and view memories all in life like clarity.). Retina display size: 9.7-inch (diagonal) LED-backlit Multi-Touch display resolution:2048-by-1536 resolution at 264 pixels per inch (ppi), Wide color display, True Tone display, Fingerprint-resistant oleophobic coating, Fully laminated display, Antireflective coating Chip, A9X chip with 64-bit architecture, M9 coprocessor",
      condition: "USED",
      availability: "In stock",
      category: "Apple",
      size: "13 inches",
      color: "space grey",
      reviews: "123",
      brand: "Apple",
    },
    {
      id: 3,
      name: "DELL Inspiron",
      model: "U76789I3HE",
      image: [
        "../assets/products/Dell-Inspiron-15-5000-5558-Silver-Version.jpg",
        "../assets/products/1525204196_635_latitude-3450.png",
      ],
      initialPrice: "280,000",
      price: 250000,
      rating: 2.5,
      quantityInStock: 34,
      config: "256GB SSD/ 8GB RAM, intel core i9, 2.43 GHz processor speed...",
      brief:
        "The Dell Inspiron (2GB RAM, 500GB HDD) Laptop is a sleek lightweight laptop that delivers value at an amazing price. Running on Windows 10 and equipped with a 2GHz Quad-Core processor, the Viao 13.3 Laptop is your best bet for work and entertainment. Get the Sony Vaio Laptop online from Jumia at the best price in Nigeria",
      desc: "The macbook 2021 M1 Laptop features an M1 chip at a speed of 2.5GHz so you are assured of super fast processing while you run multiple applications. Open multiple web pages, create documents and spreadsheets, play games and do so much more with a processor that can handle it.HD Screen. View everything in crystal clear resolution with the HD Screen. The Sony Vaio HD is perfect for entertainment, multimedia and work. Watch videos, video call, create slides and view memories all in life like clarity.). Retina display size: 9.7-inch (diagonal) LED-backlit Multi-Touch display resolution:2048-by-1536 resolution at 264 pixels per inch (ppi), Wide color display, True Tone display, Fingerprint-resistant oleophobic coating, Fully laminated display, Antireflective coating Chip, A9X chip with 64-bit architecture, M9 coprocessor",
      condition: "New",
      availability: "In stock",
      category: "Personal",
      size: "13 inches",
      color: "space grey",
      reviews: "290",
      brand: "Dell",
    },
    {
      id: 4,
      name: "HP Envy",
      model: "U76789I3HE",
      image: ["../assets/products/HPENVYx360m6__2_.jpg", "../assets/products/csm_MG_2838_354458139a.jpg"],
      price: 400000,
      rating: "5",
      initialPrice: "480,000",
      quantityInStock: 15,
      config: "256GB SSD/ 8GB RAM, intel core i9, 2.43 GHz processor speed...",
      brief:
        "The HP Envy (16GB RAM, 1TB SSD) Laptop is a sleek lightweight laptop that delivers value at an amazing price. Running on Windows 10 and equipped with a 2GHz Quad-Core processor, the Viao 13.3 Laptop is your best bet for work and entertainment. Get the Sony Vaio Laptop online from Jumia at the best price in Nigeria",
      desc: "The HP Envy features an M1 chip at a speed of 2.5GHz so you are assured of super fast processing while you run multiple applications. Open multiple web pages, create documents and spreadsheets, play games and do so much more with a processor that can handle it.HD Screen. View everything in crystal clear resolution with the HD Screen. The Sony Vaio HD is perfect for entertainment, multimedia and work. Watch videos, video call, create slides and view memories all in life like clarity.). Retina display size: 9.7-inch (diagonal) LED-backlit Multi-Touch display resolution:2048-by-1536 resolution at 264 pixels per inch (ppi), Wide color display, True Tone display, Fingerprint-resistant oleophobic coating, Fully laminated display, Antireflective coating Chip, A9X chip with 64-bit architecture, M9 coprocessor",
      condition: "New",
      availability: "In stock",
      category: "office",
      size: "13 inches",
      color: "silver",
      reviews: "56",
      brand: "Hp",
    },
    {
      id: 5,
      name: "Lenovo Thinkpad",
      model: "U76789I3HE",
      image: [
        "../assets/products/A60G_131554151661089309JJQPvR7NVX.jpg",
        "../assets/products/csm_MG_2838_354458139a.jpg",
      ],
      price: 172500,
      rating: 2,
      initialPrice: "175,000",
      quantityInStock: 17,
      config: "256GB SSD/ 8GB RAM, intel core i9, 2.43 GHz processor speed...",
      brief:
        "The Lenovo ThinkPad (8GB RAM, 512GB SSD) Laptop is a sleek lightweight laptop that delivers value at an amazing price. Running on Windows 10 and equipped with a 2GHz Quad-Core processor, the Viao 13.3 Laptop is your best bet for work and entertainment. Get the Sony Vaio Laptop online from Jumia at the best price in Nigeria",
      desc: "The macbook 2021 M1 Laptop features an M1 chip at a speed of 2.5GHz so you are assured of super fast processing while you run multiple applications. Open multiple web pages, create documents and spreadsheets, play games and do so much more with a processor that can handle it.HD Screen. View everything in crystal clear resolution with the HD Screen. The Sony Vaio HD is perfect for entertainment, multimedia and work. Watch videos, video call, create slides and view memories all in life like clarity.). Retina display size: 9.7-inch (diagonal) LED-backlit Multi-Touch display resolution:2048-by-1536 resolution at 264 pixels per inch (ppi), Wide color display, True Tone display, Fingerprint-resistant oleophobic coating, Fully laminated display, Antireflective coating Chip, A9X chip with 64-bit architecture, M9 coprocessor",
      condition: "USED",
      availability: "In stock",
      category: "Gamers",
      size: "17 inches",
      color: "black",
      reviews: "101",
      brand: "Lenovo",
    },
    {
      id: 6,
      name: "Acer Aspire",
      model: "U76789I3HE",
      image: ["../assets/products/acer.jpg"],
      price: 95000,
      rating: 1.5,
      initialPrice: "98,000",
      quantityInStock: 0,
      config: "256GB SSD/ 8GB RAM, intel core i9, 2.43 GHz processor speed...",
      brief:
        "The Toshiba Satelite Laptop is a sleek lightweight laptop that delivers value at an amazing price. Running on Windows 10 and equipped with a 2GHz Quad-Core processor, the Viao 13.3 Laptop is your best bet for work and entertainment. Get the Sony Vaio Laptop online from Jumia at the best price in Nigeria",
      desc: "The Toshiba Satelite Laptop features an M1 chip at a speed of 2.5GHz so you are assured of super fast processing while you run multiple applications. Open multiple web pages, create documents and spreadsheets, play games and do so much more with a processor that can handle it.HD Screen. View everything in crystal clear resolution with the HD Screen. The Sony Vaio HD is perfect for entertainment, multimedia and work. Watch videos, video call, create slides and view memories all in life like clarity.). Retina display size: 9.7-inch (diagonal) LED-backlit Multi-Touch display resolution:2048-by-1536 resolution at 264 pixels per inch (ppi), Wide color display, True Tone display, Fingerprint-resistant oleophobic coating, Fully laminated display, Antireflective coating Chip, A9X chip with 64-bit architecture, M9 coprocessor",
      condition: "New",
      availability: "false",
      category: "office",
      size: "15 inches",
      color: "silver",
      reviews: "90",
      brand: "",
    },
  ],
};
export default ProductData;
