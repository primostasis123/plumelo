import { component, html, useState } from "@pionjs/pion";
import "./components/search-bar";
import "./components/cocktail-results";
import "./components/shopping-lists";
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
    setCocktails([]);
    setShoppingList(new Map());
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
      } else {
        setCocktails([]);
      }
    } catch (error) {
    } finally {
      setIsSearching(false);
    }
  };

  const addToShoppingList = (cocktail: Cocktail) => {
    setShoppingList((prev) => {
      const newList = new Map(prev);
      newList.set(cocktail.idDrink, new Set(cocktail.ingredients));
      return newList;
    });
  };

  const removeFromShoppingList = (cocktailId: string) => {
    setShoppingList((prev) => {
      const newList = new Map(prev)
      newList.delete(cocktailId)
      return newList
    })
  }

  const clearShoppingList = () => {
    setShoppingList(new Map())
  }

  const getConsolidatedIngredients = () => {
    const ingredientMap = new Map<string, number>()
    shoppingList.forEach((ingredients) => {
      ingredients.forEach((ingredient) => {
        const baseIngredient = ingredient.split(" ").slice(-1)[0].toLowerCase()
        ingredientMap.set(baseIngredient, (ingredientMap.get(baseIngredient) || 0) + 1)
      })
    })

    return Array.from(ingredientMap.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }


  return html`
    <style>
      ${sharedStyles}
    </style>
    <div class="container">
      <main class="main">
        <div class="layout">
          <div class="content">
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
          <aside class="sidebar">
            <shopping-lists
              .shoppingList=${shoppingList}
              .cocktails=${cocktails}
              .onRemove=${removeFromShoppingList}
              .onClear=${clearShoppingList}
              .consolidatedIngredients=${getConsolidatedIngredients()}
            >
            </shopping-lists>
          </aside>
        </div>
      </main>
    </div>
  `;
}
customElements.define("main-app", component(MainApp));
