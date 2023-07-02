"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1
                    variants={textVariant(1.1)}
                    className={styles.heroHeading}
                >
                    Metaverse
                </motion.h1>

                <motion.div
                    variants={textVariant(1.2)}
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className={styles.heroHeading}>Ma</h1>
                    <div className={styles.heroDText} />
                    <h1 className={styles.heroHeading}>Ness</h1>
                </motion.div>
            </div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="relative w-[120%] lg:-mt-[50px] md:mt-[50px] mt-[180px] xs:mt-[180px]"
            >
                <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
                <img
                    src="/cover.png"
                    alt="cover"
                    className="w-full xs:h-[500px] h-[500px] object-cover rounded-tl-[140px] z-10 relative"
                />

                <a href="#explore">
                    <div className="h-[20vh]">
                        <div className="w-full flex md:-left-[50px] md:top-[175px] xs:left-[350px] xs:-top-[75px] left-[260px] -top-[75px] absolute z-10">
                            <img
                                src="/stamp.png"
                                alt="stamp"
                                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                            />
                        </div>
                    </div>
                </a>
            </motion.div>
        </motion.div>
    </section>
);

export default Hero;
