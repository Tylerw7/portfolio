import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Tyler Wettach — Software Developer, AI Engineer",
  author: "Tyler Wettach",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    
    { text: "LinkedIn", href: "https://www.linkedin.com/in/tyler-wettach-86264931a/" },
    { text: "Github", href: "https://github.com/Tylerw7" },
    //{ text: "Youtube", href: "https://github.com/immois/astro-zen" },
    
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alejandro Múnez",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Home Care Marketing Pros",
      position: "Digital Marketing Specialist/Developer",
      startDate: "June 2024",
      endDate: "Present",
      summary: [
        "Created an AI-powered agent using LangGraph + FastAPI that transcribes, analyzes, and rates client audio files, automatically logging results to Google Sheets for easy performance tracking.",
        "Managed and optimized WordPress websites, including page builds, performance tuning, and troubleshooting, resulting in improved site reliability and faster deployment cycles.",
        "Developed a custom internal web app using React, FastAPI, and PostgreSQL to automatically generate and manage blog content, reducing manual workload and ensuring consistent SEO output for the company site.",
        "Coordinated content and citation management, ensuring accurate listings and SEO consistency across major directories (Google, Bing, Yelp, etc.).",
        "Collaborated cross-departmentally to translate operational problems into technical solutions, integrating automation to save time and improve team efficiency."
      ],
    },

    {
      company: "Software Developer",
      position: "Software Developer",
      startDate: "May 2023",
      endDate: "Present",
      summary: [
        "AI SaaS Platform EchoText Built a subscription-based text-to-speech platform using React, Node.js, MongoDB, and OpenAI TTS models, allowing users to generate, play, and download voiceovers for videos. Integrated Stripe for automated billing and monthly letter usage tracking, enabling recurring revenue and usage-based limits",
        "Deep Learning Pipeline Flower Classifier Designed and trained a ResNet50-based PyTorch model for flower image classification. Deployed it via FastAPI backend and a React frontend interface for live image recognition demos.",
        "E-Commerce Website for an Art Company Developed a React + Node.js + MongoDB + Stripe application to sell artwork online with a smooth checkout experience, real-time order tracking, and admin product management tools.",
        "AI Web App for Business Operations Created and maintained a TypeScript + Next.js 15 frontend with a FastAPI + LangGraph backend, offering clients conversational AI tools and custom workflow automation."
      ],
    },
    
    
  ],
  projects: [
    {
      name: "Customer Service RAG ChatBot/Full Website",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "http://cabinetrybywettach.com",
      linkback: "https://github.com/Tylerw7/CBW_RAG_BACKEND",
      linkfront: "https://github.com/Tylerw7/next_cbw",
      image: "/rag_chatbot.png",
      img1: "/nextjs_logo.jpeg",
      img2: "/fastapi_logo.jpg",
      img3: "/langchain_logo.png",
      img4: "/openai_logo.jpg"
    },
    {
      name: "Web App EchoText",
      summary: "SAAS, convert text or transcriptions into voice audio.",
      linkPreview: "https://echo-textai.vercel.app/",
      linkback: "https://github.com/Tylerw7/BackEnd",
      linkfront: "https://github.com/Tylerw7/texttospeech",
      image: "/echotext_screenshot.png",
      img1: "/react_logo.png",
      img2: "/node_logo.png",
      img3: "/openai_logo.jpg",
      img4: "/mongodb_logo.png"
    },
    {
      name: "E-Comerce Art Store / Admin Dashboard",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "https://precious-wettach-art.vercel.app/",
      linkback: "https://github.com/Tylerw7/PreciousArtBackEnd",
      linkfront: "https://github.com/Tylerw7/precious-art",
      image: "/precious_art_screenshot.png",
      img1: "/react_logo.png",
      img2: "/node_logo.png",
      img3: "/openai_logo.jpg",
      img4: "/mongodb_logo.png"
    },
  ],
  about: {
    description: "From a young age, I’ve been driven by curiosity and creativity, whether it was building with Legos, taking things apart to understand how they worked, or finding better ways to make ideas real. That same mindset led me from hands-on construction work and precision manufacturing as a CNC mill operator to discovering my true passion: programming. Over the past three years, I’ve immersed myself in software development, problem-solving, and continuous learning. I’ve built and deployed full-stack web applications, developed convolutional neural networks (CNNs) and large language model (LLM) systems in PyTorch, and created intelligent agents using LangChain and LangGraph. I approach every project with the same determination I had as a kid to understand, build, and refine until I’ve achieved something remarkable.",
    image: "/Tyler.png",
  },
};

// #5755ff
