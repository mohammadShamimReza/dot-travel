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
              <div className="w-full max-w-7xl p-4     ">
                {children}
                <ScrollToTopButton />
                <hr />
                <Footer />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
