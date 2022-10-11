export const Home = () => {
  return (
    <div className="home__container">
      <nav>
        <img src="https://i.ibb.co/fGG0BZz/lucaschirone.png"
        alt="user"
        width="150px"
        height="auto"
        />
      </nav>

      <div className="home__links-social">
        <div className="home__links-social-networks">
          <a href="https://wa.me/5493513512224" target="_blank">
            <i className="fab fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <div className="home__links-social-networks">
          <a href="https://www.linkedin.com/in/lchirione/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="home__links-social-networks">
          <a
            href="mailto:lchirione@gmail.com"
            target="_blank"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="home__container-elements animate__animated animate__slideInUp">
        <div className="home__title">
          <h2>
            Hola, soy <br /> <span>Lucas Chirione</span> <br /> Full Stack Web Developer
          </h2>
        </div>

        <div className="home__button-cv">
          <button type="">
            <a
              href="https://drive.google.com/file/d/1PsJiY6VdVohxhjUcthLqRgakRjqewz4E/view?usp=sharing"
              download="CV-LucasChirione.pdf"
              target="_blank"
            >
              Descargar CV
            </a>
          </button>
        </div>
      </div>
      <div className="home__img animate__animated animate__slideInUp">
        <div className="home__circle">
          <img
            src="https://i.ibb.co/M9qsMct/user.png"
            alt="user"
            width="150px"
            height="150px"
          />
        </div>
      </div>
    </div>
  );
};
