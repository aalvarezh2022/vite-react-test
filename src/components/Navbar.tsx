import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="brand" href="#" aria-label="WorldSupply Home">
          <span className="brand__mark">WS</span>
          <span className="brand__text">
            World<span>Supply</span>
          </span>
        </a>

        <div className="nav__search" role="search">
          <input
            aria-label="Buscar productos"
            placeholder="Buscar productos (guantes, mascarillas, jeringas...)"
          />
          <button className="iconBtn" aria-label="Buscar">
            🔎
          </button>
        </div>

        <button
          className="burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "isOpen" : ""}`}>
          <button onClick={() => navTo("nosotros")}>Nosotros</button>
          <button onClick={() => navTo("servicios")}>Servicios</button>
          <button onClick={() => navTo("productos")}>Productos</button>
          <button onClick={() => navTo("contacto")}>Contacto</button>
          <a className="btn btn--primary" href="#contacto" onClick={(e) => { e.preventDefault(); navTo("contacto"); }}>
            Cotizar ahora
          </a>
        </nav>
      </div>
    </header>
  );
}
