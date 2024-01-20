"use client"
import { useRef, useState } from "react"
import styles from "../styles/commands.module.css"
import commandsData from "../../../public/commands.json"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import TerminalIcon from "@mui/icons-material/Terminal"
import SearchIcon from "@mui/icons-material/Search"
import { motion } from "framer-motion"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

    const categoryListRef = useRef<HTMLDivElement>(null); // Create a ref for the commands list div
    const scrollLeftButton = () => {
        if (categoryListRef.current) {
            categoryListRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
        }
    };
    
    const scrollRightButton = () => {
        if (categoryListRef.current) {
            categoryListRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
        }
    };

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(event.clientX - categoryListRef.current!.offsetLeft);
        setScrollLeft(categoryListRef.current!.scrollLeft);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.clientX - categoryListRef.current!.offsetLeft;
        const scrollX = x - startX;
        categoryListRef.current!.scrollLeft = scrollLeft - scrollX;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    

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
            
            <div className={styles["categories"]} ref={categoryListRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <div className={styles['category-items']}>
                    <li className={`${styles["category-button"]} ${selectedCategory === "All" ? styles["category-button-selected"] : ""}`} onClick={() => filterCommandsByCategory("All")}>
                        All
                    </li>
                    {categories.map((category, index) => (
                        <li key={index} className={`${styles["category-button"]} ${selectedCategory === category ? styles["category-button-selected"] : ""}`} onClick={() => filterCommandsByCategory(category)}>
                            {category?.charAt(0).toUpperCase() + category?.slice(1)}
                        </li>
                    ))}
                </div>
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
                                {(command.arguments && command.arguments?.length > 0)  ? (
                                            command.arguments?.map((argument: String, index) => (
                                                <span key={index} className={styles["command-section-element"]}>
                                                    {argument}
                                                </span>
                                            ))
                                        ) : (
                                            <span key={index} className={styles["command-section-element"]}>
                                                none
                                            </span>
                                        )
                                        }
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
