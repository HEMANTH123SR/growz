import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/fotter";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
