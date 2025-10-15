import { component, html } from "@pionjs/pion";
import { cockTailStyles } from "../styles/cocktail-results-style";

import type { Cocktail } from "../utils/types";

type CocktailResultsProps = {
  cocktails: Cocktail[];
  onAddToList: (cocktail: Cocktail) => void;
  shoppingList: Map<string, Set<string>>;
};

function CocktailResults(
  this: HTMLElement,
  { cocktails = [], shoppingList, onAddToList }: CocktailResultsProps
) {
  if (!cocktails.length) {
    return html`
      <style>
        ${cockTailStyles}
      </style>
      <div class="emptyState">
        <p class="emptyTitle">Search for a cocktail to get started</p>
        <p class="emptySubtitle">Try searching for "Margarita" or "Mojito"</p>
      </div>
    `;
  }
  return html` <style>
      ${cockTailStyles}
    </style>
    <div class="grid">
      ${cocktails.map((cocktail) => {
        const isAdded = shoppingList.has(cocktail.idDrink);
        return html`
          <div class="card">
            <div class="imageContainer">
              <img
                src=${cocktail.strDrinkThumb || "/placeholder.svg"}
                alt=${cocktail.strDrink}
                height="200"
                width="200"
              />
            </div>

            <div class="cardContent">
              <h3 class="cardTitle">${cocktail.strDrink}</h3>

              <div class="section">
                <h4 class="sectionTitle">Ingredients</h4>
                <ul class="ingredientList">
                  ${cocktail.ingredients.map(
                    (ingredient) => html`
                      <li class="ingredientItem">${ingredient}</li>
                    `
                  )}
                </ul>
              </div>

              <div class="section">
                <h4 class="sectionTitle">Instructions</h4>
                <p class="instructions">${cocktail.strInstructions ?? ""}</p>
              </div>
            </div>

            <div class="cardActions">
              <button
                class=${`addButton ${
                  isAdded ? "addButtonSecondary" : "addButtonPrimary"
                }`}
                @click=${() => onAddToList?.(cocktail)}
                ?disabled=${isAdded}
              >
                ${isAdded
                  ? html`<span>✔</span>`
                  : html`<span>＋</span>`}
              </button>
            </div>
          </div>
        `;
      })}
    </div>`;
}
customElements.define("cocktail-results", component(CocktailResults));
