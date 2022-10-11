export const Services = () => {
  return (
    <div className="services__container animate__animated animate__slideInUp">
      <h1 className="title">Servicios</h1>

      <div className="services__container-info">
        <h2>
          Puedo desarrollar interfaces de usuario altamente intuitivas con diseños únicos.
        </h2>

        <div className="services__container-card">
          <div className="services__card">
            <i className="fas fa-lightbulb"></i>
            <h3>Páginas web dinámicas y estáticas</h3>
          </div>

          <div className="services__card">
            <i className="fas fa-disease"></i>
            <h3>Aplicaciones web</h3>
          </div>

          <div className="services__card">
            <i className="fas fa-cogs"></i>
            <h3>Mantenimiento de paginas web</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
