import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Main</Link>
      <Link
        to={{
          pathname: "/about", // При клике отправляет на страницу about и в пропсы при клике передаёт в state 'fromLocation: true'
          state: { // Эти state принимает компонент About в свои props
            fromLocation: true,
          },
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
