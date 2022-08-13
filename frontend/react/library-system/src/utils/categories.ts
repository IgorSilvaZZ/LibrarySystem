export interface ICategories {
  name: string;
  filter: string;
}

export const categories: ICategories[] = new Array(
  { name: "Todos os Generos", filter: "all" },
  { name: "Aventura", filter: "adventure" },
  { name: "Ficção", filter: "fiction" },
  { name: "Ciencia", filter: "science" },
  { name: "Infantil Juvenil", filter: "juvenile" },
  { name: "Suspense", filter: "thriller" },
  { name: "Romance", filter: "romance" },
  { name: "Artes", filter: "art" },
  { name: "Historia", filter: "history" },
  { name: "Biografias", filter: "biography" }
);
