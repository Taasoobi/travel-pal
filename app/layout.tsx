import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
//import Modal from "./components/modals/Modal"; //used to check styling of modal during creation.
import RegisterModal from "./components/modals/RegisterModal";

/* Previous code for fonts might use future.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export const metadata: Metadata = {
  title: "TravelSoru",
  description: "Welcome To TravelSoru!",
};

const font = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <RegisterModal/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

/* previous classname was: className={`${geistSans.variable} ${geistMono.variable} antialiased`}*/