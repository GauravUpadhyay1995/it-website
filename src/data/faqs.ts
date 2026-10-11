export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsList: FaqItem[] = [
  {
    id: "faq-1",
    question: "What AI services does Sincweb Infotech offer?",
    answer:
      "Sincweb Infotech provides comprehensive AI solutions including custom AI development, machine learning model training, AI consulting, automation services, chatbot development, and AI integration into existing business systems. We work with businesses of all sizes to implement AI solutions that drive efficiency and growth.",
  },
  {
    id: "faq-2",
    question: "How long does it take to implement an AI solution?",
    answer:
      "Implementation timelines vary based on project complexity and scope. Simple AI integrations can take 2-4 weeks, while comprehensive custom AI solutions typically require 8-16 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    id: "faq-3",
    question: "Do I need technical expertise to work with Sincweb?",
    answer:
      "No technical expertise is required. Our team handles all technical aspects of AI implementation, from development to deployment. We work closely with your team to understand your business needs and translate them into effective AI solutions. We also provide comprehensive training and documentation.",
  },
  {
    id: "faq-4",
    question: "What kind of support do you provide after implementation?",
    answer:
      "We offer comprehensive post-implementation support including 24/7 technical assistance, regular system updates, performance monitoring, and optimization services. Our support packages are tailored to your needs, ensuring your AI solutions continue to deliver value and adapt to your evolving business requirements.",
  },
];
