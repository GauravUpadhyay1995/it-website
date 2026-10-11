export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  metric1: {
    value: number;
    suffix: string;
    label: string;
  };
  metric2: {
    value: number;
    suffix: string;
    label: string;
  };
}

export const portfolioCaseStudies: CaseStudy[] = [
  {
    id: "smart-healthcare",
    title: "Smart Healthcare",
    subtitle: "AI-powered medical diagnostics & patient care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    metric1: {
      value: 85,
      suffix: "%",
      label: "Improved diagnostic accuracy",
    },
    metric2: {
      value: 50,
      suffix: "%",
      label: "Reduced wait times",
    },
  },
  {
    id: "fintech-revolution",
    title: "FinTech Revolution",
    subtitle: "AI-powered trading & risk management",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop",
    metric1: {
      value: 92,
      suffix: "%",
      label: "Trading accuracy",
    },
    metric2: {
      value: 65,
      suffix: "%",
      label: "Risk reduction & efficiency",
    },
  },
  {
    id: "smart-manufacturing",
    title: "Smart Manufacturing",
    subtitle: "AI-driven quality control & automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    metric1: {
      value: 78,
      suffix: "%",
      label: "Quality improvement",
    },
    metric2: {
      value: 45,
      suffix: "%",
      label: "Production efficiency",
    },
  },
  {
    id: "smart-retail",
    title: "Smart Retail",
    subtitle: "AI-powered inventory & customer analytics",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop",
    metric1: {
      value: 88,
      suffix: "%",
      label: "Sales prediction",
    },
    metric2: {
      value: 55,
      suffix: "%",
      label: "Customer satisfaction",
    },
  },
];
