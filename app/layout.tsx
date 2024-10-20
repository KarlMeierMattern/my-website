import type { Metadata } from "next";
import "./globals.css"; // Your global CSS
import { playfairDisplay } from "./fonts/fonts"; // Import Playfair Display from fonts.ts

export const metadata: Metadata = {
  title: {
    template: "%s | Your App Title",
    default: "Your App Title",
  },
  description: "Your app description here.",
  metadataBase: new URL("https://your-app-url.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
