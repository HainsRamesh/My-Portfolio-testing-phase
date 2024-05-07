import { nanoid } from "nanoid";
import { AiFillInstagram } from "react-icons/ai";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import TaskAideImg from "./assets/Images/taskaide.png";
import UnsplashImage from "./assets/Images/unsplashimage.png";

export const NavLinks = [
  {
    id: nanoid(),
    name: "home",
    url: "banner",
  },
  {
    id: nanoid(),
    name: "about",
    url: "about",
  },
  {
    id: nanoid(),
    name: "projects",
    url: "projects",
  },
  {
    id: nanoid(),
    name: "contact",
    url: "contact",
  },
];

export const socialLinks = [
  {
    id: nanoid(),
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/___hains____?igsh=emFoejl2M3VranBi",
  },
  {
    id: nanoid(),
    icon: <PiGithubLogoFill />,
    link: "https://github.com/HainsRamesh",
  },
  {
    id: nanoid(),
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/hains-ramesh-35a014213/",
  },
  {
    id: nanoid(),
    icon: <SiNetlify />,
    link: "https://app.netlify.com/teams/rameshhains/overview",
  },
];

export const cardLists = [
  {
    id: 1,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 2,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 3,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 4,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 5,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 6,
    img: TaskAideImg,
    title: "Task Aide",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 7,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 8,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 9,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 10,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 11,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
  {
    id: 12,
    img: TaskAideImg,
    title: "Task Aide",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam fugit ipsa similique fuga.",
    gitLink: "https://github.com/HainsRamesh/Task-Aide",
    liveSite: "https://task-aide.netlify.app/",
  },
];

export const responsiveData = [
  {
    breakpoint: 4000,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 1154,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 4,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 512,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 4,
      swipeToSlide: true,
    },
  },
];

export const formLinks = [
  {
    id: nanoid(),
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100008525531448",
  },
  {
    id: nanoid(),
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/___hains____?igsh=emFoejl2M3VranBi",
  },
  {
    id: nanoid(),
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/hains-ramesh-35a014213/",
  },
];

export const footerLinks = [
  {
    id: nanoid(),
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/___hains____?igsh=emFoejl2M3VranBi",
  },
  {
    id: nanoid(),
    icon: <PiGithubLogoFill />,
    link: "https://github.com/HainsRamesh",
  },
  {
    id: nanoid(),
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/hains-ramesh-35a014213/",
  },
  {
    id: nanoid(),
    icon: <SiNetlify />,
    link: "https://app.netlify.com/teams/rameshhains/overview",
  },
];
