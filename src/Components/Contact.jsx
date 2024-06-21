import { LiaTelegram } from "react-icons/lia";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-center">
        <div className="telegram-icon">
          <LiaTelegram />
        </div>
        <h2 className="heading-two">get in touch!</h2>
        <p className="paragraph">
          Whether you have an idea for a project or just want to chat,<br></br>
          feel free to shoot me an email!
        </p>
        <a className="btn" href="mailto:rameshhains@gmail.com">
          say hello
        </a>
      </div>
    </section>
  );
};
export default Contact;
