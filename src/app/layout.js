import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/headers/Header";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Furniro",
  description: "Furniro Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
