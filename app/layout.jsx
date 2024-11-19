import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import Footer from "./(components)/Footer";
import SidePanel from "./(components)/SidePanel";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Book app",
  description: "Read your favourite comics online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container flex flex-col gap-4">
          <Nav />
          <div>
            <SidePanel />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
