import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  linkedin,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Our Services",
    url: "/services",
  },
  /* {
    id: "2",
    title: "About us",
    url: "/aboutus",
  }, */
  {
    id: "3",
    title: "Contact us",
    url: "/contact",
  },
  {
    id: "4",
    title: "Portfolio",
    url: "/portfolio",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Game Web Development",
  "Blockchain Solutions",
  "3D Modeling",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];
export const roadmap = [
  {
    id: "0",
    title: "Blockchain Development",
    text: "Integrate blockchain technology to enhance security and transparency for all transactions and data exchanges.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "3D Modeling",
    text: "Improve our 3D modeling tools to provide more realistic and detailed visualizations for our clients.",
    date: "June 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Custom Game Development",
    text: "Develop customizable game templates that allow clients to tailor games to their specific needs and preferences.",
    date: "July 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API Integrations",
    text: "Expand our API integrations to include more external services, enhancing the functionality and versatility of our solutions.",
    date: "August 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Harnessing advanced technology and strong security, it's the perfect solution for businesses striving for excellence.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];
export const benefits = [
  {
    id: "0",
    title: "Comprehensive Solutions",
    text: "Offering a full range of services from game development to blockchain integration, ensuring all your tech needs are met.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Innovative Technology",
    text: "Utilizing the latest advancements in technology to deliver cutting-edge solutions for your business.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Global Connectivity",
    text: "Enabling seamless connectivity and collaboration from anywhere in the world with our robust technology infrastructure.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Rapid Development",
    text: "Delivering fast and efficient development services to ensure your projects are completed on time and to the highest standard.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Expert Guidance",
    text: "Providing expert advice and support throughout your project to help you achieve your goals and maximize your ROI.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Continuous Improvement",
    text: "Committed to ongoing innovation and improvement to keep your business at the forefront of technology.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discordapp.com/users/radocash",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/RadolyTech?s=09",
  },

  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/Sunhisong",
  },
  {
    id: "4",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/radolytech",
  },
];
