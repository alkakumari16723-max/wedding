// src/data/locations.js

const locations = [
  {
    id: 1,
    name: "Jaipur",
    path: "/jaipur",   // ✅ ADD THIS
    image: "/images/jaipur.jpg",
    description: "Royal destination wedding city",
    price: "₹10L - ₹50L",
    venues: ["City Palace", "Rambagh Palace"]
  },
  {
    id: 2,
    name: "Goa",
    path: "/goa",
    image: "/images/goa.jpg",
    description: "Beach wedding paradise",
    price: "₹8L - ₹40L",
    venues: ["Beach Resort", "Taj Goa"]
  },
  {
    id: 3,
    name: "Delhi",
    path: "/delhi",   // ✅ ADD THIS
    image: "/images/delhi.jpg",
    description: "Luxury wedding hubs",
    price: "₹5L - ₹30L",
    venues: ["Farmhouses", "5 Star Hotels"]
  },
  {

    id: 4,
    name: "Mumbai",
    path: "/mumbai",
    image: "/images/mumbai.jpg",
    description: "Luxury weddings with sea view & 5-star venues",
    price: "₹20L - ₹1Cr+",
    venues: ["Taj Lands End", "JW Marriott", "Grand Hyatt"]
  },
  {
    id: 5,
    name: "Uttar Pradesh",
    path: "/uttar-pradesh",
    image: "/images/up.jpg",
    description: "Heritage & cultural wedding destinations",
    price: "₹5L - ₹35L",
    venues: ["Taj Mahal Area Hotels", "Lucknow Banquets"]
  },
  {
    id: 6,
    name: "Punjab",
    path: "/punjab",
    image: "/images/punjab.jpg",
    description: "Grand Punjabi weddings with big celebrations",
    price: "₹10L - ₹50L",
    venues: ["Palace Resorts", "Luxury Farmhouses"]
  }

];

export default locations;