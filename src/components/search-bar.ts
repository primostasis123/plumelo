// src/components/search-bar.ts
import { component, html, useState } from '@pionjs/pion';
import { searchBarStyles } from '../styles/search-bar-styles';

function SearchBar(this: HTMLElement) {
  const [query, setQuery] = useState('');

  const onSubmit = (e: Event) => {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('search', {
      detail: { query: query.trim() },
      bubbles: true,
      composed: true,
    }));
  };

  return html`
    <style>${searchBarStyles}</style>
    <form class="form" @submit=${onSubmit}>
      <div class="searchContainer">
        <input
          class="input"
          type="text"
          placeholder="Search for cocktails..."
          .value=${query}
          @input=${(e: Event) => setQuery((e.target as HTMLInputElement).value)}
        />
        <button type="submit" class="button">Search</button>
      </div>
    </form>
  `;
}

customElements.define('search-bar', component(SearchBar));
