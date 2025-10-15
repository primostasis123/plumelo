import { css, type CSSResultGroup } from "lit";

export const cockTailStyles: CSSResultGroup = css`
  .emptyState {
    text-align: center;
    padding: 48px 0;
    color: black;
  }

  .emptyTitle {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .emptySubtitle {
    font-size: 14px;
  }

  .grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .card {
    border: 1px solid black;
    border-radius: 4px;
    overflow: hidden;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .imageContainer {
    position: relative;
    width: 200px;
    min-width: 200px;
    background-color: white;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
  }

  .cardContent {
    padding: 24px;
    flex: 1;
  }

  .cardTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .section {
    margin-bottom: 16px;
  }

  .sectionTitle {
    font-size: 12px;
    font-weight: 600;
    color: black;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .ingredientList {
    list-style: none;
    padding: 0;
  }

  .ingredientItem {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .instructions {
    font-size: 14px;
    line-height: 1.6;
  }

  .cardActions {
    display: flex;
    align-items: end;
    padding: 24px;

  }

  .addButton {
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    white-space: nowrap;
  }

  .addButtonPrimary {
    background-color: black;
    color: white;
  }

  .addButtonPrimary:hover:not(:disabled) {
    opacity: 0.9;
  }

  .addButtonSecondary {
    background-color: white;
    color: black;
  }

  .addButton:disabled {
    cursor: not-allowed;
  }
`;
