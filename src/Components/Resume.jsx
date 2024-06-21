import pdf from "../assets/Files/resume.pdf";

const Resume = () => {
  const openResume = () => {
    window.open(pdf, "_blank");
  };

  return (
    <section className="resume" id="resume">
      <div className="section-center flex-center">
        <h2 className="heading-two">Check out my résumé!</h2>

        <button
          onClick={openResume}
          className="resume-btn flex-center paragraph"
        >
          Grab a Copy
        </button>
      </div>
    </section>
  );
};
export default Resume;
