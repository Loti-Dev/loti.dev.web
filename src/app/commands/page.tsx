"use client"
import { useState } from "react"
import styles from "../styles/commands.module.css"
import commandsData from "../../../public/commands.json"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TerminalIcon from '@mui/icons-material/Terminal';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion"

export default function Refund() {
    const [commandsList, setCommandsList] = useState(
        commandsData.map(command => ({
            name: command.name,
            category: command.category,
            description: command.description,
            permission: command.permission,
            showContent: false // Add showContent property to track individual div's content visibility
        }))
    )

    const toggleContent = (index: number) => {
        setCommandsList(prevCommandsList => {
            const updatedCommandsList = [...prevCommandsList]
            updatedCommandsList[index] = {
                ...updatedCommandsList[index],
                showContent: !updatedCommandsList[index].showContent
            }
            return updatedCommandsList
        })
    }

    return (
        <section className={styles["content"]}>
            <div className={styles["top-section"]}>
                <div className={styles["top-section-left"]}>
                    <div className={styles["top-section-icon"]}>
                        <TerminalIcon width="70px" height="70px" />
                    </div>
                    <span className={styles["title"]}>Commands</span>
                </div>
                <div className={styles["top-section-right"]}>
                    <div className={styles["top-section-icon"]}>
                        <SearchIcon width="30px" height="30px" />
                    </div>
                </div>
            </div>
            <div className={styles["commands"]}>
                {commandsList.map((command, index) => (
                    <div
                        key={index}
                        className={styles["command"]}
                        onClick={() => toggleContent(index)}>
                        <div className={styles["command-top-content"]}>
                            <div className={styles["command-details"]}>
                                <div className={styles["command-details-inner"]}>
                                    <span className={styles["command-title"]}>{command.name}</span>
                                    <span className={styles["command-description"]}>
                                        {command.description}
                                    </span>
                                </div>
                            </div>
                            <ContentCopyIcon width="15px" height="15px" className={styles["copy-icon"]} />
                        </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: "easeOut", duration: 2 }}
                                className={styles["command-content-bottom"]}>
                                <div className={styles["command-section-outer"]}>
                                    <span className={styles["command-section-title"]}>
                                        arguments
                                    </span>
                                    <div className={styles["command-section"]}>
                                        <span className={styles["command-argument"]}>none</span>
                                    </div>
                                </div>
                                <div className={styles["command-section-outer"]}>
                                    <span className={styles["command-section-title"]}>
                                        permissions
                                    </span>
                                    <div className={styles["command-section"]}>
                                        <span className={styles["command-section-element"]}>
                                            {command.permission ? command.permission : "none"}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}
