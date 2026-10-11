export interface Testimonial {
  id: string;
  name: string;
  company: string;
  avatar: string;
  text: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Elijah Brooks",
    company: "Nexora Tech",
    avatar: "/images/opai-avatar-img-01.png",
    text: "Our customer support response time dropped by 60%. Sincweb's automation is a real game-changer for our team.",
    stars: 5,
  },
  {
    id: "2",
    name: "Sophia Martinez",
    company: "Brightline Solutions",
    avatar: "/images/opai-avatar-img-02.png",
    text: "The AI-powered insights helped us identify trends we were missing. Our conversion rate increased by 42% in just three months.",
    stars: 5,
  },
  {
    id: "3",
    name: "David Chen",
    company: "Orion Ventures",
    avatar: "/images/opai-avatar-img-03.png",
    text: "With Sincweb, scaling our operations didn't mean scaling our headcount. It's efficiency at its best.",
    stars: 5,
  },
  {
    id: "4",
    name: "Amelia Patel",
    company: "Skyline Media",
    avatar: "/images/opai-avatar-img-04.png",
    text: "Sincweb gave us the tools to personalize marketing at scale without adding complexity. ROI improved by 58%.",
    stars: 5,
  },
  {
    id: "5",
    name: "Michael Johnson",
    company: "Vertex Analytics",
    avatar: "/images/opai-avatar-img-05.png",
    text: "We reduced operational costs by 35% after implementing Sincweb solutions—without sacrificing quality. Best decision we made.",
    stars: 5,
  },
  {
    id: "6",
    name: "Liam Walker",
    company: "Quantum Insights",
    avatar: "/images/opai-avatar-img-06.png",
    text: "Automating reports freed up our team to focus on strategy instead of spreadsheets. Productivity skyrocketed.",
    stars: 5,
  },
  {
    id: "7",
    name: "Isabella Rossi",
    company: "Lunaris Systems",
    avatar: "/images/opai-avatar-img-07.png",
    text: "Sincweb integrated seamlessly with our systems—zero downtime, maximum impact. The implementation was flawless.",
    stars: 5,
  },
];
