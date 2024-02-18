import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles/globals.css"
import Navbar from "./components/global/Navbar"
import Footer from "./components/global/Footer"
import Canvas from "./components/global/Canvas"
import NextAuthProvider from "@/app/context/NextAuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "resent",
    description:
        "resent is a versatile bot, offering features like moderation, social commands, and much more, making it perfect for all your server needs."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
                    rel="stylesheet"
                />
                <meta property="og:image" content="/loti-pfp.png" />
            </head>
            <body className={"loti"}>
                <NextAuthProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <Canvas />
                </NextAuthProvider>
            </body>
        </html>
    )
}
