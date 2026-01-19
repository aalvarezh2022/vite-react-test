export function CTA() {
  return (
    <section className="cta" id="contacto">
      <div className="container cta__grid">
        <div>
          <h2>¿Listo para cotizar?</h2>
          <p>
            Déjanos tus datos y te contactamos. También puedes pedir una lista rápida
            de productos según tu necesidad.
          </p>

          <div className="cta__badges">
            <span className="badge">Respuesta rápida</span>
            <span className="badge">Atención personalizada</span>
            <span className="badge">Compras por volumen</span>
          </div>
        </div>

        <form className="formCard" onSubmit={(e) => e.preventDefault()}>
          <label>
            Nombre
            <input placeholder="Tu nombre" />
          </label>
          <label>
            Empresa / Clínica
            <input placeholder="Nombre de tu empresa" />
          </label>
          <label>
            WhatsApp o Email
            <input placeholder="+58 ... / correo@dominio.com" />
          </label>
          <label>
            ¿Qué necesitas?
            <textarea placeholder="Ej: guantes nitrilo talla M, mascarillas, jeringas..." rows={4} />
          </label>

          <button className="btn btn--primary btn--full" type="submit">
            Enviar solicitud
          </button>

          <p className="fine">
            * Demo: este formulario no envía datos todavía. Luego lo conectamos a Email/WhatsApp/API.
          </p>
        </form>
      </div>
    </section>
  );
}
