import { css, type CSSResultGroup } from "lit";

export const shoppingListStyles: CSSResultGroup = css`
  .card {
    border-radius: 4px;
    background-color: white;
    position: sticky;
    top: 32px;
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
    background-color: #fdfdfd;
  }

  .header {
    position: relative;
    padding: 24px; 
  }

  .header::before {
    content: "";
    position: absolute;
    inset: 12px;           
    border-bottom: 1px solid #e5e7eb;
    border-radius: inherit; 
    pointer-events: none;
  }

  .headerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerTitle {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .clearButton {
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clearButton:hover {
    opacity: 0.7;
  }

  .content {
    padding: 24px;
  }

  .emptyState {
    text-align: center;
    padding: 32px 0;
    color: black;
  }

  .emptyTitle {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .section {
  }

  .sectionTitle {
    font-size: 12px;
    font-weight: 600;
    color: black;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .cocktailList {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .cocktailItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-radius: 4px;
    background-color: white;
  }

  .cocktailName {
    font-size: 14px;
    font-weight: 500;
  }

  .removeButton {
    width: 24px;
    height: 24px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .removeButton:hover {
    opacity: 0.7;
  }

  .ingredientList {
    list-style: none;
    padding: 0;
  }

  .ingredientItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .ingredientName {
    text-transform: capitalize;
  }

  .ingredientCount {
    font-size: 12px;
    color: black;
  }

  .footer {
    padding: 24px;
    border-top: 1px solid black;
  }

  .printButton {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .printButton:hover {
    background-color: white;
  }
`;
