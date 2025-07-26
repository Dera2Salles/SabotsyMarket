import { useState } from "react";

interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
};

const FilterComponent = () => {
  const [items] = useState<Item[]>([
    { id: 1, name: "Produit A", category: "Électronique", price: 100 },
    { id: 2, name: "Produit B", category: "Vêtement", price: 50 },
    { id: 3, name: "Produit C", category: "Électronique", price: 200 },
  ]);

  const [filterCategory, setFilterCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filtrer les éléments
  const filteredItems = items.filter((item) => {
    // Filtre par catégorie
    const categoryMatch = !filterCategory || item.category === filterCategory;

    // Filtre par fourchette de prix
    // const priceMatch =
    //   item.price >= priceRange[0] && item.price <= priceRange[1];

    // // Filtre par recherche
    // const searchMatch = item.name
    //   .toLowerCase()
    //   .includes(searchTerm.toLowerCase());

    return categoryMatch ;
  });

  return (
    <div>
      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher par nom..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filtre par catégorie */}
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        <option value="Électronique">Électronique</option>
        <option value="Vêtement">Vêtement</option>
      </select>

      {/* Filtre par prix */}
      <div>
        <label>
          Prix min:
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
          />
        </label>
        <label>
          Prix max:
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </label>
      </div>

      {/* Liste filtrée */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category} - {item.price}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
