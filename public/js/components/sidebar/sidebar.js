export function Sidebar() {}

Sidebar.prototype = {
  getBody() {
    return `
      <img src="/IMG/LOGO.png" width="130px" />
        <h3><a href="/">DashBoard</a></h3>
        <h3>사고대응</h3>
        <ul>
          <li><a href="/response-e1">Edge1</a></li>
          <li><a href="/response-e2">Edge2</a></li>
        </ul>

        <h3>정책변경</h3>
        <ul>
          <li><a href="/rule-e1">Edge1</a></li>
          <li><a href="/rule-e2">Edge2</a></li>
        </ul>

        <h3>로그보기</h3>
        <ul>
          <li><a href="/a-log">사고대응</a></li>
          <li><a href="/na-log">정책변경</a></li>
        </ul>
    `;
  },
};
