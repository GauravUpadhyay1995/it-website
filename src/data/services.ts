export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  shape: number;
  image?: string;
  description: string;
}

export const mainServices: ServiceItem[] = [
  {
    id: "ai-tools",
    title: "Personalized\nAI tools.",
    shape: 1,
    description: "Custom AI tools tailored to your exact business workflow and data requirements.",
  },
  {
    id: "ml-deployment",
    title: "ML model\ndeployment.",
    shape: 2,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    description: "Production-grade machine learning pipelines and secure cloud infrastructure.",
  },
  {
    id: "analytics-visualization",
    title: "Analytics and\nvisualization tools.",
    shape: 3,
    description: "Real-time interactive business intelligence dashboards and predictive models.",
  },
  {
    id: "ai-software-dev",
    title: "AI-driven software\ndevelopment.",
    shape: 4,
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    description: "Next-generation web and mobile applications with embedded intelligent capabilities.",
  },
];

export const allServicesList = [
  {
    category: "Overview",
    items: [
      { name: "Digital Marketing", href: "#services" },
      { name: "Website Designing", href: "#services" },
      { name: "Website Development", href: "#services" },
      { name: "App Development", href: "#services" },
    ],
  },
  {
    category: "AI & Cloud",
    items: [
      { name: "AI Automation", href: "#features" },
      { name: "Custom LLM Integrations", href: "#features" },
      { name: "Cloud & DevOps", href: "#services" },
      { name: "Cybersecurity Audits", href: "#services" },
    ],
  },
];
