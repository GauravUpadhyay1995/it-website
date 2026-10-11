export interface ToolItem {
  name: string;
  category?: string;
  icon: string; // SVG path or Lucide representation
  invert?: boolean;
}

export const toolsRow1: ToolItem[] = [
  { name: "Astro", icon: "astro" },
  { name: "Slack", icon: "slack" },
  { name: "Netflix", icon: "netflix" },
  { name: "Opera", icon: "opera" },
  { name: "GitHub", icon: "github", invert: true },
  { name: "Spotify", icon: "spotify" },
  { name: "YouTube", icon: "youtube" },
  { name: "WhatsApp", icon: "whatsapp" },
  { name: "Telegram", icon: "telegram" },
  { name: "TikTok", icon: "tiktok" },
  { name: "X", icon: "x" },
  { name: "Pinterest", icon: "pinterest" },
  { name: "Reddit", icon: "reddit" },
  { name: "Snapchat", icon: "snapchat" },
  { name: "Zoom", icon: "zoom" },
];

export const toolsRow2: ToolItem[] = [
  { name: "Mistral AI", icon: "mistral" },
  { name: "Music AI", icon: "music" },
  { name: "Notion", icon: "notion" },
  { name: "OpenAI", icon: "openai", invert: true },
  { name: "Stripe", icon: "stripe" },
  { name: "Suno", icon: "suno", invert: true },
  { name: "Perplexity AI", icon: "perplexity" },
  { name: "Jira", icon: "jira" },
  { name: "Shopify", icon: "shopify" },
  { name: "Google Meet", icon: "meet" },
  { name: "Mastercard", icon: "mastercard" },
  { name: "Grok AI", icon: "grok", invert: true },
];
