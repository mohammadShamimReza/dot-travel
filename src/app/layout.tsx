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
        <div className="">
          <Providers>
            <NavBar />
            <div className="">
              {" "}
              <div className="">{children}</div>
            </div>
            <ScrollToTopButton />
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
