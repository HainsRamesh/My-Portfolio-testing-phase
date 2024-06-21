import { useState } from "react";
import { memo } from "react";
import useFetchData from "../CustomComponents/useFetchData";
import ModalWindow from "../InnerComponents/ModalWindow";
import Card from "../InnerComponents/Card";
import { hashCodes } from "../Data";
import { Blurhash } from "react-blurhash";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({});
  const { isLoading, projectData } = useFetchData();

  const handleClick = (card) => {
    setSelectedProject(card);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const projectList = projectData.map((project) => (
    <Card {...project} key={project.id} handleClick={handleClick} />
  ));

  const BlurHashList = hashCodes.map(({ id, hash }) => {
    return (
      <div className="blur-hash-loader" key={id}>
        <Blurhash
          width={500}
          height={190}
          hash={hash}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="blur-hash"
        />
      </div>
    );
  });

  return (
    <section id="projects" className="projects">
      <div className="section-center">
        <h2 className="heading-two">what i've done</h2>
        <p className="paragraph">more coming soon...</p>
        {isLoading ? (
          <div className="card-container">{BlurHashList}</div>
        ) : (
          <>
            <div className="card-container">{projectList}</div>
            <ModalWindow
              selectedProject={selectedProject}
              openModal={openModal}
              closeModal={closeModal}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default memo(Projects);
