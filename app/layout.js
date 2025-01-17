import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Landing Page  ",
  description: "Landing page",
};

const navbarcolour = "md:bg-gray-900 bg-gray-700";
const sectionstyles = "bg-opacity-50  font-mono hover:bg-gray-500 hover:text-white rounded-sm  " + {navbarcolour} + " flex-auto tracking-tighter  min-h-14 text-2xs sm:text-xl py-3 px-2 sm:px-4 max-w-fit"
const Navigationbar = () => {
  return (
    <div className={`rounded-sm border border-white border-x-0 flex text-center text-white ${navbarcolour}`}>
            <div className={`bg-opacity-50 ${navbarcolour} flex-auto min-h-14 font-mono text-6xs tracking-wider md:tracking-tighter sm:text-4xl sm:text-bold py-3`}>
                <Link  href='/' >TheCompany</Link>
            </div>
            <div className="md:flex hidden">
            <Link href="#about">
                <div className={sectionstyles}>
                About
                </div>
            </Link> 
            <Link href="#projects">
                <div className={sectionstyles}>
                Projects
                </div>
            </Link> 
            <Link href="#contact">
                <div className={sectionstyles}>
                Contact
                </div>
            </Link> 
            </div>
        </div>
  )
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigationbar />
        {children}
      </body>
    </html>
  );
}
