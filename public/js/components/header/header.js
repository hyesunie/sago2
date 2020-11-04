export function Header() {}

Header.prototype = {
  getBody() {
    return `
      <h1>사고뭉치 프로젝트</h1>
    `;
  },
};
