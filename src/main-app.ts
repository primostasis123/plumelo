import { component, html, useState } from "@pionjs/pion";
import "./components/search-bar";
import "./components/cocktail-results";
import { sharedStyles } from "./styles/shared-styles";
import type { Cocktail } from "./utils/types";

function MainApp() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [shoppingList, setShoppingList] = useState<Map<string, Set<string>>>(
    new Map()
  );
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    if (!query.trim()) {
      setCocktails([]);
      return;
    }
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      if (data.drinks) {
        const formattedCocktails = data.drinks.map((drink: any) => {
          const ingredients: string[] = [];
          for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];
            if (ingredient) {
              ingredients.push(
                measure ? `${measure.trim()} ${ingredient}` : ingredient
              );
            }
          }
          return {
            idDrink: drink.idDrink,
            strDrink: drink.strDrink,
            strDrinkThumb: drink.strDrinkThumb,
            strInstructions: drink.strInstructions,
            ingredients,
          };
        });
        setCocktails(formattedCocktails);
        console.log(formattedCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
    } finally {
      setIsSearching(true);
    }
  };

  const addToShoppingList = (cocktail: Cocktail) => {
    setShoppingList((prev) => {
      const newList = new Map(prev);
      newList.set(cocktail.idDrink, new Set(cocktail.ingredients));
      return newList;
    });
  };
  return html`
    <style>
      ${sharedStyles}
    </style>
    <div class="container">
      <main class="main">
        <div class="layout">
          <div class="content no-print">
            <search-bar
              @search=${(e: CustomEvent<{ query: string }>) =>
                handleSearch(e.detail.query)}
            /></search-bar>
            <cocktail-results 
            .cocktails=${cocktails} 
            .shoppingList=${shoppingList} 
            .onAddToList=${addToShoppingList}>
            </cocktail-results>
          </div>
        </div>
      </main>
    </div>
  `;
}
customElements.define("main-app", component(MainApp));
