import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashu Sah - Full-Stack Developer | Java, Spring Boot, Next.js",
  description: "Full-stack developer with 2 years of experience in Java, Spring Boot, Laravel, Next.js, and AWS. Building scalable backend systems and high-performance web applications.",
  keywords: [
    "Full-Stack Developer",
    "Java Developer",
    "Spring Boot",
    "Next.js",
    "Laravel",
    "AWS",
    "REST APIs",
    "TypeScript",
    "React",
    "Software Engineer",
  ],
  authors: [{ name: "Ashu Sah" }],
  openGraph: {
    title: "Ashu Sah - Full-Stack Developer",
    description: "Building scalable backend systems and high-performance web applications with Java, Spring Boot, and Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
