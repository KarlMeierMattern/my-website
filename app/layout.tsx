import type { Metadata } from "next";
import "./globals.css"; // Your global CSS
import { playfairDisplay } from "./fonts/fonts"; // Import Playfair Display from fonts.ts
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s | My portfolio website",
    default: "My portfolio website",
  },
  description: "My portfolio website.",
  metadataBase: new URL("https://your-app-url.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={`${playfairDisplay.className} antialiased font-mono`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
