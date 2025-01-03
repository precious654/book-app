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
        <main className="containerr flex flex-col gap-2 pb-2">
          <Nav />
          <div className="flex gap-4 h-4/5">
            <SidePanel />
            <div className="w-10/12 bg-[#F9F9F9] rounded-lg px-4 py-2 h-full overflow-y-scroll no-scrollbar">
              {children}
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
