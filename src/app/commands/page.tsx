"use client"
import { useState } from "react"
import styles from "../styles/commands.module.css"
import commandsData from "../../../public/commands.json"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import TerminalIcon from "@mui/icons-material/Terminal"
import SearchIcon from "@mui/icons-material/Search"
import { motion } from "framer-motion"

export default function Commands() {
    const [commandsList, setCommandsList] = useState(
        commandsData.map(command => ({
            name: command.name,
            category: command.category,
            arguments: command?.arguments,
            description: command.description,
            permission: command.permission,
            showContent: false
        }))
    )

    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = [...new Set(commandsData.map(command => command.category))] as string[]

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

    const filterCommandsByCategory = (category: string) => {
        setSelectedCategory(category)
    }

    const filteredCommandsList =
        selectedCategory === "All"
            ? commandsList
            : commandsList.filter(command => command.category === selectedCategory)

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
            <div className={styles["categories"]}>
                <button
                    className={
                        selectedCategory === "All"
                            ? styles["category-button-selected"]
                            : styles["category-button"]
                    }
                    onClick={() => filterCommandsByCategory("All")}>
                    All
                </button>
                {categories.map((category, index) => (
                    <>
                        <button
                            key={index}
                            className={
                                selectedCategory === category
                                    ? styles["category-button-selected"]
                                    : styles["category-button"]
                            }
                            onClick={() => filterCommandsByCategory(category)}>
                            {category?.charAt(0).toUpperCase() + category?.slice(1)} (
                            {commandsList.filter(command => command.category === category).length})
                        </button>
                    </>
                ))}
            </div>

            <div className={styles["commands"]}>
                {filteredCommandsList.map((command, index) => (
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
                            <ContentCopyIcon
                                width="15px"
                                height="15px"
                                className={styles["copy-icon"]}
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            className={styles["command-content-bottom"]}>
                            <div className={styles["command-section-outer"]}>
                                <span className={styles["command-section-title"]}>arguments</span>
                                <div className={styles["command-section"]}>
                                    <span className={styles["command-section-element"]}>
                                        {command.arguments ? command.arguments : "none"}
                                    </span>
                                </div>
                            </div>
                            <div className={styles["command-section-outer"]}>
                                <span className={styles["command-section-title"]}>permissions</span>
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
