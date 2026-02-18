const margin = { top: 50, right: 0, bottom: 50, left: 70 };
const width = 900;
const height = 350;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const formatsInfo = [
  { id: "Action", label: "Action", color: "#76B6C2" },
  { id: "Adventure", label: "Adventure", color: "#4CDDF7" },
  { id: "Comedy", label: "Comedy", color: "#20B9BC" },
  { id: "Dark Comedy", label: "Dark Comedy", color: "#2F8999" },
  { id: "Documentary", label: "Documentary", color: "#E39F94" },
  { id: "Drama", label: "Drama", color: "#ED7864" },
  { id: "Horror", label: "Horror", color: "#ABABAB" },
  { id: "Romantic Comedy", label: "Romantic Comedy", color: "#1519f4" },
  {
    id: "Thriller or Suspense",
    label: "Thriller or Suspense",
    color: "#ea2424",
  },
  { id: "Western", label: "Western", color: "#35d820" },
  { id: "Multiple Genres", label: "Multiple Genres", color: "#cd15a8" },
  { id: "Musical", label: "Musical", color: "#1fcede" },
  {
    id: "Concert or Performance",
    label: "Concert or Performance",
    color: "#1c0707",
  },
];

// [
//   "Action",
//   "Adventure",
//   "Comedy",
//   "Dark Comedy",
//   "Documentary",
//   "Drama",
//   "Horror",
//   "Romantic Comedy",
//   "Thriller or Suspense",
//   "Western",
//   "Multiple Genres",
//   "Musical",
//   "Concert or Performance",
// ];
