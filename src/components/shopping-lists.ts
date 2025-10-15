import { component, html } from "@pionjs/pion";
import { shoppingListStyles } from "../styles/shopping-lists-style";
import type { Cocktail } from "../utils/types";

type ShoppingListProps = {
  shoppingList: Map<string, Set<string>>;
  cocktails: Cocktail[];
  onRemove: (cocktailId: string, cocktailName: string) => void;
  onClear: () => void;
  consolidatedIngredients: [string, number][];
};

function ShoppingLists(
  this: HTMLElement,
  {
    shoppingList,
    cocktails,
    onRemove,
    onClear,
    consolidatedIngredients,
  }: ShoppingListProps
) {
  const isEmpty = shoppingList.size === 0;
  const getCocktailName = (id: string) =>
    cocktails.find((c) => c.idDrink === id)?.strDrink || "";

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.writeln(`
        <html>
          <head>
            <style>
              h1, h2 { color: #333; }
            </style>
          </head>
          <body>
            <h1>Shopping List</h1>
            <h2>Cocktails</h2>
            <ul>
            ${Array.from(shoppingList.keys())
              .map((id) => `<li>${getCocktailName(id)}</li>`)
              .join("")}
            </ul>
            <h2>Ingredients</h2>
            <ul>
            ${consolidatedIngredients
              .map(
                ([ingredient]) => `
                <li>
                    <span>${ingredient}</span>
                </li>
                `
              )
              .join("")}
            </ul>
          </body>
        </html>
        `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return html`
    <style>
      ${shoppingListStyles}
    </style>

    <div class="card">
      <div class="header">
        <div class="headerContent">
          <div class="headerTitle">
            <h2 class="title">Shopping List</h2>
          </div>

          ${!isEmpty
            ? html`
                <button class="clearButton no-print" @click=${onClear}>
                  Clear
                </button>
              `
            : html``}
        </div>
      </div>

      <div class="content">
        ${isEmpty
          ? html`
              <div class="emptyState">
                <p class="emptyTitle">No cocktails added yet</p>
              </div>
            `
          : html`
              <div class="sections">
                <div class="section">
                  <h3 class="sectionTitle">
                    Selected Cocktails (${shoppingList.size})
                  </h3>

                  <div class="cocktailList">
                    ${Array.from(shoppingList.keys()).map((cocktailId) => {
                      const name = getCocktailName(cocktailId);
                      return html`
                        <div class="cocktailItem no-print" key=${cocktailId}>
                          <span class="cocktailName">${name}</span>
                          <button
                            class="removeButton"
                            @click=${() => onRemove(cocktailId, name)}
                          >
                            Remove
                          </button>
                        </div>
                      `;
                    })}
                  </div>
                </div>

                <div class="section">
                  <h3 class="sectionTitle">Ingredients</h3>
                  <ul class="ingredientList">
                    ${consolidatedIngredients.map(
                      ([ingredient]) => html`
                        <li class="ingredientItem" key=${ingredient}>
                          <span class="ingredientName">${ingredient}</span>
                        </li>
                      `
                    )}
                  </ul>
                </div>
              </div>
            `}
      </div>

      ${!isEmpty
        ? html`
            <div class="footer">
              <button class="printButton" @click=${handlePrint}>Print</button>
            </div>
          `
        : html``}
    </div>
  `;
}

customElements.define("shopping-lists", component(ShoppingLists));
