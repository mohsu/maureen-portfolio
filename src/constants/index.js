import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  python,
  go,
  scala,
  aws,
  gcp,
  azure,
  kubernetes,
  mysql,
  houzz,
  neutec,
  rubrik,
  courseapi
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
    title: "Backend System Architecture Design",
    icon: backend,
  },
  {
    title: "API Development & Integration",
    icon: web,
  },
  {
    title: "Database Design & Management",
    icon: mobile,
  },
  {
    title: "Cloud Infrastructure Setup & Optimization",
    icon: creator,
  }
];

const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Scala",
    icon: scala,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Machine Learning Engineer",
    company_name: "Neutec Inc.",
    icon: neutec,
    iconBg: "#383E56",
    date: "July 2017 – March 2019",
    points: [
      "Collected 10 million transaction data by Python and performed time series analysis by XGBoost and R to explore/analyze customer behavior.",
      "Built live transaction data query website to provide stakeholders transaction data visualization and interactive interface to search suspicious records of transaction by Django and JQuery.",
    ],
  },
  {
    title: "Senior Machine Learning Engineer",
    company_name: "Neutec Inc.",
    icon: neutec,
    iconBg: "#383E56",
    date: "April 2019 – March 2021",
    points: [
      "Employed cluster and CNN to provide real-time image recognition by using Tensorflow, Tensorflow-Serving, and FastAPI, and the service detected cards dealt on the table with 99.99% accuracy.",
      "Created a web-based management system to monitor results and adjust parameters by Django.",
      "Ensured system’s reliability by adopting HA structure for load balance and prevent unscheduled downtime.",
      "Led automatic dice fairness testing with programmers and statistics team; provided image recognition service (API) with YOLO.",
    ],
  },
  {
    title: "Senior Software Engineer, Machine Learning",
    company_name: "Houzz Inc.",
    icon: houzz,
    iconBg: "#f7f3f2",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Created syncing flows between chat messages on CRM messages and home professionals’ gmail with Google Cloud API, PHP, MySQL and Docker.",
      "Employed BERT to classify semantic meaning of online chat between homeowners and professionals and generated proper response prompt based on the content detected; deployed models on AWS.",
      "Doubled the amount of sales by building the data cleansing and scraping system for crawling home professionals from 30+ websites with Scrapy."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Rubrik Inc.",
    icon: rubrik,
    iconBg: "#f7f3f2",
    date: "May 2023 – Aug 2023",
    points: [
      "Enhanced security of Cluster Cloud Elastic Storage by introducing key-less authentication using Azure Managed Identity, reducing potential access vulnerabilities.",
      "Streamlined existing cluster workflows by integrating robust health checks, ensuring consistent uptime during the transition.",
      "Automated authentication for every new Azure CC-ES cluster setup, guaranteeing secure connections from the outset and minimizing manual configuration.",
      "Spearheaded the development of Golang and Scala backend solutions, which were integrated into 6 production APIs. Leveraged  Kubernetes for efficient orchestration and resource utilization.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Course Api Scraper",
    description:
      "Python-based project that uses Scrapy to extract data from course APIs and saves it to MongoDB. It's designed for scalability and can be scheduled for automated runs, making it ideal for consistent data collection and analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scrapy",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: courseapi,
    source_code_link: "https://github.com/Open-Edu-Tw/courseapi-scraper",
  },
];

export { services, technologies, experiences, projects };
