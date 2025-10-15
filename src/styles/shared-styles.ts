import { css, type CSSResultGroup } from 'lit';

export const sharedStyles: CSSResultGroup = css`
.container {
  min-height: 100vh;
  background-color: white;
}

.header {
  border-bottom: 1px solid black;
}

.headerContent {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
}

.headerTitle {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  width: 32px;
  height: 32px;
}

.title {
  font-size: 30px;
  font-weight: bold;
}

.subtitle {
  margin-top: 8px;
  color: black;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}

.layout {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.content {
  flex: 1;
}

.sidebar {
  width: 100%;
}

@media (min-width: 1024px) {
  .layout {
    flex-direction: row;
  }

  .sidebar {
    width: 384px;
  }
}
`;

