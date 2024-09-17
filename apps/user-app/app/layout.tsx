
import { Providers } from "../providers";
import { AppbarClient } from "../components/AppbarClient";
import "./globals.css";
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">

            <AppbarClient />

            {children}
          </div>
        </body>

      </Providers>
    </html>
  );
}
