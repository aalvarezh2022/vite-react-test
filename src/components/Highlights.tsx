const features = [
  { icon: "🧤", title: "Amplio inventario", desc: "Insumos de alto uso para clínicas, laboratorios y hospitales." },
  { icon: "📦", title: "Pedidos por volumen", desc: "Precios competitivos para mayoristas y compras recurrentes." },
  { icon: "✅", title: "Control de calidad", desc: "Productos revisados y con especificaciones claras." },
  { icon: "💬", title: "Soporte y asesoría", desc: "Te ayudamos a elegir lo correcto según tu caso." },
];

export function Highlights() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="sectionHead">
          <h2>Servicios pensados para comprar fácil</h2>
          <p>Una experiencia moderna: clara, rápida y enfocada en resolver.</p>
        </div>

        <div className="cardsGrid">
          {features.map((f) => (
            <article className="card" key={f.title}>
              <div className="card__icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
