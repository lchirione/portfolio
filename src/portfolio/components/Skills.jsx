export const Skills = () => {
  const styleFront = {
    backgroundImage: `url("https://i.ibb.co/xmvtJZG/1.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  const styleBack = {
    backgroundImage: `url("https://i.ibb.co/gVtyvTd/2.jpg")`,
  };

  return (
    <div className="container-section animate__animated animate__slideInUp">
      <div className="skills__container">
        <section className="section-frontend" style={styleFront}>
          <h3>Tecnologias</h3>
          <div className="section-skills">
            <h4>
              <i className="fas fa-check-circle"></i> HTML - Javascript - CSS - SASS
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Bootstrap
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> React - Redux - Hooks
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> NodeJS - Express
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Python
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> WordPress - WooCommerce
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Git - GitHub
            </h4>
          </div>
        </section>

        <section className="section-backend" style={styleBack}>
          <h3>Cloud</h3>
          <div className="section-skills">
            <h4>
              <i className="fas fa-check-circle"></i> Google Cloud
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> AWS
            </h4>
            <h3>Base de datos</h3>
            <h4>
              <i className="fas fa-check-circle"></i> MySQL
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Mongodb
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Firebase
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};
