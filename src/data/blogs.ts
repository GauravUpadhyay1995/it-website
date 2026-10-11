export interface BlogPost {
  id: string;
  title: string;
  date: string;
  datetime: string;
  tags: string[];
  image: string;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI Automation is Revolutionizing Customer Service Operations",
    date: "15/1/2025",
    datetime: "2025-01-15",
    tags: ["Automation", "AI"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "The Future of Machine Learning: Emerging Trends and Technologies",
    date: "22/1/2025",
    datetime: "2025-01-22",
    tags: ["Machine Learning", "Trends"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "AI Ethics and Governance: Building Trust in Artificial Intelligence",
    date: "5/2/2025",
    datetime: "2025-02-05",
    tags: ["Ethics", "Governance"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Strategic AI Implementation: A Step-by-Step Guide for Enterprises",
    date: "12/2/2025",
    datetime: "2025-02-12",
    tags: ["Strategy", "Implementation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Essential AI Tools and Platforms Every Business Should Know About",
    date: "18/2/2025",
    datetime: "2025-02-18",
    tags: ["Tools", "Platforms"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "The Next Decade of AI: Predictions and Opportunities for Business Growth",
    date: "25/2/2025",
    datetime: "2025-02-25",
    tags: ["Future", "Innovation"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  },
];
