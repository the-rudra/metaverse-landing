"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText
                title="| People on the world"
                textStyles="text-center"
            />
            <TitleText
                title={
                    <>
                        Track friends around you and invite them to play
                        together in the same world
                    </>
                }
                textStyles="text-center"
            />

            <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="relative mt-[68px] flex w-full h-[550px]"
            >
                <img
                    src="/map.png"
                    alt="map"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] md:hidden sm:hidden lg:block">
                    <img
                        src="people-02.png"
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute lg:bottom-20 lg:right-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] hidden lg:block">
                    <img
                        src="people-01.png"
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
                {/* duplicate for medium viewport only */}
                <div className="absolute top-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] hidden lg:hidden md:flex">
                    <img
                        src="people-01.png"
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
                    <img
                        src="people-03.png"
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-[40%] left-[20%] w-[196px] p-[6px] rounded-[24px] bg-[#5d6680] hidden lg:flex">
                    <img
                        src="card-01.png"
                        alt="card"
                        className="w-full h-full"
                    />
                    <img
                        src="small-01.png"
                        alt="people"
                        className="absolute bottom-12 left-4"
                    />
                    <img
                        src="small-02.png"
                        alt="people"
                        className="absolute bottom-12 left-8"
                    />
                    <img
                        src="small-03.png"
                        alt="people"
                        className="absolute bottom-12 left-12"
                    />
                    <p className="absolute bottom-[53px] left-20 text-white sm:text-[10px] text-[6px]">
                        + 264 has joined
                    </p>
                    <h3 className="absolute font-semibold sm:text-[16px] text-[12px] bottom-4 left-4 text-white">
                        The Upside Down
                    </h3>
                </div>
                <div className="absolute lg:top-[5%] lg:right-[20%] w-[196px] p-[6px] rounded-[24px] bg-[#5d6680] hidden lg:flex">
                    <img
                        src="card-02.png"
                        alt="card"
                        className="w-full h-full"
                    />
                    <img
                        src="small-03.png"
                        alt="people"
                        className="absolute bottom-12 left-4"
                    />
                    <img
                        src="small-01.png"
                        alt="people"
                        className="absolute bottom-12 left-8"
                    />
                    <img
                        src="small-02.png"
                        alt="people"
                        className="absolute bottom-12 left-12"
                    />
                    <p className="absolute bottom-[53px] left-20 text-white sm:text-[10px] text-[6px]">
                        + 148 has joined
                    </p>
                    <h3 className="absolute font-semibold sm:text-[16px] text-[12px] bottom-4 left-4 text-white">
                        Hawkins Labs
                    </h3>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
