"use client"
import Image from "next/image"
import styles from "./styles/page.module.css"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Home() {
    const ref = useRef<HTMLDivElement>(null)
    const ref1 = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)

    const inView = useInView(ref)
    const inView1 = useInView(ref1)
    const inView2 = useInView(ref2)

    return (
        <div className={"content"}>
            <div className={styles["main-content"]}>
                <div className={styles["main-new"]}>
                    <p>New: Bot Re-Written in TypeScript</p>
                </div>
                <h1 className={styles["title"]}>Grief, A Multi-Purpose Bot.</h1>
                <p className={styles["description"]}>
                    Grief is a versatile bot, offering features like moderation, social commands,
                    and much more, making it perfect for all your server needs.
                </p>
                <div className={styles["buttons"]}>
                    <a href="https://discord.gg/invite/loti" className={styles["add"]}>
                        Support Server
                    </a>
                    <a href="#features" className={styles["browse"]}>
                        Browse Features
                    </a>
                </div>
            </div>

            <div className={styles["trusted-by-section"]}>
                <h2 className={styles["trusted-by-title"]}>
                    Trusted by over <span className={styles["white"]}>50</span> discord servers,
                    including:
                </h2>
                <div className={styles["server-slider"]}>
                    <div className={styles["slider-left"]}></div>
                    <div className={styles["slider-content"]}>
                        <div className={styles["slider-items"]}>
                            <div className={styles["server-item"]}>
                                <Image
                                    src="/raidhub.webp"
                                    alt="Server 1"
                                    width="50"
                                    height="50"
                                    className={styles["server-icon"]}
                                />
                                <div className={styles["server-info"]}>
                                    <p className={styles["server-name"]}>
                                        RaidHub{" "}
                                        <Image
                                            src="/discord.svg"
                                            alt="S"
                                            className={styles["discord-icon"]}
                                            width="50"
                                            height="50"
                                        />
                                    </p>
                                    <p className={styles["member-count"]}>1,500 members</p>
                                </div>
                            </div>
                            <div className={styles["server-item"]}>
                                <Image
                                    src="/lowmanhub.gif"
                                    alt="Server 2"
                                    width="50"
                                    height="50"
                                    className={styles["server-icon"]}
                                />
                                <div className={styles["server-info"]}>
                                    <p className={styles["server-name"]}>
                                        Lowman Hub
                                        <Image
                                            src="/discord.svg"
                                            alt="S"
                                            className={styles["discord-icon"]}
                                            width="50"
                                            height="50"
                                        />
                                    </p>
                                    <p className={styles["member-count"]}>1,000 members</p>
                                </div>
                            </div>
                            <div className={styles["server-item"]}>
                                <Image
                                    src="/femboy.webp"
                                    alt="Server 3"
                                    width="50"
                                    height="50"
                                    className={styles["server-icon"]}
                                />
                                <div className={styles["server-info"]}>
                                    <p className={styles["server-name"]}>
                                        femboyclub
                                        <Image
                                            src="/discord.svg"
                                            alt="S"
                                            className={styles["discord-icon"]}
                                            width="50"
                                            height="50"
                                        />
                                    </p>
                                    <p className={styles["member-count"]}>2,800 members</p>
                                </div>
                            </div>
                            <div className={styles["server-item"]}>
                                <Image
                                    src="/cemetery.gif"
                                    alt="Server 4"
                                    width="50"
                                    height="50"
                                    className={styles["server-icon"]}
                                />
                                <div className={styles["server-info"]}>
                                    <p className={styles["server-name"]}>
                                        Cemetery
                                        <Image
                                            src="/discord.svg"
                                            alt="S"
                                            className={styles["discord-icon"]}
                                            width="50"
                                            height="50"
                                        />
                                    </p>
                                    <p className={styles["member-count"]}>2,400 members</p>
                                </div>
                            </div>
                            <div className={styles["server-item"]}>
                                <Image
                                    src="/loti.webp"
                                    alt="Server 5"
                                    width="50"
                                    height="50"
                                    className={styles["server-icon"]}
                                />
                                <div className={styles["server-info"]}>
                                    <p className={styles["server-name"]}>
                                        Loti
                                        <Image
                                            src="/discord.svg"
                                            alt="S"
                                            className={styles["discord-icon"]}
                                            width="50"
                                            height="50"
                                        />
                                    </p>
                                    <p className={styles["member-count"]}>50 members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["slider-right"]}></div>
                </div>
            </div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                id="features"
                className={styles["feature"]}>
                <div className={styles["feature-example"]}>
                    <div className={styles["message"]}>
                        <div className={styles["message-user"]}>
                            <img src="/loti-pfp.png" />
                            <span className={styles["user"]}>Loti</span>
                            <span className={styles["tag"]}>Bot</span>
                        </div>

                        <div className={styles["message-content"]}>
                            Welcome to the server!
                            <div className={styles["embed"]}>
                                <div className={styles["embed-main"]}>
                                    <div className={styles["embed-author"]}>
                                        <img src="/loti-pfp.png" />
                                        <span>Embed Author :3</span>
                                    </div>
                                    <span className={styles["embed-title"]}>Embed Title :3</span>
                                    <span className={styles["embed-description"]}>
                                        Embed description :c
                                    </span>
                                    <div className={styles["fields-inline"]}>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["feature-information"]}>
                    <div className={styles["feature-icon"]}>
                        <div className={styles["feature-icon-left"]}>
                            <Image
                                src="/welcome-icon.png"
                                className={styles["feature-icon-image"]}
                                alt="welcome"
                                width="35"
                                height="35"
                            />
                        </div>
                        <span>Welcome Messages</span>
                    </div>
                    <h1>Let&apos;s Welcome New Members With Style</h1>
                    <p>
                        Welcome new members in style with Loti! Our feature-rich platform allows you
                        to create stunning welcome messages that leave a lasting impression
                    </p>
                    <a href="#learn">Learn More About Welcome & Goodbye</a>
                </div>
            </motion.div>
            <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                id="features"
                className={styles["feature"]}>
                <div className={styles["feature-information"]}>
                    <div className={styles["feature-icon"]}>
                        <div className={styles["feature-icon-left"]}>
                            <Image
                                src="/embed-icon.png"
                                className={styles["feature-icon-image"]}
                                alt="embed"
                                width="35"
                                height="35"
                            />
                        </div>
                        <span>Embed Messages</span>
                    </div>
                    <h1>Easily create embeds for your server!</h1>
                    <p>
                        Loti offers a simple yet powerful embed customization feature that allows
                        you to showcase your creativity. With just a few clicks, you can design
                        visually appealing embed messages and send them to your preferred channels.
                    </p>
                    <a href="#learn">Learn More About Embed Messages</a>
                </div>
                <div className={styles["feature-example"]}>
                    <div className={styles["message"]}>
                        <div className={styles["message-content"]}>
                            <div className={styles["embed"]}>
                                <div className={styles["embed-main"]}>
                                    <span className={styles["embed-title"]}>Embed Title :3</span>
                                    <span className={styles["embed-description"]}>
                                        Embed description :c
                                    </span>
                                    <div className={styles["fields-inline"]}>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
            </motion.div>
            <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                id="features"
                className={styles["feature"]}>
                <div className={styles["feature-example"]}>
                    <div className={styles["message"]}>
                        <div className={styles["message-content"]}>
                            <div className={styles["embed"]}>
                                <div className={styles["embed-main"]}>
                                    <span className={styles["embed-title"]}>Embed Title :3</span>
                                    <span className={styles["embed-description"]}>
                                        Embed description :c
                                    </span>
                                    <div className={styles["fields-inline"]}>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>
                                                Value
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["feature-information"]}>
                    <div className={styles["feature-icon"]}>
                        <div className={styles["feature-icon-left"]}>
                            <Image
                                src="/moderator.png"
                                className={styles["feature-icon-image"]}
                                alt="welcome"
                                width="35"
                                height="35"
                            />
                        </div>
                        <span>Moderation Tools</span>
                    </div>
                    <h1>Moderate your server with advanced moderation tools</h1>
                    <p>
                        Our advanced moderation tools provide powerful capabilities for effectively
                        managing and moderating your server.
                    </p>
                    <a href="#learn">Learn More About Moderation Tools</a>
                </div>
            </motion.div>
        </div>
    )
}
