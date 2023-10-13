import Footer from "@/components/ui/footer/Footer";
import NavBar from "@/components/ui/navbar/NavBar";
import ScrollToTopButton from "@/components/ui/scrollToTop/ScrollToTopButton";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dot Travel",
  description: "Generated DOt(shamim)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <Providers>
          <div className="">
            <NavBar />
            <div className="min-h-screen flex justify-center m-4">
              <div className="w-full max-w-7xl p-4 border border-b-0 border-t-0  border-r-gray-200 border-l-gray-200 dark:border-l-gray-600 dark:border-r-gray-600 ">
                {children}
              </div>
            </div>
            <ScrollToTopButton />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
