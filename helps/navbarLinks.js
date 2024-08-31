export const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/pages/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/pages/contact" },
];

export const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11, path: "/pages/categories/jordans" },
  { id: 2, name: "Sneakers", doc_count: 8, path: "/pages/categories/sneakers" },
  {
    id: 3,
    name: "Running shoes",
    doc_count: 64,
    path: "/pages/categories/runningshoes",
  },
  {
    id: 4,
    name: "Football shoes",
    doc_count: 107,
    path: "/pages/categories/footballshoes",
  },
];
