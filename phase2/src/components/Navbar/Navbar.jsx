import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ onFilterChange, title }) {
  const [isActive, setIsActive] = useState("all");

  return (
    <nav>
      <h1>{title.toUpperCase()}</h1>
      <section id="filter-btns">
        <div className="container">
          <button
            onClick={() => {
              onFilterChange("all");
              setIsActive("all");
            }}
            className={isActive === "all" ? "active" : ""}
          >
            ALL
          </button>
          <button
            onClick={() => {
              onFilterChange("Rolex");
              setIsActive("Rolex");
            }}
            className={isActive === "Rolex" ? "active" : ""}
          >
            Rolex
          </button>
          <button
            onClick={() => {
              onFilterChange("Casio");
              setIsActive("Casio");
            }}
            className={isActive === "Casio" ? "active" : ""}
          >
            Casio
          </button>
          <button
            onClick={() => {
              onFilterChange("Citizen");
              setIsActive("Citizen");
            }}
            className={isActive === "Citizen" ? "active" : ""}
          >
            Citizen
          </button>
        </div>
      </section>
    </nav>
  );
}
