import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aftaab Siddiki - Senior Software Engineer",
  description: "Senior Software Engineer specializing in large-scale distributed systems, microservices architecture, and real-time data processing. Based in Singapore.",
  keywords: "software engineer, distributed systems, microservices, java, golang, kafka, temporal, singapore",
  authors: [{ name: "Aftaab Siddiki" }],
  openGraph: {
    title: "Aftaab Siddiki - Senior Software Engineer",
    description: "Designing and building large-scale distributed systems that power modern applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
