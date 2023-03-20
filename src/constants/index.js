import {
    cloud,
    intellij,
    creator,
    js,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    afip,
    search,
    serfim,
    epitech,
    carrent,
    jobit,
    tripguide,
    threejs,
    man,
    happy,
    joy,
} from "../assets/index.js";

export const navLinks = [
    {
        id: "about",
        title: "Activités professionnelles",
    },
    {
        id: "ppe",
        title: "PPE",
    },
    {
        id: "contact",
        title: "Veilles",
    },
];

const services = [
    {
        title: "Développeuse web",
        icon: js,
    },
    {
        title: "Débutante Cloud",
        icon: cloud,
    },
    {
        title: "IDE favoris",
        icon: intellij,
    },
    {
        title: "Mon organisation",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "En recherche d'alternance",
        company_name: "Avec vous ?",
        icon: search,
        iconBg: "#E6DEDD",
        date: "Sept 2023 - 2026",
        points: [
            "Je suis à la recherche d'une alternance me permettant d'évoluer dans les meilleurs conditions",
            "J'aimerais soit améliorer dans certaines compétences que j'ai acquises ou en acquérir des nouvelles ",
/*            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",*/
        ],
    },
    {
        title: "MCF Pro",
        company_name: "Epitech",
        icon: epitech,
        iconBg: "#E6DEDD",
        date: "Sept 2023 - 2026",
        points: [
            "Concevoir, déployer et piloter des projets digitaux au sein des systèmes d’information des entreprises.",
            "Devenir un expert technique et métier, maîtrisant les tenants et les aboutissants de sa spécialité et capable d’accompagner un projet de bout en bout",
            "Maîtriser les tenants et les aboutissants d’un rôle de manager dans la tech : gestion de projet, management, process, contrôle qualité..",
        ],
    },
    {
        title: "Développeuse application",
        company_name: "Serfim T.I.C.",
        icon: serfim,
        iconBg: "#E6DEDD",
        date: "Oct 2021 - Actuellement ",
        points: [
            "Développement d'application en javascript. J'utilise aussi par moment typescrit et vue js.",
            "J'ai eu la chance d'apprivoiser AWS. Une technologie qui m'intéresse de plus en plus",
/*            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",*/
        ],
    },
    {
        title: "BTS SIO option SLAM",
        company_name: "AFIP Formation",
        icon: afip,
        iconBg: "#E6DEDD",
        date: "Sept 2021 - Actuellement ",
        points: [
            "Développement d'applications C# , Symfony et React",
            "Cours d'introduction à la cybersécurité",
            "Ainsi qu'au notion de système et réseaux",
            "Compétences acquises : C# , PHP, React, Symfony, Python, Git, et d'autres .."


        ],
    },
];

const testimonials = [
    {
        testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis condimentum ante, eget efficitur eros scelerisque porta. ",
        name: "Lorem Lee",
        designation: "Directeur",
        company: "Inconnu",
        image: man,
    },
    {
        testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis condimentum ante, eget efficitur eros scelerisque porta. ",
        name: "Lorem Brown",
        designation: "Collègue",
        company: "Afip Formations",
        image: joy,
    },
    {
        testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis condimentum ante, eget efficitur eros scelerisque porta. ",
        name: "Lorem Wang",
        designation: "Professeur",
        company: "Afip Formations",
        image: happy,
    },
];

const projects = [
    {
        name: "Application Médicale",
        description:
            "Cette application regroupe toutes les informations relatives à un patient : ces fiches de soins, ses allergies , la liste des médicament, médecin référent, ... .",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Symfony",
                color: "green-text-gradient",
            },
            {
                name: "Scss",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Gestion de pointage",
        description:
            "Cette application permet à un salarié de saisir son pointage afin de le remettre facilement à son employeur. Elle a été crée pour une entreprise fictive : GSB ",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "Asp .Net",
                color: "green-text-gradient",
            },
            {
                name: "SqlLite",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
];

export {services, technologies, experiences, testimonials, projects};
