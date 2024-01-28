import {
    mobile,
    backend,
    creator,
    web,
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
    orange,
    antic,
    vodafone,
    filparty,
    carrent,
    jobit,
    tripguide,
    threejs,
    businessCard,
    hoobank,
    ohvaz,
    realtor,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Product Designer",
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
      title: "PHP Developer",
      company_name: "Orange Cameroun",
      icon: orange,
      iconBg: "#383E56",
      date: "Jun 2015 - Sep 2015",
      points: [
        "Pioneered a PHP-based web tool revolutionizing field operations' ticketing system.",
        "Introduced features that streamlined ticket processes and boosted overall efficiency.",
        "Optimized workforce deployment, cutting operational costs.",
        "Improved customer experience with prompt issue resolution.",
        "Monitored KPIs, showcasing increased customer satisfaction levels.",
      ],
    },
    {
      title: "Android & PHP Developer",
      company_name: "ANTIC Cameroun",
      icon: antic,
      iconBg: "#E6DEDD",
      date: "Feb 2016 - Jul 2016",
      points: [
        "Developed Android and Web Apps to establish a robust framework for verifying Mobile Operators' Quality of Services.",
        "Enabled users to assess service quality seamlessly through mobile and desktop platforms.",
        "Enabled stakeholders to make informed decisions based on accurate and real-time data.",
        "Implemented tools that offer actionable insights to Mobile Operators for strategic service quality improvements.",
        "Contributed to the enhancement of overall user experience and satisfaction.",
      ],
    },
    {
      title: "MEAN Stack & Python Developer",
      company_name: "Vodafone Cameroun",
      icon: vodafone,
      iconBg: "#383E56",
      date: "Jan 2017 - Dec 2017",
      points: [
        "Co-created RANALYZER, a real-time monitoring tool for Vodafone Cameroon's network sites.",
        "Streamlined data handling processes, improving efficiency in information extraction.",
        "Enhanced decision-making by providing immediate insights into network performance.",
        "Programmed scripts for automated and efficient processing of Core Network data.",
        "Contributed to the seamless integration of data analytics into the network management workflow.",
      ],
    },
    {
      title: "Web3 & Blockchain Developer",
      company_name: "Filparty",
      icon: filparty,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Collaborated with a team to successfully implement a layer-2 blockchain on the Ethereum network.",
        "Enhanced scalability and efficiency for decentralized applications.",
        "Developed and implemented faucets to provide easy access to tokens for contributors.",
        "Orchestrated airdrop campaigns to distribute tokens to community members.",
        "Strengthened community engagement and fostered a sense of inclusivity among contributors."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Joseph proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Joseph does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Joseph optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HooBank",
      description:
        "A web-based platform offering a streamlined solution for financial transactions, providing users with efficient and user-friendly tools for managing their banking needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-router",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/JoesephEgbenchong/hoobank-jsmastery",
    },
    {
      name: "Business Card",
      description:
        "A business card crafted through the execution of BigDevSoon's Junior Frontend Coding Challenge, showcasing polished representation of your professional identity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-animated",
          color: "pink-text-gradient",
        },
      ],
      image: businessCard,
      source_code_link: "https://github.com/JoesephEgbenchong/business-card",
    },
    {
      name: "Ohvaz Clone",
      description:
        "A web-based realization of the optimized version of a Romanian website, meticulously crafted based on the Figma design, ensuring a seamless and enhanced online experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "react-router",
          color: "pink-text-gradient",
        },
      ],
      image: ohvaz,
      source_code_link: "https://github.com/JoesephEgbenchong/ohvaz-clone-react",
    },
    {
      name: "Realtor clone react",
      description:
        "A a web-based implementation of a realtor website, to seamlessly manage house listings and facilitate the process of renting or purchasing real estate properties.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: realtor,
      source_code_link: "https://github.com/JoesephEgbenchong/realtor-clone-react",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };