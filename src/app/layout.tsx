import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SINCWEB INFOTECH | Best Digital Marketing & Web Designing Agency",
  description:
    "Streamline workflows, eliminate repetitive tasks, and unlock next-level efficiency with SINCWEB INFOTECH's powerful automation tools and digital solutions.",
  keywords:
    "Sincweb Infotech, Digital Marketing, Web Designing, Web Development, App Development, AI Automation, Software Agency",
  icons: {
    icon: "/images/logo/new.svg",
    shortcut: "/images/logo/new.svg",
    apple: "/images/logo/new.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} ${ibmPlexMono.variable} ${manrope.variable} dark`}
    >
      <body className="font-inter bg-[#0D1017] text-white min-h-screen antialiased flex flex-col selection:bg-[#5A9FFF]/30 selection:text-[#5DDCF6] overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var base = "${process.env.NEXT_PUBLIC_BASE_PATH || ""}";
                if (!base) return;
                function fixImages() {
                  var imgs = document.querySelectorAll('img[src^="/images/"]');
                  for (var i = 0; i < imgs.length; i++) {
                    var current = imgs[i].getAttribute('src');
                    if (current && current.indexOf(base) !== 0) {
                      imgs[i].src = base + current;
                    }
                  }
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', fixImages);
                } else {
                  fixImages();
                }
                if (window.MutationObserver) {
                  new MutationObserver(fixImages).observe(document.documentElement, {
                    childList: true,
                    subtree: true
                  });
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
