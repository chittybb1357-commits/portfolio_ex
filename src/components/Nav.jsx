import { memo } from "react";
import "./Nav.css";

const Nav = memo(function Nav({ id, data, onChangeMode }) {
  const lists = data.map(d => (
    <li key={d.id} className="nav-item">
      <button
        type="button"
        className={`btn ${d.id === id ? "btn-dark active" : "btn-outline-dark"}`}
        style={{
          margin: "0 5px",
          cursor: "pointer",
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
      <ul className="menu nav">{lists}</ul>
    </nav>
  );
});

export default Nav;
