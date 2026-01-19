export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__mark">WS</span>
            <span className="brand__text">
              World<span>Supply</span>
            </span>
          </div>
          <p className="muted">
            Landing demo moderna para empresa de insumos médicos. Diseñada para ser clara, rápida y responsive.
          </p>
        </div>

        <div className="footer__cols">
          <div>
            <div className="footer__title">Secciones</div>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#productos">Productos</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div>
            <div className="footer__title">Contacto (demo)</div>
            <span className="muted">WhatsApp: +58 000-0000000</span>
            <span className="muted">Email: hola@worldsupply.com</span>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="muted">© {new Date().getFullYear()} WorldSupply. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
