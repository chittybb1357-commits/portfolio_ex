import { memo } from "react";

const Nav = memo(function Nav({ id, data, onChangeMode }) {
  const lists = data.map(d => (
    <li key={d.id} className="nav-item">
      {/* 💡 변경 포인트 3: a 태그 대신 button형태로 변경하여 접근성을 개선했습니다. */}
      <button
        type="button"
        className={`nav-link ${d.id === id ? "active" : ""}`}
        style={{
          background: "none",
          border: "none",
          textAlign: "left",
          width: "100%",
          cursor: "pointer",
          padding: "8px 16px",
        }}
        onClick={() => {
          onChangeMode(d.id);
        }}
      >
        {d.title}
      </button>
    </li>
  ));

  return (
    <nav>
      <ul className="nav flex-column nav-pills">{lists}</ul>
    </nav>
  );
});

export default Nav;
