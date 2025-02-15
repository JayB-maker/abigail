import type { Metadata } from "next";
import { Gloock } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import { DM_Sans } from "next/font/google";
// import "./globals.css";
import "./views/styles/globals.css";
import Header from "./views/components/layout/Header";
import Footer from "./views/components/layout/Footer";

// const poppins = Poppins({ subsets: ["latin"] });

const inter = Noto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanni Abigail—Product Manager",
  description:
    "Sanni Abigail is a skilled Product Manager with a passion for creating innovative solutions and driving product success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="container mx-auto px-4 lg:px-10 max-w-[1200px] min-h-96 ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
