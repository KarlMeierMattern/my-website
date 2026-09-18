import type { Metadata } from "next";
import "./globals.css";
import { instrumentSans } from "./fonts/fonts";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    template: "%s | Karl Alexander",
    default: "Karl Alexander",
  },
  description:
    "Portfolio of Karl Alexander — software engineer, data science, and M&A transaction services.",
  metadataBase: new URL("https://my-website.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", instrumentSans.variable)}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={cn(instrumentSans.className, "antialiased")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
