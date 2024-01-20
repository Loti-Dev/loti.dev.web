"use client"
import { useEffect, useRef, useState } from "react"
import styles from "../../styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Loti from "../../../../public/grief.webp"
import { signIn, useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const { data: session } = useSession()
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(!isDropdownOpen)
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isDropdownOpen])

    const handleDropdownClick = () => {
        if (session) {
            setDropdownOpen(!isDropdownOpen)
        }
    }

    const isCommandsPage = pathname === "/commands"

    return (
        <>
            <div className={styles["navbar"]}>
                <div className={styles["navbar-left"]}>
                    <Link href="/">
                        <Image src={Loti} width="50" height="50" alt="logo" />
                        <span>Grief</span>
                    </Link>
                </div>
                <div className={styles["navbar-center"]}>
                    <div
                        className={`${styles["navbar-link"]} ${
                            isCommandsPage ? styles["navbar-selected"] : ""
                        }`}>
                        <Link href="/commands">Commands</Link>
                    </div>
                    <div className={styles["navbar-link"]}>
                        <Link href="/resources">Resources</Link>
                    </div>
                    <Link href="/purchase" className={styles["navbar-premium"]}>
                        <span>Invite Me</span>
                        <Image src="/stars.png" width="20" height="20" alt="stars" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
