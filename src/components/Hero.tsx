export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="pill">Insumos médicos • Distribución nacional</p>
          <h1>
            Insumos médicos <span>confiables</span> para tu clínica y tu equipo
          </h1>
          <p className="lead">
            WorldSupply abastece centros de salud con productos de calidad, entregas rápidas
            y atención personalizada.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#productos">
              Ver catálogo
            </a>
            <a className="btn btn--ghost" href="#contacto">
              Hablar con un asesor
            </a>
          </div>

          <div className="hero__mini">
            <div className="miniCard">
              <div className="miniCard__kpi">+200</div>
              <div className="miniCard__txt">Productos disponibles</div>
            </div>
            <div className="miniCard">
              <div className="miniCard__kpi">24–48h</div>
              <div className="miniCard__txt">Entrega en principales ciudades</div>
            </div>
            <div className="miniCard">
              <div className="miniCard__kpi">Soporte</div>
              <div className="miniCard__txt">Asesoría para compras</div>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="glassCard">
            <div className="glassCard__title">Pedido rápido</div>
            <div className="glassCard__row">
              <span>Guantes nitrilo</span>
              <span className="tag">En stock</span>
            </div>
            <div className="glassCard__row">
              <span>Mascarillas</span>
              <span className="tag tag--warn">Alta rotación</span>
            </div>
            <div className="glassCard__row">
              <span>Jeringas</span>
              <span className="tag">En stock</span>
            </div>
            <button className="btn btn--primary btn--full">Solicitar cotización</button>
          </div>

          <div className="blob blob--a" />
          <div className="blob blob--b" />
        </div>
      </div>
    </section>
  );
}
