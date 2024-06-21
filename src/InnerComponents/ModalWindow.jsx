import { useEffect, memo } from "react";
import { IoClose } from "react-icons/io5";

const ModalWindow = ({ selectedProject, openModal, closeModal }) => {
  const { title, projectType, img, description, gitLink, liveSite } =
    selectedProject;

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <div className={openModal ? "modal open-modal" : "modal close-modal"}>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <h4>{projectType}</h4>
          <div className="close-icon" onClick={closeModal}>
            <IoClose />
          </div>
        </div>
        <img src={img} alt={title} width="200px" />
        <p>{description}</p>
        <div className="btn-container">
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Site
          </a>
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Source
          </a>
        </div>
        <div className="modal-footer">
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalWindow);
