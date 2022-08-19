import { useState } from "react";
import { isEmail } from "validator";

export const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [valor, setValor] = useState("");

  const { name, email, message } = formValues;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validEmail = isEmail(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //todo: mejorar validacion de email
    if (name === "" || !validEmail || message === "") {
      return;
    }

    try {
      const send = await fetch(
        "https://formsubmit.co/ajax/lchirione@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        }
      );

      const res = await send.json();

      setFormValues(initialValues);

      setValor("send");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-secction animate__animated animate__slideInUp">
      <div className="header-title">
        <h1 className="title">Contactame</h1>
      </div>

      <div className="container-contact">
        <div className="sidebar">
          
          <div className="sidebar-card">
            <i className="fas fa-envelope"></i>
            <p className="sidebar-card-title">Email</p>
            <p className="sidebar-card-info">lchirione@gmail.com</p>
            <a
              href="mailto:lchirione@gmail.com"
              target="_blank"
            >
              Escribime <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="sidebar-card">
            <i className="fab fa-linkedin"></i>
            <p className="sidebar-card-title">LinkedIn</p>
            <p className="sidebar-card-info">linkedin.com/in/lchirione/</p>
            <a href="https://www.linkedin.com/in/lchirione/" target="_blank">
              Escribeme <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="sidebar-card">
            <i className="fab fa-brands fa-whatsapp"></i>
            <p className="sidebar-card-title">WhatsApp</p>
            <p className="sidebar-card-info">
            
            </p>
            <a
              href="https://wa.me/5493513512224"
              target="_blank"
              referrer="noreferrer"
            >
              Escribeme <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="form-contact">
          <h3>Comentame en que puedo ayudarte</h3>
          <form
            action="https://formsubmit.co/lchirione@gmail.com"
            method="POST"
          >
            <input
              type="text"
              placeholder="Escribe tu nombre"
              name="name"
              id="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              placeholder="Escribe tu Email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
              required
            />

            <textarea
              type="text"
              placeholder="Ahora tu consulta"
              name="message"
              id="message"
              autoComplete="off"
              value={message}
              onChange={handleInputChange}
              required
            />

            {/*//TODO: cambiar el color al enviar los datos */}
            <button className={valor} onClick={(e) => handleSubmit(e)}>
              {valor != "send" ? (
                "send"
              ) : (
                <span>
                  Mensaje enviado<i className="fa-solid fa-paper-plane"></i>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
