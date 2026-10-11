export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  priceMonthly: number;
  priceYearly: number;
  featured?: boolean;
  features: {
    text: string;
    active: boolean;
  }[];
}

export const pricingPlans: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Solo users & startups",
    priceMonthly: 0,
    priceYearly: 0,
    featured: false,
    features: [
      { text: "Basic workflows", active: true },
      { text: "10 automation runs/month", active: true },
      { text: "Core integrations", active: true },
      { text: "Community support", active: true },
      { text: "Multi-user collaboration", active: false },
      { text: "Advanced analytics", active: false },
      { text: "Priority support", active: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Great for teams & advanced users",
    priceMonthly: 99,
    priceYearly: 79,
    featured: true,
    features: [
      { text: "Unlimited workflows", active: true },
      { text: "1000 automation runs/month", active: true },
      { text: "Premium integrations", active: true },
      { text: "Multi-user collaboration", active: true },
      { text: "Advanced analytics", active: true },
      { text: "Priority support", active: false },
      { text: "Premium assistance", active: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Built for large-scale operations",
    priceMonthly: 499,
    priceYearly: 399,
    featured: false,
    features: [
      { text: "All features unlocked", active: true },
      { text: "Premium integrations", active: true },
      { text: "Team management tools", active: true },
      { text: "Priority support", active: true },
      { text: "Premium assistance", active: true },
      { text: "Essential features", active: true },
      { text: "Advanced automations", active: true },
    ],
  },
];
