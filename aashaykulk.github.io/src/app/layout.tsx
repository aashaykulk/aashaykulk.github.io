import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "aashaykulk",
  description: "aashaykulk's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-red text-red font-courier"}>
      <Navbar /> {/*Include Navbar at the top of every page*/}
       <main className = "container mx-auto p-4"> {children} </main>
      </body>
    </html>
  );
}
