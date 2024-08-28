export const links = [
  { path: "", name: "home" },
  { path: "pages/about", name: "about" },
  {
    path: "pages/categories",
    name: "categories",
    sublink: [
      { path: "pages/categories/sneakers", name: "sneakers" },
      { path: "pages/categories/jordans", name: "jordans" },
      { path: "pages/categories/runningshoes", name: "runningshoes" },
      { path: "pages/categories/footballshoes", name: "footballshoes" },
    ],
  },
  { path: "pages/contact", name: "contact" },
];
