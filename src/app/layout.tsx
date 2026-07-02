import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: "Mirza Altamash Baig | Software Engineer",
  description: "Full Stack Developer and IT Intern specializing in enterprise workflow systems, backend architecture, and MERN stack applications.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Backend Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Portfolio Website",
    "Mirza Altamash Baig"
  ],
  authors: [{ name: "Mirza Altamash Baig" }],
  creator: "Mirza Altamash Baig",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Mirza Altamash Baig | Software Engineer",
    description: "Full Stack Developer and IT Intern specializing in enterprise workflow systems, backend architecture, and MERN stack applications.",
    siteName: "Mirza Altamash Baig Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirza Altamash Baig | Software Engineer",
    description: "Full Stack Developer and IT Intern specializing in enterprise workflow systems, backend architecture, and MERN stack applications.",
    creator: "@mirzaaltamash",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased flex flex-col selection:bg-primary/20 selection:text-primary`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mirza Altamash Baig",
              url: siteConfig.url,
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/Mirza-Altamash",
                "https://www.linkedin.com/in/mirza-altamash-baig"
              ]
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
