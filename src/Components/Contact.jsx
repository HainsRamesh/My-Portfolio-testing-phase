import Form from "../CustomComponents/Form";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-center">
        <div className="text-content">
          <h2>
            Let's discuss
            <br />
            on something <span className="cool-pink">cool</span> together
          </h2>
        </div>
        <Form />
      </div>
    </section>
  );
};
export default Contact;
