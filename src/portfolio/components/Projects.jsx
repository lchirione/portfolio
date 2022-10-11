export const Projects = () => {
  const styleWmovies = {
    backgroundImage: `url("https://i.ibb.co/7Nq485Z/wmovies.webp")`,
  };
  const styleMovetrack = {
    backgroundImage: `url("https://i.ibb.co/qgzKgq0/d530fea0-5b2f-4102-83fb-244f471dd518.gif")`,
  };
  const styleJournal = {
    backgroundImage: `url("https://i.ibb.co/jT4PRhz/journal-App.png")`,
  };

  const styleSmaki = {
    backgroundImage: `url("https://i.ibb.co/F87wfKJ/site.png")`,
  };

  const styleLacasona = {
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60lEG9ODcg1xGA9j88VTaAjU6gZh0-KURZw&usqp=CAU")`,
  };

  return (
    <div className="container-secction animate__animated animate__slideInUp">
      <h1 className="title">Proyectos</h1>

      <div className="projects__container">
        <div className="projects__card">
          {" "}
          {/* project card */}
          <div className="projects__card-img">
            {" "}
            {/* project card img */}
            <div className="wmovies" style={styleMovetrack}></div>
          </div>
          <div className="projects__card-info">
            {" "}
            {/* project card info */}
            <h2>Movtrack</h2>
            <p className="card-info-p">
              Proyecto personal de plataforma y app móvil para seguimiento GPS online.
            </p>
            <div className="card-info-tech">
              {" "}
              {/* project card info tech */}
              <p>tecnologias utilizadas: </p>
              <span>React</span> <span>Redux</span>
              <span>MySql</span> <span>JAVA</span>
              <span>Firebase</span>
            </div>
            <div className="projects__buttons">
              <a href="https://movtrack.net" target="_blank">
                <i className="fas fa-window-maximize"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="projects__card">
          {" "}
          {/* project card */}
          <div className="projects__card-img">
            {" "}
            {/* project card img */}
            <div className="wmovies" style={styleWmovies}></div>
          </div>
          <div className="projects__card-info">
            {" "}
            {/* project card info */}
            <h2>WhatsMovie</h2>
            <p className="card-info-p">
              Web con información sobre películas y programas de TV.
              <br/>Usando<span> themoviedb</span> api.
            </p>
            <div className="card-info-tech">
              {" "}
              {/* project card info tech */}
              <p>tecnologias utilizadas: </p>
              <span>React</span> <span>Redux</span>
              <span>Sass</span> <span>API</span>
            </div>
            <div className="projects__buttons">
              <a href="https://whatsmovie.netlify.app/" target="_blank">
                <i className="fas fa-window-maximize"></i>
              </a>

              <a href="https://github.com/lchirione/whatsmovie.git" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="projects__card">
          {" "}
          {/* project card */}
          <div className="projects__card-img">
            {" "}
            {/* project card img */}
            <div className="wmovies" style={styleLacasona}></div>
          </div>
          <div className="projects__card-info">
            {" "}
            {/* project card info */}
            <h2>La Casona</h2>
            <p className="card-info-p">
              Web realizada con el patrón de diseño MVC. 
              <br/>La cual simula una app de restaurant capaz de llevar 
              <br/>la gestión de los pedidos, estadio de preparación, 
              <br/>generación de ticket, cierre de caja e historial de operaciones. 
            </p>
            <div className="card-info-tech">
              {" "}
              {/* project card info tech */}
              <p>tecnologias utilizadas: </p>
              <span>Handlebars</span> <span>NodeJS</span>
              <span>ExpressJS</span> <span>Mongodb</span> 
            </div>
            <div className="projects__buttons">
              <a href="https://www.heroku.com/lacasona" target="_blank">
                <i className="fas fa-window-maximize"></i>
              </a>

              <a href="https://github.com/lchirione/LaCasona.git" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="projects__card">
          {" "}
          {/* project card */}
          <div className="projects__card-img">
            {" "}
            {/* project card img */}
            <div className="wmovies" style={styleJournal}></div>
          </div>
          <div className="projects__card-info">
            {" "}
            {/* project card info */}
            <h2>Notes App</h2>
            <p className="card-info-p">
              Aplicacion para crear y almacenar notas
            </p>
            <div className="card-info-tech">
              {" "}
              {/* project card info tech */}
              <p>tecnologias utilizadas: </p>
              <span>React</span> <span>Redux</span>
              <span>Firebase</span> <span>Material UI</span>
            </div>
            <div className="projects__buttons">
              <a href="https://noteapp-lc.netlify.app/" target="_blank">
                <i className="fas fa-window-maximize"></i>
              </a>

              <a
                href="https://github.com/lchirione/notesapp.git"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="projects__card">
          {" "}
          {/* project card */}
          <div className="projects__card-img">
            {" "}
            {/* project card img */}
            <div className="wmovies" style={styleSmaki}></div>
          </div>
          <div className="projects__card-info">
            {" "}
            {/* project card info */}
            <h2>Smaki</h2>
            <p className="card-info-p">
              Ecommerce el cual simula una tienda de venta de comida
            </p>
            <div className="card-info-tech">
              {" "}
              {/* project card info tech */}
              <p>tecnologias utilizadas: </p>
              <span>JavaScript</span> <span>HTML</span>
              <span>CSS</span> <span>Bootstrap</span>
            </div>
            <div className="projects__buttons">
              <a href="https://smaki.netlify.app/" target="_blank">
                <i className="fas fa-window-maximize"></i>
              </a>

              <a
                href="https://github.com/lchirione/Smaki.git"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
