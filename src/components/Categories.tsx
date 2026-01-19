const categories = [
  { title: "Protección personal", desc: "Guantes, mascarillas, batas, gorros.", chip: "PPE" },
  { title: "Material desechable", desc: "Jeringas, gasas, campos, aplicadores.", chip: "Desechables" },
  { title: "Limpieza y desinfección", desc: "Alcohol, soluciones, dispensadores.", chip: "Higiene" },
  { title: "Equipos básicos", desc: "Termómetros, tensiómetros, oxímetros.", chip: "Equipos" },
];

export function Categories() {
  return (
    <section className="section section--alt" id="productos">
      <div className="container">
        <div className="sectionHead">
          <h2>Categorías principales</h2>
          <p>Organiza tu compra y encuentra rápido lo que necesitas.</p>
        </div>

        <div className="catGrid">
          {categories.map((c) => (
            <div className="cat" key={c.title}>
              <div className="cat__top">
                <span className="chip">{c.chip}</span>
                <span className="cat__arrow" aria-hidden="true">→</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <button className="linkBtn">Ver productos</button>
            </div>
          ))}
        </div>

        <section className="about" id="nosotros">
          <div className="about__box">
            <h3>Nosotros</h3>
            <p>
              Somos una empresa de prueba “WorldSupply” enfocada en distribución de insumos médicos.
              Este sitio es una propuesta más moderna: navegación clara, CTA visibles y diseño limpio.
            </p>
            <ul className="checkList">
              <li>✅ Enfoque en conversión (cotización)</li>
              <li>✅ Responsive (móvil/tablet/escritorio)</li>
              <li>✅ Componentes reutilizables</li>
            </ul>
          </div>

          <div className="about__panel">
            <div className="stat">
              <div className="stat__n">2009</div>
              <div className="stat__t">Experiencia (referencial)</div>
            </div>
            <div className="stat">
              <div className="stat__n">+500</div>
              <div className="stat__t">Clientes (demo)</div>
            </div>
            <div className="stat">
              <div className="stat__n">Nacional</div>
              <div className="stat__t">Cobertura (demo)</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
