const items = [
  { title: "Calidad verificada", desc: "Marcas y materiales confiables." },
  { title: "Atención humana", desc: "Te asesoramos según tu necesidad." },
  { title: "Entrega eficiente", desc: "Logística planificada y seguimiento." },
  { title: "Compras simples", desc: "Cotiza rápido y sin complicaciones." },
];

export function TrustBar() {
  return (
    <section className="trust">
      <div className="container trust__grid">
        {items.map((it) => (
          <div className="trust__item" key={it.title}>
            <div className="trust__dot" />
            <div>
              <div className="trust__title">{it.title}</div>
              <div className="trust__desc">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
