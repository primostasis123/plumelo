import { css } from "lit";

export const searchBarStyles = css`
  .form {
    margin-bottom: 32px;
  }

  .searchContainer {
    display: flex;
    gap: 8px;
    flex-direction: row;
  }

  .inputWrapper {
    position: relative;
    flex: 1;
  }

  .input {
    width: 100%;
    height: 48px;
    padding: 0 24px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
    color: black;
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
  }

  .input:focus {
    outline: 2px solid black;
    outline-offset: 2px;
  }

  .button {
    height: 48px;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 500;
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .button:hover:not(:disabled) {
    opacity: 0.9;
  }

  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
