import { FaTelegramPlane } from "react-icons/fa";
import IconLinks from "./IconLinks";
import { formLinks } from "../Data";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    e.currentTarget.reset();
    console.log(newUser);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="input"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="input"
      />
      <textarea
        name="comment"
        id="comment"
        placeholder="Your message"
        required
        className="text-area input"
        wrap="off"
      ></textarea>
      <button type="submit" className="form-btn">
        <span className="icon">
          <FaTelegramPlane />
        </span>
        <span className="text">submit</span>
      </button>
      <ul className="links contact-links">
        <IconLinks links={formLinks} />
      </ul>
    </form>
  );
};
export default Form;
