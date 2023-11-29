import { Inter } from "next/font/google";
import "./globals.css";
import AppContext from "@/utils/contextApi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wal-cart",
  description: "Generated by create next app",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  );
}
