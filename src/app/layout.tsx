import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Wardhan - Full Stack Developer",
  description: "Full Stack Developer with 4+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, and cloud technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Harsh Wardhan", "Portfolio"],
  authors: [{ name: "Harsh Wardhan" }],
  openGraph: {
    title: "Harsh Wardhan - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Wardhan - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
